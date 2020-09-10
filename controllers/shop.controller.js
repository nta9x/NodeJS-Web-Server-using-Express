const db = require('../db');
const { forEach } = require('../db');

module.exports.index = function(req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = parseInt(req.query.perPage) || 12;
    var products = db.get('products').value();
    var totalPage = Math.ceil(products.length/perPage);
    var drop = (page - 1) * perPage;
    console.log(totalPage)
    var a =["shop?page=2","shop?page=1","shop?page=2","shop?page=3","shop?page=4","shop?page=5","shop?page=6",];
    for(var i=0 ;i<a.length; i++){
        a[i] = "shop?page="+(page+i);
    }
    if(page>totalPage){
        page = totalPage;
    }
    console.log(a)
    
    res.render('shop/index', { 
        products: db.get('products').drop(drop).take(perPage).value(), 
        page: page,
        totalPage: totalPage,
        a: a,
        perPage: perPage
    });
};
module.exports.detail = function(req, res){
    res.render('shop/detail')
}