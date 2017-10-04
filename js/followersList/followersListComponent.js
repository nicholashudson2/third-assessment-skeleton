angular.module('twitterApp').component('followersListComponent', {
    templateUrl: 'js/followersList/followersListTemplate.html',
    controller: 'followersListController',
    bindings: {
      followers: '='
    }
})