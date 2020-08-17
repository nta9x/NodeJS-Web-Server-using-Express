const db = require('../db');
const shotid = require('shortid');
const md5 = require('md5');

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
    req.body.password = md5(req.body.password);
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
module.exports.search = function (req, res){
    var q = req.query.q;
    var resul = db.get('users').value().filter( user => user.name.toLowerCase().indexOf(q.toLowerCase())!=-1);
    res.render('users/', {users:resul, value: q})
};
