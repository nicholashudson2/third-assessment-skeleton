angular.module('twitterApp').service('hashtagListService', function(){

    this.getTags = () => {
        return $http.get('http://localhost:8090/tags')
    }
    
})