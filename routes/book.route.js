var express = require('express');
var shotid = require('shortid');

const db = require('../db');
const router = express.Router();

router.get('/', (req, res)=> {
    var books = db.get('books').value();   
    res.render('books/index', { 
        books: books
    });
});
module.exports = router;

router.get('/create', (req, res) => res.render('books/create'));

router.post('/create', (req, res) => {
    req.body.id = shotid.generate();
    db.get('books').push(req.body).write();
    res.redirect('/books');
});
router.get('/:id', (req, res)=>{
    var id = req.params.id;
    var user = db.get('books').find({id: id}).value();
    res.render('books/view',{ books: user});
});

router.get('/delete/:id', (req, res)=>{
    var id = req.params.id;
    console.log('day la id:'+id)
    var book = db.get('books').find({id: id}).value();
    console.log(book);
    var data = db.get('books');
    data.splice(data.indexOf(book),1).write();
    res.redirect('/books');
})