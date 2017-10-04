angular.module('twitterApp').service('hashtagSearchService', ['$http', function($http){

    this.search = (searchString) => {
        
        if (searchString.charAt(0) == '#'){
            searchString = searchString.slice(1)
        }

        console.log(searchString)
        let result = $http.get('http://localhost:8090/tags/' + searchString)
        console.log(result)
        return result
    }
    
}])