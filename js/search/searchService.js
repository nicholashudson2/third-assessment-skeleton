angular.module('twitterApp').service('searchService', ['http', 'tweetService', function($http, tweetService){
    
    this.tweetService = tweetService

    this.searchResult = this.resolvedSearch.data

    this.search = (searchString) => {
        let resultData
        if (searchString.charAt(0).equals('#')){
            searchString = searchString.slice(1)
            resultData = $http.get('http://localhost:8090/api/tags/' + searchString)
        }
        if (searchString.charAt(0).equals('@')){
            searchString = searchString.slice(1)
            resultData = $http.get('http://localhost:8090/api/users/@' + searchString + '/mentions')
        }
        return resultData
    }
}])