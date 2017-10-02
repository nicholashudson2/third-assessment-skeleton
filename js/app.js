
    


var myApp = angular.module('twitterApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouter) {
}]);

myApp.config(function ($stateProvider, $urlRouterProvider, $transition$) {
    
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
        url: 'users/@{username}/feed',
        component: 'feedComponent',
        resolve: {
            resolvedTweetFeed: ['feedService', function(feedService){
                return feedService.getFeed($transition$.params().username);
            }]
        }
    }

    var contextState = {
        name: 'context',
        url: 'tweets/{id}/context',
        component: 'contextComponent',
        resolve: {
            resolvedContext: ['contextService', function(contextService){
                return contextService.getContext($transition$.params().id)
            }]
        }
    }

    $stateProvider.state(signInState);
    $stateProvider.state(registerState);
    $stateProvider.state(feedState);
    $stateProvider.state(contextState);
});