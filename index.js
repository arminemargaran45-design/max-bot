const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('MAX BOT WORKING');
});

app.post('/', async (req, res) => {

    console.log('СООБЩЕНИЕ ОТ MAX:');
    console.log(JSON.stringify(req.body, null, 2));

    res.status(200).json({
        text:
            'Выберите раздел:\n\n' +
            '1. Новости\n' +
            '2. График\n' +
            '3. Контакты\n' +
            '4. Задачи\n' +
            '5. Помощь'
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});