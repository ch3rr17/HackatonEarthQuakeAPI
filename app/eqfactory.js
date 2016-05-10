(function() {
    'use strict';

    angular
        .module('app')
        .factory('EarthQuakeFactory', EarthQuakeFactory);  // https://docs.angularjs.org/guide/services

    EarthQuakeFactory.$inject = ['$http', '$q', '$log'];  // https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection
    console.log("Earth Quake Factory Start!");
    /* @ngInject */

    function EarthQuakeFactory($http, $q, $log) {

        var service = {
            getEarthQuakeInfo: getEarthQuakeInfo
        };
        return service;
        
        //function to call on the API url        
        function getEarthQuakeInfo() {
        var url = "https://montanaflynn-earthquake-seismology.p.mashape.com/eqs?limit=48&min_magnitude=2.5";
        var defer = $q.defer();
        console.log(url);

        $http.get(url).then(function(response) {
                  if(typeof response.data === 'object') {
                    defer.resolve(response);
                    toastr.success('We have a earthquake info!');
                    
                  } 
                  else {
                    defer.reject(response);
                    toastr.warning('No earthquake info found<br/>' + response.config.url);
                   
                  }
              }, 
              // failure
              function(error) {
                  defer.reject(error);
                  $log.error(error);
                  toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
              });
              return defer.promise;
        }
    }
})();