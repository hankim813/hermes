/**
 * Error Handling
 */

function * error (code, msg){
	this.status = code;
	return this.body = { error: msg };
}

// TODO: Catch error right at the end
module.exports = { error: error };
