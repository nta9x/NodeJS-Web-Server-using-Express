//module npm
const express = require('express');;
const userRouter = require('./routes/user.route');
const bookRouter = require('./routes/book.route');
const transactionRouter =require('./routes/transaction.route');
const loginRouter = require('./routes/login.route');
const checkLogin = require('./validate/checkLogin');

var cookieParser = require('cookie-parser')

const port = 3000;

const app = express();

app.use(cookieParser())

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const db = require('./db');
app.use(express.static('public'));


app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',checkLogin.requireAuth, (req, res)=>{
    res.render('index', {name: 'NTA'})
});


app.get('/search',(req, res)=> {
    var q = req.query.q;
    var resul = db.get('users').value().filter( user => user.name.toLowerCase().indexOf(q.toLowerCase())!=-1);
    res.render('users/', {users:resul, value: q})
});
app.use('/users',checkLogin.requireAuth, userRouter);
app.use('/books',checkLogin.requireAuth, bookRouter);
app.use('/transactions',checkLogin.requireAuth, transactionRouter);
app.use('/auth', loginRouter)

app.listen(port, () => console.log('Example app listening at http://localhost:' + port));
