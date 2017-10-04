angular.module('twitterApp').service('searchService', ['http', 'tweetService', function($http, tweetService){
    
    this.tweetService = tweetService

    this.searchResult = this.resolvedSearch.data

    this.getSearchType = () => {
        return this.searchString.charAt(0).equals('#') ? 'hashtagSearch' : 'usernameSearch'
    }

}])