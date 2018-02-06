const express = require('express');
const router = express.Router();
const app = express(); // define our app using express

// const ListProxies = require('./proxy.json');



// router.get('/api/proxy', function(req, res, next) {
//     res.send({
//         message: "ListProxies",
//         members: proxies
//     })
// })


router.get('/api', function(req, res) {
    res.json({ message: 'Welcome to Api Proxy-Storage !' });
});



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome to Api Proxy-Storage' });
});

module.exports = router;