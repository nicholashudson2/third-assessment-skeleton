angular.module('twitterApp').service('headerService', function(){
    
    this.logout = () => {
        sessionStorage.clear();
        return 'signin'
    }
})