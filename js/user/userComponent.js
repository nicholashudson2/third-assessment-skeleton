angular.module('twitterApp').component('userComponent', {
    templateUrl: 'js/user/userTemplate.html',
    controller: 'userController',
    bindings: {
        user: '='
    }
})