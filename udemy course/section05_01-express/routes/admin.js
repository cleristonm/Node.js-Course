const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    console.log("In the 'add-product' middleware");
    // res.sendFile(path.join(__dirname, '../', 'views', 'product.html'));
    res.sendFile(path.join(rootDir, 'views', 'product.html'));
})

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;