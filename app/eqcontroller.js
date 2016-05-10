(function() {
    'use strict';

    angular
        .module('app')
        .controller('EarthQuakeCtrl', EarthQuakeCtrl);

    EarthQuakeCtrl.$inject = ['$log', 'EarthQuakeFactory'];
    console.log("EarthQuake Controller Start!");
    /* @ngInject */

    function EarthQuakeCtrl($log, EarthQuakeFactory) {
        var vm = this;  
        vm.title = 'EarthQuake Controller';
        vm.QuakeInfo = {};
        //create local scope varaibles

        //function to grab api
        vm.getEarthQuakeInfo = function() {
           EarthQuakeFactory.getEarthQuakeInfo().then(
                function(response){
                    vm.QuakeInfo = response.data;
                },
                function(error){
                    $log.error('Controller Error', error);
                });
          }

        vm.mapIt = function($index){
            console.log($index);
        }

        vm.loadLatAndLong = function(lat, long) {
            var point = { 
                latitude: lat, 
                longitude: long 
            };
            return point;
        }

        vm.lat = 45;
        vm.long = -73;
        vm.map = { 
            center: { 
                latitude: vm.lat, 
                longitude: vm.long 
            }, 
                zoom: 8 };     

      }   //end of main controller
})();