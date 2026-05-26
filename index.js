const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('MAX BOT WORKING');
});

app.post('/webhook', async (req, res) => {

    console.log('Webhook от amoCRM:');
    console.log(JSON.stringify(req.body, null, 2));

    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});