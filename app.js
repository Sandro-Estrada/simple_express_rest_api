const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const port = 5000;

const digimonRouter = require('./routes/digimon');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/digimon', digimonRouter);

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

app.listen(port, () => {
  console.log(`---SERVIDOR CORRIENDO EN EL PUERTO ${port}`)
})

module.exports = app;
