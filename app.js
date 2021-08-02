// app.js
const express = require('express');
const app     = express();
const hbs     = require('hbs'); 


const productsArr = require('./data/products')

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));



/* ROUTES */

app.get('/', (req, res, next) => {
  res.render("index");
});


app.get('/products', (req, res, next) => {
    res.render("product-list", {productsArr});
});


// app.get('/products/:categoryName', (req, res) => {

//     res.render("products-list");
// });




app.listen(3000, () => console.log('App listening on port 3000!'));
