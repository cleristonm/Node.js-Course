const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//This middleware parse our chunks of body in a body
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname, 'public')));

//The default is /
app.use( (req, res, next) => {    
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

// const server = http.createServer(app);

// server.listen(3000);


app.listen(3000);