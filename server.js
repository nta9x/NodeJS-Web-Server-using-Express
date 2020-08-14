//module npm
const express = require('express');;
const userRouter = require('./routes/user.route');
const bookRouter = require('./routes/book.route');
const transactionRouter =require('./routes/transaction.route');
const authLoginRouter = require('./routes/login.route')
const port = 3000;

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const db = require('./db');
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res)=>{
    res.render('index', {name: 'NTA'})
});

app.get('/auth/login', (req, res)=>{
    res.render('auth/login')
});
app.get('/search',(req, res)=> {
    var q = req.query.q;
    var resul = db.get('users').value().filter( user => user.name.toLowerCase().indexOf(q.toLowerCase())!=-1);
    res.render('users/', {users:resul, value: q})
});
app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/transactions', transactionRouter);
app.use('/auth/login', authLoginRouter)
app.listen(port, () => console.log('Example app listening at http://localhost:' + port));
