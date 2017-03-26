const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8000, (err) => {
    if (err) console.log(err);

    console.log('listening on: http://localhost:8000');
});