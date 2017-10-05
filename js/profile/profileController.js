angular.module('twitterApp').controller('profileController', ['deleteUserService', 'profileService', function(deleteUserService, profileService){

    this.deleteUserService = deleteUserService
    this.user = this.resolvedUser.data
    this.profileService = profileService;

}])