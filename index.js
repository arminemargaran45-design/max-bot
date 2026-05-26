const express = require('express');

const app = express();

app.use(express.json());

const TOKEN = 'f9LHodD0cOL42IwnzjW1CaXuuJvqgnaPXfkR0tSYUBj0Duq8-cEfuvvGcVeCdpkiI_AoJDCLkR_TDjxsZLGY';

app.get('/', (req, res) => {
    res.send('MAX BOT WORKING');
});

app.post('/webhook', async (req, res) => {

    console.log('Сообщение от MAX:');
    console.log(JSON.stringify(req.body, null, 2));

    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});