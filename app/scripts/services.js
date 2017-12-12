'use strict';

angular.module('morganeApp')

        .factory('skillsFactory', ['$resource', '$location', function ($resource,$location) {
            
            var baseURL = $location.protocol() + "://" + location.host;
    
    		return $resource(baseURL + "/skills/:id",null, {
                'update': {
                    method:'PUT'
                }
            });

        }])

		.factory('websitesFactory', ['$resource', '$location', function($resource,$location) {
            
            var baseURL = $location.protocol() + "://" + location.host;

     		return $resource(baseURL + "/websites/:id",null, {
                'update': {
                    method:'PUT'
                }
            });
            
        }])

        .factory('feedbackFactory', ['$resource', '$location', function ($resource, $location) {

            var baseURL = $location.protocol() + "://" + location.host;

            return $resource(baseURL + "feedback/:id", null, {
                    'update': {
                        method: 'PUT'
                    }
                });

        }]);