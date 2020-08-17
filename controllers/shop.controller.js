const db = require('../db');

module.exports.index = function(req, res) {
    res.render('shop/index', { 
        products: db.get('products').value()
    });
};