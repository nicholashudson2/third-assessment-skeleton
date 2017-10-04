angular.module('twitterApp').service('usernameSearchService', function(){

    this.search = (searchString) => {
        if (searchString.charAt(0).equals('@')){
            searchString = searchString.slice(1)
        }
        return $http.get('http://localhost:8090/users/@' + searchString)
    }
    
})