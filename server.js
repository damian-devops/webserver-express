const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'daMian sCh'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        img: 'assets/img/photo1.png'
    });
});


app.listen(port, () => {
        console.log('Escuchando peticiones en el puerto' + port);
    })
    // app.get('/data', (req, res) => {
    //     res.send('Hello Data');
    // });

// app.listen(8080, () => {
//     console.log('Escuchando peticiones en el puerto 8080');
// })