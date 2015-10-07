/**
 * Module Dependencies
 */

var Postmates = require('postmates');

/**
 * Init Postmates
 */

function * init (id, apiKey){
	var payload = this.request.body;
	console.log('hit this');
	// TODO: error handling for invalid ids or keys
	return this.postmates = new Postmates(payload.id, payload.apiKey);
}

/**
 * Expose Postmates
 */

module.exports = { init: init };
