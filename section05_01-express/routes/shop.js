const express = require('express');

const path = require('path')
const router = express.Router();

router.use('/', (req, res, next) => {
    console.log("This always runs!");
    next();
})

router.get('/', (req, res, next) => {
    console.log("In the another middleware");
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
})

module.exports = router;