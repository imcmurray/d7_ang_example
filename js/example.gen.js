/*! d7_ang_example - v0.0.1 - Tue Aug 05 2014 12:18:57 */
var example = angular.module('example', []);

// hoot to detect example-app element so we can bootstrap / init our app (put in by hook_menu)
jQuery(document).ready(function () {
        angular.bootstrap(document.getElementById('example-app'), ['example']);
});


example.controller('exampleController', function($scope) {

	$scope.message = 'Example AngularJS App is running';
});

