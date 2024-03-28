const mongoose = require('mongoose');
const session = require('express-session');
const crypto = require('crypto');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login'); 
var logoutRouter = require('./routes/logout'); 
const adminLoginRouter = require('./routes/adminLogin'); 
const adminLogoutRouter = require('./routes/adminLogout'); 
const registerAdminRouter = require('./routes/registerAdmin');
const registerRouter = require('./routes/register');
const productsRouter = require('./routes/products');
const addProductRouter = require('./routes/addProduct');






mongoose.connect('mongodb://localhost:27017/balkan-sports', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter); 
app.use('/logout', logoutRouter); 
app.use('/adminLogin', adminLoginRouter); 
app.use('/adminLogout', adminLogoutRouter); 
app.use('/register-admin', registerAdminRouter);
app.use('/register', registerRouter);
app.use('/products', productsRouter);
app.use('/add-product', addProductRouter);

const secretKey = crypto.randomBytes(64).toString('hex');
// Session middleware setup
app.use(session({
  secret:secretKey, 
  resave: false,
  saveUninitialized: true
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

