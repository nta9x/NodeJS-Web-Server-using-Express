var express = require('express');
var shotid = require('shortid');
var db = require('../db');
const { forEach } = require('../db');
const router = express.Router();

router.get('/', (req, res)=>{
    var trans = db.get('transactions').value();
    console.log(trans);
    var data =[];
    trans.forEach(element => {
        console.log("abccccc"+ element.idUser, element.idBook)
        var userData = db.get('users').find({id: element.idUser}).value();
        var bookData = db.get('books').find({id: element.idBook}).value();
        data.push({user: userData, book: bookData});
        })
    console.log(data);
    res.render('transactions/index',{
        transactions: data
    })
});

router.get('/create', (req, res)=>{
    var dataTrans= {
        users: db.get("users").value(),
        books: db.get("books").value()
    };
    res.render('transactions/create',{
        name: "anana",
        dataTrans: dataTrans
    })

});
router.post('/create', (req, res)=>{
    var reqData = req.body;
    var userDB = db.get('users').find({name: reqData.userName}).value();
    var bookDB = db.get('books').find({name: reqData.bookName}).value();
    db.get("transactions").push({id: shotid.generate(), idUser: userDB.id, idBook: bookDB.id}).write();
    res.redirect('/transactions');
});


module.exports = router;