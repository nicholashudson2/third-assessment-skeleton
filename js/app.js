var myApp = angular.module('twitterApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, $transition$) {

    $urlRouterProvider.otherwise('/signIn');

    var signInState = {
        name: 'signIn',
        url: '/signIn',
        component: 'signInComponent'
    }

    var mainPageState = {
        name: 'main',
        url: '/main',
        component: 'mainPageComponent',
        resolve: {
            resolvedFollowers: ['usernameListService', function(usernameListService){
                return usernameListService.getFollowers();
            }],

            resolvedFollowing: ['usernameListService', function(usernameListService){
                return usernameListService.getFollowing();
            }]
        }
        

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
        name: 'main.feed',
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
        // url: 'context/',
        url: '/context/{id}',
        component: 'contextComponent',
        resolve: {
            resolvedContext: ['contextService', '$transition$', function (contextService, $transition$) {
                // return contextService.getContext($transition$.params().id)
                let result = contextService.getContext($transition$.params().id)
                return result
            }]
        }
    }

    // Added by Chris. Needs to be converted to a nested state
    var searchState = {
        name: 'search',
        url: '/search',
        redirectTo: (transition) => {
            let svc = transition.injector().get('searchService');

            // return svc.getSearchType()
            let temp = svc.getSearchType()
            // console.log(temp)
            return temp
        }
    }

    // Added by Chris. Needs to be converted to a nested state
    var hashtagSearchState = {
        name: 'main.hashtagSearch',
        url: '/hashtagSearch',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['hashtagSearchService', 'searchService', function (hashtagSearchService, searchService) {
                return hashtagSearchService.search(searchService.searchString)
            }]
        }
    }

    //Artem
    var allTweetsState = {
        name: 'main.allTweets',
        url: '/allTweets',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', function (tweetListService) {
                return tweetListService.getAllTweets();
            }]
        }
    }

    //Artem
    var myTweetsState = {
        name: 'main.myTweets',
        url: '/myTweets',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', function (tweetListService) {
                return tweetListService.getMyTweets();
            }]
        }
    }
    //Artem
    var postNewTweetState = {

        name: 'postNewTweet',
        url: '/postNewTweet',
        redirectTo:  (transition) => {
                let svc = transition.injector().get('newTweetService');
                return svc.postNewTweet().then((result) => {
                    return 'main.allTweets';
                });

        }
    }


    $stateProvider.state(mainPageState);
    $stateProvider.state(postNewTweetState);
    $stateProvider.state(myTweetsState);
    $stateProvider.state(allTweetsState);

    // Added by Chris. Needs testing. Needs to be converted to a nested state
    var usernameSearchState = {
        name: 'usernameSearch',
        url: '/usernameSearch',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['usernameSearchService', 'searchService', function (usernameSearchService, searchService) {
                return usernameSearchService.search(searchService.searchString)
            }]
        }
    }

    // Added by Chris. Needs testing. Needs to be converted to a nested state
    var publicProfileState = {
        name: 'publicProfile',
        url: '/publicProfile/{username}',
        // url: '/publicProfile',
        component: 'publicProfileComponent',
        resolve: {
            resolvedUser: ['usernameSearchService', 'searchService', '$transition$', function (usernameSearchService, searchService, $transition$) {
                let result = usernameSearchService.search($transition$.params().username)
                return result
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
    $stateProvider.state(publicProfileState);
    
}]);
