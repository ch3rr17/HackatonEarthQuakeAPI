(function() {
    'use strict';
    
    // define the top-level app container
    var app = angular.module('app', [])
    	.config(function($httpProvider) {
    		$httpProvider.interceptors.push('EarthQuakeHttpInterceptor')
    	});  
})();