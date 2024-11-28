const express = require('express');
app = express();
port = 7865;

app.get('/', function (req, res) {
    res.send('Welcome to the payment system')
})

app.get('/cart/:id(\\d+)', function (req, res) {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
})

app.listen(port, function () {
    console.log(`API available on localhost port ${port}`)
})