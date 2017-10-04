angular.module('twitterApp').component('hashtagListComponent', {
    templateUrl: 'js/hashtag/hashtagListTemplate.html',
    controller: 'hashtagListController',
    bindings: {
        hashtagList: '='
    }

})