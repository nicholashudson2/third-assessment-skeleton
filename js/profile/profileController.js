angular.module('twitterApp').controller('profileController', ['deleteUserService', function(deleteUserService){

    this.deleteUserService = deleteUserService
    this.user = this.resolvedUser.data

}])