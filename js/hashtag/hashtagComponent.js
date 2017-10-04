angular.module('twitterApp').component('hashTagComponent', {
    templateUrl: 'js/hashtag/hashtagTemplate.html',
    controller: 'hashTagController',
    bindings: {
        tag: '='
    }
})