var myApp = angular.module('twitterApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $transition$) {
    
        $urlRouterProvider.otherwise('/signIn');
    
        var signInState = {
            name: 'signIn',
            url: '/signIn',
            component: 'signInComponent'
        }

        var authenticationState = {
            name: 'authentication',
            url: '/authentication',
            redirectTo: (transition)=>{
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
            redirectTo: (transition)=> {
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
                resolvedTweetFeed: ['feedService', function(feedService){
                    
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
                resolvedContext: ['contextService', function(contextService){
                    return contextService.getContext($transition$.params().id)
                }]
            }
        }
    
        $stateProvider.state(signInState);
        $stateProvider.state(registerState);
        $stateProvider.state(feedState);
        $stateProvider.state(contextState);
        $stateProvider.state(authenticationState);
        $stateProvider.state(createNewUserState);

        
        var whateverState = {
            name: 'temp',
            url: '/wevr',
            template: '<div>Hey<button type="button" ng-click="action()">press</button></div>',
            controller: function($scope){
                $scope.action = () => {
                    alert('hi')
                   console.log('hey');
                }
            }
        }
        $stateProvider.state(whateverState);
}]);
