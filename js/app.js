angular.module('twitterApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouter) {
    
    const defaultState = {
      name: 'welcome',
      url: '/welcome',
      component: 'tweetComponent'
    }

    stateProvider.state(defaultState);


    urlRouter.otherwise('/welcome');

}]);