var myApp = angular.module('twitterApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, $transition$) {

    $urlRouterProvider.otherwise('/signIn');

    var signInState = {
        name: 'signIn',
        url: '/signIn',
        component: 'signInComponent'
    }

    var authenticationState = {
        name: 'authentication',
        url: '/authentication',
        redirectTo: ['signInService', function (signInService) {
            console.log('hit one')
            signInService.authenticateUser().then((result) => {
                // return result.data ? 'feed' : 'signIn';
                return result ? 'feed' : 'signIn';
            });
        }]
    }

    var registerState = {
        name: 'register',
        url: '/register',
        component: 'registerComponent',
        resolve: {
            resolvedUserCreation: ['registerService', function (registerService) {

            }]
        }
    }

    var feedState = {
        name: 'feed',
        url: 'users/@{username}/feed',
        component: 'feedComponent',
        resolve: {
            resolvedTweetFeed: ['feedService', function (feedService) {
                return feedService.getFeed($transition$.params().username);
            }],
            resolvedFollowers: ['tweetService', function (tweetService) {
                return tweetService.getFollowers($transition$.params().username)
            }],
            resolvedFollowing: ['tweetService', function (tweetService) {
                return tweetService.getFollowing($transition$.params().username)
            }]
        }
    }

    var contextState = {
        name: 'context',
        url: 'tweets/{id}/context',
        component: 'contextComponent',
        resolve: {
            resolvedContext: ['contextService', function (contextService) {
                return contextService.getContext($transition$.params().id)
            }]
        }
    }

    var searchState = {
        name: 'search',
        url: 'tweets/{searchString}/search',
        component: 'searchComponent',
        resolve: {
            resolvedSearch: ['searchService', function(searchService){
                return searchService.search($transition$.params().searchString)
            }]
        }
    }

    $stateProvider.state(signInState);
    $stateProvider.state(registerState);
    $stateProvider.state(authenticationState);
    $stateProvider.state(feedState);
    $stateProvider.state(contextState);
    $stateProvider.state(searchState);

}]);
