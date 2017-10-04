angular.module('twitterApp').component('hashtagListComponent', {
    templateUrl: 'js/hashtagList/hashtagListTemplate.html',
    controller: 'hashtagListController',
    bindings: {
        resolvedTags: '='
    }

})