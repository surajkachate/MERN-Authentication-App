const express = require('express');
var app = express();

const userroute = require('./routes/userroute');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/api/user/', userroute);

app.get('/', (req, res) => {
    res.end('This is backend');
});

app.listen(5000, () => {
    console.log('Server started on port');
});