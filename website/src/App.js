/*const express = require('express'); 
const morgan = require('morgan'); 
const session = require('express-session');
const cors = require('cors');
const memorystore = require('memorystore')(session);
const accountControl = require('./Controllers/accountControl');

const app = express(); 
app.use(morgan('dev')); 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use(session({
    secret: 'Pineapple - Guava - Orange',
    cookie: {maxAge: 86400000 }, 
    store: new memorystore({ checkPeriod:86400000 }),
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('view/build'));// Static server use the folder 'public_html'
app.use(express.static('public_html'));// Static server use the folder 'public_html'

// User Actions
app.get('/account', accountControl.getAll );
app.get('/account/:id',accountControl.get );
app.post('/user',accountControl.postCreateOrUpdate); 
app.get('/deleteAccount/:id',accountControl.deleteOne); 
app.post('/updateAccount',accountControl.postCreateOrUpdate);
app.post('/dologin',accountControl.login); 
app.get('/loggedAccount',accountControl.loggedUser);
app.get('/logout',accountControl.logout);

exports.app = app;
*/