"use strict";

module.exports = function hello (options) {
	var seneca = this;

	seneca.add('role:api,info:hello', hello);

	seneca.add('init:api',function(args,done){
		seneca.act('role:web',{use:{
		  prefix: options.prefix ? options.prefix + '/' : '/',
		  pin:'role:api,info:*',
		  map:{
		    hello:true
		  }
		}});

		done();
	});

	function hello (args, done) {
		seneca.act('role:store, info:hello', function (err, result) {
			done(err, result)
		});
	}
}