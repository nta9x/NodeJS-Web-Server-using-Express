const db = require('../db');
const shotid = require('shortid');

module.exports.index = function(req, res) {
    res.render('users/index', { 
        users: db.get('users').value()
    });
};
module.exports.create = function(req, res){
    res.render('users/create');
};
module.exports.postCreate = function(req, res){
    req.body.id = shotid.generate();
    console.log(res.locals);
    db.get('users').push(req.body).write();
    res.redirect('/users');
};
module.exports.views = function(req, res){
    var id = req.params.id;
    var user = db.get('users').find({id: id}).value();
    res.render('users/view',{ users: user});
};
module.exports.delete = function(req, res){
    var id = req.params.id;
    var book = db.get('users').find({id: id}).value();
    console.log(book);
    var data = db.get('users');
    data.splice(data.indexOf(book),1).write();
    res.redirect('/users');
};
