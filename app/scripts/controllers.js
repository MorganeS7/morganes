'use strict';

angular.module('morganeApp')
		
    .controller('HomeController', ['$scope', 'skillsFactory', 'websitesFactory', function($scope, skillsFactory, websitesFactory) {

      var websites = websitesFactory.query({
            featured: "true"
      })
        .$promise.then(
            function (response) {
                var websites = response;
                $scope.website = websites[0];
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );

      var skills = skillsFactory.query({
            featured: "true"
      })
        .$promise.then(
            function (response) {
                var skills = response;
                $scope.skill = skills[0];
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );

    }])

    .controller('SkillsController', ['$scope', 'skillsFactory', function($scope, skillsFactory) {
      $scope.skills = skillsFactory.query();
    }])

    .controller('WebsitesController', ['$scope', 'websitesFactory', function($scope, websitesFactory) {
      $scope.websites = websitesFactory.query();
    }])

    .controller('ContactController', ['$scope', 'feedbackFactory', function ($scope, feedbackFactory) {

        $scope.feedback = {
            firstName: "",
            lastName: "",
            email: "",
            tel: ""
        };

        $scope.sendFeedback = function () {
            feedbackFactory.save($scope.feedback);
            $scope.feedback = {
                firstName: "",
                lastName: "",
                email: ""
            };
            $scope.feedbackForm.$setPristine();
        };
    }])
  
    .controller('NavController', ['$scope', '$location', function($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }]);