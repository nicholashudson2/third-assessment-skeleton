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
                return 'feed';
            });
        }
    }

    var feedState = {
        name: 'feed',
        url: '/feed',//'users/@{username}/feed',
        component: 'feedComponent',
        resolve: {
            resolvedTweetFeed: ['feedService', function (feedService) {

                return feedService.getFeed(/*$transition$.params().username*/)/*.then((res)=> {
                         return res;
                   });*/
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

    // Added by Chris. Needs testing. Needs to be converted to a nested state
    var searchState = {
        name: 'search',
        url: '/search',
        component: 'searchComponent',
        redirectTo: (transition) => {
            let svc = transition.injector().get('searchService');
            
            return svc.getSearchType()
        }
    }
    
    // Added by Chris. Needs testing. Needs to be converted to a nested state
    var hashtagSearchState = {
        name: 'hashtagSearch',
        url: '/hashtagSearch',
        component: 'tweetListComponent',
        resolve:{
            resolvedTweetsList: ['hashtagSearchService', 'searchService', function(hashtagSearchService, searchService){
                return hashtagSearchService.search(searchService.searchString)
            }]
        }
    }
    
    // Added by Chris. Needs testing. Needs to be converted to a nested state
    var usernameSearchState = {
        name: 'usernameSearch',
        url: '/usernameSearch',
        component: 'tweetListComponent',
        resolve:{
            resolvedTweetsList: ['usernameSearchService', 'searchService', function(usernameSearchService, searchService){
                return usernameSearchService.search(searchService.searchString)
            }]
        }
    }
    
    $stateProvider.state(createNewUserState);
    $stateProvider.state(signInState);
    $stateProvider.state(registerState);
    $stateProvider.state(authenticationState);
    $stateProvider.state(feedState);
    $stateProvider.state(contextState);
    
    // Added by Chris. Needs testing. Needs to be converted to a nested state
    $stateProvider.state(searchState);
    $stateProvider.state(hashtagSearchState);
    $stateProvider.state(usernameSearchState);
}]);
