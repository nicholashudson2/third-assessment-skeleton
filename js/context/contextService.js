angular.module('twitterApp').service('contextService', ['$http', function ($http) {


    this.getContext = (id) => {
        console.log(id)
        let getString = 'http://localhost:8090/tweets/{id}/context?id=' + id
        console.log(getString)
        let result = $http.get(getString)
        console.log(result)
        return result
    }

    




}])