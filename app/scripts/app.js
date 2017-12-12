'use strict';
var app = angular.module('morganeApp', ['ngRoute','ngResource']);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl : 'templates/homepage.html',
              controller  : 'HomeController',
            })

            .when('/about', {
              templateUrl : 'templates/about.html'
            })
                  // route for the contactus page
            .when('/contact', {
              templateUrl : 'templates/contact.html',
              controller  : 'ContactController',
            })

            // route for the menu page
            .when('/skills', {
              templateUrl : 'templates/skills.html',
              controller  : 'SkillsController',
            })

            // route for the dishdetail page
            .when('/websites', {
              templateUrl : 'templates/websites.html',
              controller  : 'WebsitesController'
            })
            .otherwise({
              redirectTo: '/'
          });
}]);