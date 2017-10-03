angular.module('twitterApp').controller('headerController', ['headerService', function(headerService){
    this.headerService = headerService;

    this.logout = () => {
        sessionStorage.clear();
        return 'signin'
    }
}])