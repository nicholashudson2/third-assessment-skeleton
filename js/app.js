var myApp = angular.module('twitterApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, $transition$) {

    $urlRouterProvider.otherwise('/signIn');

    //Artem
    var signInState = {
        name: 'signIn',
        url: '/signIn',
        component: 'signInComponent',
        onEnter: ['signInService', function(signInService){
            signInService.clearSessionStorage();
            signInService.myStyle = {display: 'none'}
        }]
    }

//Artem
    var mainPageState = {
        name: 'main',
        url: '/main',
        component: 'mainPageComponent',
        resolve: {
            resolvedFollowers: ['usernameListService', function (usernameListService) {
                return usernameListService.getFollowers('');
            }],
            resolvedFollowing: ['usernameListService', function (usernameListService) {
                return usernameListService.getFollowing('');
            }]
        }
    }

//Artem
    var authenticationState = {
        name: 'authentication',
        url: '/authentication',
        redirectTo: (transition) => {
            let svc = transition.injector().get('signInService');
            return svc.authenticateUser()
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
                return 'main.allTweets';
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
        url: '/feed/@{username}',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', '$transition$', function (tweetListService, $transition$) {
                console.log($transition$.params().username)
                return tweetListService.getFeed($transition$.params().username);
            }]
        }
    }
    
    // Modified by Chris
    var contextState = {
        name: 'main.context',
        url: '/context/{tweetId}',
        component: 'contextComponent',
        resolve: {
            resolvedContext: ['contextService', '$transition$', function (contextService, $transition$) {
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
                    let label = $stateParams.label
                    if (!label) {
                        label = $transition$.params().label
                    }
                    return hashtagSearchService.search(label)
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
    var userTweetsState = {
        name: 'main.tweets',
        url: '/tweets/@{username}',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', '$transition$', function(tweetListService, $transition$){
                return tweetListService.getMyTweets($transition$.params().username);
            }]
        }
    }

    //Artem
    var mentionsState = {
        name: 'main.mentions',
        url: '/mentions/@{username}',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', '$transition$', function (tweetListService, $transition$) {
                return tweetListService.getMyMentions($transition$.params().username);
            }]
        }
    }

    //Artem
    var repliesState = {
        name: 'main.replies',
        url: '/replies/{tweetId}',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', '$transition$', function (tweetListService, $transition$) {
                return tweetListService.getReplies($transition$.params().tweetId);
            }] 
        }
    }

    //Artem
    var repostsState = {
        name: 'main.reposts',
        url: '/reposts/{tweetId}',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', '$transition$', function (tweetListService, $transition$) {
                return tweetListService.getReposts($transition$.params().tweetId);
            }] 
        }
    }

    var followersState = {
        name: 'main.followers',
        url: '/followers/@{username}',
        component: 'usernameListComponent',
        resolve: {
            resolvedUsersList: ['usernameListService', function(usernameListService){
                return usernameListService.getFollowers($transition$.params().username);
            }]
        }
    }

    var followingState = {
        name: 'main.following',
        url: '/following/@{username}',
        component: 'usernameListComponent',
        resolve: {
            resolvedUsersList: ['usernameListService', function(usernameListService){
                return usernameListService.getFollowing($transition$.params().username);
            }]
        }
    }

//Artem
    var bookmarksState = {
        name: 'main.bookmarks',
        url: '/bookmarks/@{username}',
        component: 'tweetListComponent',
        resolve: {
            resolvedTweetsList: ['tweetListService', '$transition$', function (tweetListService, $transition$) {
                return tweetListService.getBookmarks($transition$.params().username);
            }] 
        }
    }


    $stateProvider.state(followersState);
    $stateProvider.state(followingState);
    $stateProvider.state(bookmarksState);
    $stateProvider.state(repostsState);
    $stateProvider.state(repliesState);
    $stateProvider.state(mentionsState);
    $stateProvider.state(allUsersState);
    $stateProvider.state(allTagsState);
    $stateProvider.state(mainPageState);
    $stateProvider.state(userTweetsState);
    $stateProvider.state(allTweetsState);



    // Added by Chris. Needs to be converted to a nested state
    var publicProfileState = {
        name: 'main.publicProfile',
        url: '/publicProfile/{username}',
        component: 'publicProfileComponent',
        resolve: {
            resolvedIsBeingFollowed: ['isFollowingService', '$transition$', function(isFollowingService, $transition$){
                let followingResult = isFollowingService.currentUserIsFollowing($transition$.params().username)
                return followingResult
            }],
            resolvedUser: ['usernameSearchService', 'searchService', '$transition$', function (usernameSearchService, searchService, $transition$) {
                let result = usernameSearchService.search($transition$.params().username)
                return result
            }]
        }
    }

    // Added by Nick. Needs tested.
    var profileState = {
        name: 'main.profile',
        url: '/profile',
        // url: '/publicProfile',
        component: 'profileComponent',
        resolve: {
            resolvedUser: ['usernameSearchService', function (usernameSearchService) {
                console.log("about to call user name search ")
                return usernameSearchService.search(sessionStorage.getItem('userLogin'))
                // .then((resolved) => {
                //     console.log(resolved.data)
                //     return resolved
                // })
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

    // Added by Nick. Needs testing.
    $stateProvider.state(profileState);
    

}]);
