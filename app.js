const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res, next) => {
    res.render('home');
});

app.get('/works', (req, res, next) => {
    res.render('works');
});

app.get('/gallery', (req, res, next) => {
    res.render('gallery');
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

const port = 3000;
app.listen(port, () => console.log(`Application running at port ${port}.`));