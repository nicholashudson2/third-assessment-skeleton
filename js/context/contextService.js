angular.module('twitterApp').service('contextService', ['$http', function($http){

    // this.setTargetId = (id) => {
    //     this.targetId = id
    // }

    this.getContext = (id) => {
        console.log(id)
        console.log('http://localhost:8090/tweets/' + id + '/context')
        let result = $http.get('http://localhost:8090/tweets/' + id + '/context')
        console.log(result)
        return result
    }



    
}])