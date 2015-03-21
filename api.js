"use strict";

module.exports = function api(options) {
	var seneca = this;

	seneca.use('./api/hello', {prefix: '/api'});

	seneca.add('role:store, info:hello', function (args, callback) {
		callback(null, {msg: 'hello!!!!!!!'});
	});


};