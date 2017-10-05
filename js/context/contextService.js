angular.module('twitterApp').service('contextService', ['$http', function ($http) {


    this.getContext = (id) => {
        let getString = 'http://localhost:8090/tweets/{id}/context?id=' + id
        let result = $http.get(getString)
        return result
    }

    




}])