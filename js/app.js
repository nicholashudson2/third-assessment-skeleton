var myApp = angular.module('twitterApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouter) {
}]);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/signIn');

    var signInState = {
        name: 'signIn',
        url: '/signIn',
        templateUrl: '../signIn/signInTemplate.html'
    }

    var registerState = {
        name: 'register',
        url: '/register',
        templateUrl: '../register/registerTemplate.html'
    }

    var feedState = {
        name: 'feed',
        url: '/feed',
        templateUrl: '../feed/feedTemplate.html'
    }

    $stateProvider.state(signInState);
    $stateProvider.state(registerState);
    $stateProvider.state(feedState);
});