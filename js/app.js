var myApp = angular.module('twitterApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, $transition$) {

    $urlRouterProvider.otherwise('/signIn');

    //Artem
    var signInState = {
        name: 'signIn',
        url: '/signIn',
        component: 'signInComponent',
        onEnter: ['signInService', function(signInService){
            signInService.clearSessionStorage();
        }]
    }

//Artem
    var mainPageState = {
        name: 'main',
        url: '/main',
        component: 'mainPageComponent',
        resolve: {
            resolvedFollowers: ['usernameListService', function (usernameListService) {
                return usernameListService.getFollowers();
            }],

            resolvedFollowing: ['usernameListService', function (usernameListService) {
                return usernameListService.getFollowing();
            }]
        }

    }
//Artem

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
//Artem
    var registerState = {
        name: 'register',
        url: '/register',
        component: 'registerComponent'
    }
//Artem
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

    //Artem
    var allTagsState = {
        name: 'main.hashtags',
        url: '/hashtags',
        component: 'hashtagListComponent',
        resolve: {
            resolvedTags: ['hashtagListService', function(hashtagListService){
                return hashtagListService.getTags();
            }]
        }
    }
//Artem
    var allUsersState = {
        name: 'main.allUsers',
        url: '/allUsers',
        component: 'usernameListComponent',
        resolve: {
            resolvedUsersList: ['usernameListService', function(usernameListService){
                return usernameListService.getAllUsers();
            }]
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
    
    // Modified by Chris
    var contextState = {
        name: 'main.context',
        // url: 'context/',
        url: '/context/{tweetId}',
        component: 'contextComponent',
        resolve: {
            resolvedContext: ['contextService', '$transition$', function (contextService, $transition$) {
                // return contextService.getContext($transition$.params().id)
                let result = contextService.getContext($transition$.params().tweetId)

                return result
            }]
        }
    }
    
    // Added by Chris. Needs to be converted to a nested state
    var hashtagSearchState = {
        name: 'main.hashtagSearch',
        url: '/hashtagSearch/{label}',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['hashtagSearchService', 'searchService', '$transition$', '$state', '$stateParams',
                function (hashtagSearchService, searchService, $transition$, $state, $stateParams) {
                    console.log("made it to hashtag search resolve")
                    console.log("transtions = " + $transition$.params().label)
                    console.log("stateparams = " + $stateParams.label)
                    let label = $stateParams.label
                    if (!label) {
                        label = $transition$.params().label
                    }
                    return hashtagSearchService.search(label)
                    // return hashtagSearchService.search(searchService.searchString)
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
                return tweetListService.getAllTweets()
            }]
        }
    }

    //Artem
    var myTweetsState = {
        name: 'main.myTweets',
        url: '/myTweets',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', function(tweetListService){
                return tweetListService.getMyTweets();
            }]
        }
    }


    //Artem
    var postNewTweetState = {

        name: 'postNewTweet',
        url: '/postNewTweet',
        redirectTo: (transition) => {
            let svc = transition.injector().get('newTweetService');
            return svc.postNewTweet().then((result) => {
                return 'main.allTweets';
            });

        }
    }

    //Artem
    var myMentionsState = {
        name: 'main.myMentions',
        url: '/myMentions',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', function (tweetListService) {
                return tweetListService.getMyMentions();
            }]
        }
    }


    $stateProvider.state(myMentionsState);
    $stateProvider.state(allUsersState);
    $stateProvider.state(allTagsState);
    $stateProvider.state(mainPageState);
    $stateProvider.state(postNewTweetState);
    $stateProvider.state(myTweetsState);
    $stateProvider.state(allTweetsState);



    // Added by Chris. Needs to be converted to a nested state
    var publicProfileState = {
        name: 'main.publicProfile',
        url: '/publicProfile/{username}',
        // url: '/publicProfile',
        component: 'publicProfileComponent',
        resolve: {
            resolvedUser: ['usernameSearchService', 'searchService', '$transition$', function (usernameSearchService, searchService, $transition$) {
                console.log("about to call user name search ")
                let result = usernameSearchService.search($transition$.params().username)
                console.log('found user 2= ' + result)
                return result
            }]
        }
    }

    // Added by Chris. Needs to be converted to a nested state
    var mentionsState = {
        name: 'mentions',
        url: '/mentions',
        component: 'mentionsComponent',
        resolve: {
            resolvedTweetsList: [function (mentionsService) {
                let result = mentionsService.getMentions()
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
    $stateProvider.state(hashtagSearchState);
    $stateProvider.state(publicProfileState);
    $stateProvider.state(mentionsState);


}]);
