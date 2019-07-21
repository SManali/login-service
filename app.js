const express = require('express');
const config = require('./config/config');
const login = require('./routes/login');
const signUp = require('./routes/sign-up');

const app = express();

var mongoose = require('mongoose');
mongoose.connect(`mongodb://${config.db_server}/${config.db_name}`);

app.use('/login', login);
app.use('/signUp', signUp);
app.use('*', routes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
module.exports = app;