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
        redirectTo: (transition) => {
            let svc = transition.injector().get('signInService');
            return svc.authenticateUser().then((result) => {
                return result;
            });
        }
    }

    var registerState = {
        name: 'register',
        url: '/register',
        component: 'registerComponent'
    }

    var createNewUserState = {
        name: 'userCreation',
        url: '/userCreation',
        redirectTo: (transition) => {
            let svc = transition.injector().get('registerService');

            return svc.registerNewUser().then((result) => {
                return 'allTweets';
            });
        }
    }

    //Created and Modified By Artem
    var feedState = {
        name: 'feed',
        url: '/feed',//'users/@{username}/feed',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', function (tweetListService) {
                
                return tweetListService.getFeed(/*$transition$.params().username*/);
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
            resolvedSearch: ['searchService', function (searchService) {
                return searchService.search($transition$.params().searchString)
            }]
        }
    }

    //Artem
    var allTweetsState = {
        name: 'allTweets',
        url: '/allTweets',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', function(tweetListService){
                return tweetListService.getAllTweets();
            }]
        }
    }

    //Artem
    var myTweetsState = {
        name: 'myTweets',
        url: '/myTweets',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', function(tweetListService){
                return tweetListService.getMyTweets();
            }]
        }
    }

    $stateProvider.state(myTweetsState);
    $stateProvider.state(allTweetsState);
    $stateProvider.state(createNewUserState);
    $stateProvider.state(signInState);
    $stateProvider.state(registerState);
    $stateProvider.state(authenticationState);
    $stateProvider.state(feedState);
    $stateProvider.state(contextState);
    $stateProvider.state(searchState);
}]);
