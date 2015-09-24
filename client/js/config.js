var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '../partials/main.html',
		controller: 'userController'
	})
	.when('/dashboard', {
		templateUrl: '../partials/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/topic/:id', {
		templateUrl: '../partials/topic.html',
		controller: 'topicController'
	})
	.when('/user/:id', {
		templateUrl: '../partials/user.html',
		controller: 'userController'
	})
	.otherwise({
		redirectTo: '/'
	})
})