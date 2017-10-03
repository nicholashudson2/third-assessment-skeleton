angular.module('twitterApp').service('searchService', ['http', 'tweetService', function($http, tweetService){
    
    this.tweetService = tweetService

    this.searchResult = this.resolvedSearch.data

    this.search = (searchString) => {
        let resultData
        if (searchString.charAt(0).equals('#')){
            searchString = searchString.slice(1)
            resultData = $http.get('localhost:8090/tags/' + searchString)
        }
        if (searchString.charAt(0).equals('@')){
            searchString = searchString.slice(1)
            resultData = $http.get('localhost:8090/users/@' + searchString + '/mentions')
        }
        return resultData
    }
}])