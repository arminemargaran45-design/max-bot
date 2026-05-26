const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const TOKEN = 'f9LHodD0cOL42IwnzjW1CaXuuJvqgnaPXfkR0tSYUBj0Duq8-cEfuvvGcVeCdpkiI_AoJDCLkR_TDjxsZLGY';

app.get('/', (req, res) => {
    res.send('MAX BOT WORKING');
});

app.post('/webhook', async (req, res) => {

    console.log('Сообщение от MAX:');
    console.log(JSON.stringify(req.body, null, 2));

    try {

        const chatId = req.body.chat_id;

        await axios.post(
            'https://botapi.max.ru/messages',
            {
                chat_id: chatId,
                text:
                    'Выберите раздел:\n\n' +
                    '1. Новости\n' +
                    '2. График\n' +
                    '3. Контакты\n' +
                    '4. Задачи\n' +
                    '5. Помощь'
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
        );

    } catch (error) {
        console.log(error.response?.data || error.message);
    }

    res.sendStatus(200);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});