var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var producaoRouter = require('./routes/producao');
var cursosRouter = require('./routes/cursos');
var cursosPlanosPedagogicosRouter = require('./routes/cursosPlanosPedagogicos');
var conhecimentoAreasRouter = require('./routes/conhecimentoAreas');
var disciplinasRouter = require('./routes/disciplinas');
var disciplinasVersoesRouter = require('./routes/disciplinasVersoes');
var ppcsVersoesRouter = require('./routes/cursosPlanosPedagogicosDisciplinasVersoes');
var egressosPerfisRouter = require('./routes/egressosPerfis');
var competHabilidadesRouter = require('./routes/competHabilidades');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/producao', producaoRouter);
app.use('/cursos', cursosRouter);
app.use('/PPCs', cursosPlanosPedagogicosRouter);
app.use('/conhecimentoAreas', conhecimentoAreasRouter);
app.use('/disciplinas', disciplinasRouter);
app.use('/disciplinasVersoes', disciplinasVersoesRouter);
app.use('/ppcsVersoes', ppcsVersoesRouter);
app.use('/egressosPerfis', egressosPerfisRouter);
app.use('/competHabilidades', competHabilidadesRouter);

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
