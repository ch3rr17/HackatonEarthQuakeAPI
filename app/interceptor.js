(function() {
	'use strict';
	angular.module('app').factory('EarthQuakeHttpInterceptor', function() {
	return {
			request: function(request) {
				request.headers["X-Mashape-Key"] = "LcfuyHy8nDmshKD9gCpfCJFWD27Sp1Nd7nojsnUhhPbf2GqEy1";
				return request;
			}
		}
	});
})();