angular.module('twitterApp').controller('headerController', ['searchService', function( searchService){

    this.searchService = searchService

    this.logout = () => {
        sessionStorage.clear();
        return 'signin'
    }

    this.getUsername = () => {
        return sessionStorage.getItem('userLogin')
    }

}])