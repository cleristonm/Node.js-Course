const http = require('http');

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("First middleware");
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Second middleware");
//     next();
// })

app.use( "/users", (req, res, next) => {
    console.log("/users middleware");
    res.send("<h1>The users are : admin, root, guest</h1>"+
             "<h1><a href=\"..\">Go to the root</a></h1>");
})

app.use( "/", (req, res, next) => {
    console.log("/ middleware");
    res.send("<h1><a href=\"users\">See the users</a></h1>");
})

app.listen(3000);