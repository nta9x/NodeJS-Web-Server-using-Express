//module npm
const express = require('express');
const shopRouter = require('./routes/shop.route');
const userRouter = require('./routes/user.route');
const productRouter = require('./routes/product.route');
const loginRouter = require('./routes/login.route');
const logoutRouter = require('./routes/logout.route');
const checkLogin = require('./validate/checkLogin');

var cookieParser = require('cookie-parser')

const port = 3000;

const app = express();

app.use(cookieParser('asdhasldhakshuihduasfd'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));


app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',checkLogin.requireAuth, (req, res)=>{
    res.render('index')
});

app.use('/shop', checkLogin.requireAuth,shopRouter);
app.use('/users',checkLogin.requireAuth, userRouter);
app.use('/products',checkLogin.requireAuth, productRouter);
app.use('/auth', loginRouter);
app.use('/auth', logoutRouter);



app.listen(port, () => console.log('Example app listening at http://localhost:' + port));
