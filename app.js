var seneca = require('seneca')()
		.use('./api');

var app = require('express')()
		.use( require('body-parser').json() )
		.use( seneca.export('web') )
		.listen(3001);