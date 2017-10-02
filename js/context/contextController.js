angular.module('twitterApp').controller('contextController', ['$http', function($http){
    
    this.context = resolvedContext.data

    this.getContext= (id) => {
        return $http.get('tweets/' + id + '/context')
    }

}])