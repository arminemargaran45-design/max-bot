const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const TOKEN = 'f9LHodD0cOL42IwnzjW1CaXuuJvqgnaPXfkR0tSYUBj0Duq8-cEfuvvGcVeCdpkiI_AoJDCLkR_TDjxsZLGY';

app.get('/', (req, res) => {
    res.send('MAX BOT WORKING');
});

app.post('/', async (req, res) => {

    console.log('Сообщение от MAX:');
    console.log(JSON.stringify(req.body, null, 2));

    try {

        const chatId = req.body?.message?.chat?.chatId;

        if (chatId) {

            const message =
                'Выберите раздел:\\n\\n' +
                '1. Новости\\n' +
                '2. График\\n' +
                '3. Контакты\\n' +
                '4. Задачи\\n' +
                '5. Помощь';

            await axios.post(
                'https://botapi.max.ru/messages',
                {
                    chat_id: chatId,
                    text: message
                },
                {
                    headers: {
                        Authorization: `Bearer ${TOKEN}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('Ответ отправлен');
        }

    } catch (error) {
        console.log(error.response?.data || error.message);
    }

    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});