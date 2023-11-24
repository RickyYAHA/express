const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials('./src/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Strona główna',
    });
});

app.get('/omnie', (req, res) => {
    res.render('omnie', {
        pageTitle: 'Strona o mnie',
    });
});
app.get('/kontakt', (req, res) => {
    res.render('kontakt', {
        pageTitle: 'Strona kontakt',
    });
});

app.listen(5000, () => {
    console.log('Serwer działa!');
});