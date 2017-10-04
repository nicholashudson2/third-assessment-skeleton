angular.module('twitterApp').component('followingListComponent', {
    templateUrl: 'js/followingList/followingListTemplate.html',
    controller: 'followingListController',
    bindings: {
        followings: '='
    }
})