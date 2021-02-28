const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//This middleware parse our chunks of body in a body
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    console.log("This always runs!");
    next();
})

app.use('/add-product', (req, res, next) => {
    console.log("In the 'add-product' middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');
})

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
})

app.use('/', (req, res, next) => {
    console.log("In the another middleware");
    res.send('<h1>Hello from Express!</h1><p><a href="add-product">Add product</a></p>');
})




// const server = http.createServer(app);

// server.listen(3000);


app.listen(3000);