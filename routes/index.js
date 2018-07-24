var express = require('express');
var router = express.Router();

// 引入逻辑处理
var newsData = require('../servers/newsData');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        page: 'home'
    });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', Object.assign({
        page: 'about'
    }, newsData({
        pageNum: req.query.page || 1,
        size: req.query.size || 4
    })));
});

/* GET product page. */
router.get('/product', function(req, res, next) {
    res.render('product', {
        page: 'product'
    });
});

/* GET news page. */
router.get('/news', function(req, res, next) {
    res.render('news/list', Object.assign({ 
        page: 'news',
        pagerLink: '/news?page='
    }, newsData({
        pageNum: req.query.page || 1,
        size: req.query.size || 6
    })));
});

/* GET news item page. */
router.get('/news-item', function(req, res, next) {
    res.render('news/item', Object.assign({
        page: 'news'
    }, newsData({
        itemPage: req.query.index || 0
    })));
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', Object.assign({
        page: 'contact'
    }, newsData({
        pageNum: req.query.page || 1,
        size: req.query.size || 4
    })));
});

module.exports = router;
