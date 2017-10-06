angular.module('twitterApp').service('usernameSearchService', ['$http', '$state', function($http, $state){

    this.search = (searchString) => {
        if (searchString.charAt(0) === '@'){
            searchString = searchString.slice(1)
        }
        if(searchString===sessionStorage.getItem('userLogin')){
            $state.go('main.profile');
        }
        let result = $http.get('http://localhost:8090/users/@' + searchString)
        return result
    }
    
}])