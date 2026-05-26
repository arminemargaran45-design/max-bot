app.post('/webhook', async (req, res) => {

    console.log('Сообщение от MAX:');
    console.log(JSON.stringify(req.body, null, 2));

    const message =
        'Выберите раздел:\n\n' +
        '1. Новости\n' +
        '2. График\n' +
        '3. Контакты\n' +
        '4. Задачи\n' +
        '5. Помощь';

    res.status(200).json({
        message: {
            text: message
        }
    });

});