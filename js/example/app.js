var example = angular.module('example', []);

// hoot to detect example-app element so we can bootstrap / init our app (put in by hook_menu)
jQuery(document).ready(function () {
        angular.bootstrap(document.getElementById('example-app'), ['example']);
});

