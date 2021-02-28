const express = require('express');

const router = express.Router();

router.use('/', (req, res, next) => {
    console.log("This always runs!");
    next();
})

router.get('/', (req, res, next) => {
    console.log("In the another middleware");
    res.send('<h1>Hello from Express!</h1><p><a href="add-product">Add product</a></p>');
})

module.exports = router;