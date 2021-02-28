const http = require('http');

const express = require('express');

const app = express();

app.use( (req, res, next) => {
    console.log("In the middleware");
    ///allow the request to continue to the next middleware, 
    // because here I am not return a respose
    next(); 
})

app.use('/', (req, res, next) => {
    console.log("This always runs!");
    next();
})

app.use('/add-product', (req, res, next) => {
    console.log("In the 'add-product' middleware");
    res.send("<h1>The 'add-product' page</h1>")
})

app.use('/', (req, res, next) => {
    console.log("In the another middleware");
    res.send("<h1>Hello from Express!</h1>")
})




// const server = http.createServer(app);

// server.listen(3000);


app.listen(3000);