const db = require('../db');
const shotid = require('shortid');

module.exports.index = function(req, res) {
    res.render('products/index', { 
        products: db.get('products').value()
    });
};
module.exports.create = function(req, res){
    res.render('products/create');
};
module.exports.postCreate = function(req, res){
    req.body.id = shotid.generate();
    console.log(res.locals);
    db.get('products').push(req.body).write();
    res.redirect('/products');
};
module.exports.views = function(req, res){
    var id = req.params.id;
    var product = db.get('products').find({id: id}).value();
    res.render('products/view',{ products: product});
};
module.exports.delete = function(req, res){
    var id = req.params.id;
    var products = db.get('products').find({id: id}).value();
    console.log(products);
    var data = db.get('products');
    data.splice(data.indexOf(products),1).write();
    res.redirect('/products');
};
module.exports.search = function (req, res){
    var q = req.query.q;
    var resul = db.get('products').value().filter( product => product.name.toLowerCase().indexOf(q.toLowerCase())!=-1);
    res.render('products/', {products:resul, value: q})
};