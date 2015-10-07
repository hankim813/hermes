/**
 * Module Dependencies
 */

var PORT = process.env.PORT || 3000;
var koa = require('koa');
var router = require('koa-route');
var parser = require('koa-bodyparser');
var logger = require('koa-logger');
var serve = require('koa-static');
var postmates = require('./server/middlewares/postmates');
var error = require('./server/middlewares/error');

/**
 * Expose `app`
 */

exports = app = koa();

/**
 * Setup static directory.
 */

app.use(serve('client'));
app.use(router.get('/'));

/**
 * Mount bodyparser && logger
 */

app.use(parser());
app.use(logger());

/**
 * Middlewares
 */

// Initialize the Postmates instance before each request
app.use(postmates.init);

/**
 * Mount Routes
 */

app.use(router.post('/init', function *(){
	// test
	console.log(this.postmates);
}));

/**
 * Listen on PORT
 */

app.listen(PORT);
console.log('Magic happens on port ' + PORT);

