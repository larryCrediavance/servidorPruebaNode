require('dotenv').config();

const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//servir contenido estatico
app.use( express.static('public') );

app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'Larry boj Meza',
    titulo: 'Aprendiendo Node'
  });
});

app.get('/generic', function (req, res) {
    res.render('generic',{
      nombre: 'Larry boj Meza',
      titulo: 'Aprendiendo Node'
    });
  })

  app.get('/elements', function (req, res) {
    res.render('elements',{
      nombre: 'Larry boj Meza',
      titulo: 'Aprendiendo Node'
    });
  })

  //ruta por default
  app.get('*', function (req, res) {
    //res.send('404 | Pagina no existe...')
    res.sendFile( __dirname + '/public/404.html');
  })

//app.listen(8080)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })