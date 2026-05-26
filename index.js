require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('MAX BOT WORKING');
});

app.post('/webhook', (req, res) => {

    console.log('Пришел webhook');

    console.log(req.body);

    res.sendStatus(200);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});