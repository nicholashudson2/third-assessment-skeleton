angular.module('twitterApp').component('searchComponent', {
    templateUrl: 'js/search/searchTemplate.html',
    controller: 'searchController',
    bindings: {
        resolvedSearch: '='
    }

})