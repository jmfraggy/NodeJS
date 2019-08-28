const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router(); // Mini express app

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
 }); // Middleware func

 // /admin/add-product => POST
 router.post('/add-product', (req, res, next)  => {
    console.log(req.body);
    res.redirect('/');
 }); // Only POST request

module.exports = router;
