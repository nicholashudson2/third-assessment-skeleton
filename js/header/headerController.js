angular.module('twitterApp').controller('headerController', ['headerService','searchService', function(headerService, searchService){
    this.headerService = headerService;

    this.searchService = searchService

    this.logout = () => {
        sessionStorage.clear();
        return 'signin'
    }
}])