var express = require('express');
var router = express.Router();

// 引入逻辑处理
var newsData = require('../servers/newsData');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about');
});

/* GET product page. */
router.get('/product', function(req, res, next) {
    res.render('product');
});

/* GET news page. */
router.get('/news', function(req, res, next) {
    res.render('news/list', Object.assign({ pagerLink: '/news?page=' }, newsData({
        pageNum: req.query.page || 1,
        size: req.query.size || 6
    })));
});

/* GET news item page. */
router.get('/news-item', function(req, res, next) {
    res.render('news/item', newsData({
        itemPage: req.query.index || 1
    }));
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact');
});

module.exports = router;
