angular.module('twitterApp').controller('publicProfileController', ['profileService', function(profileService){

    this.user = this.resolvedUser.data
    this.isBeingFollowed = this.resolvedIsBeingFollowed.data
    this.profileService = profileService
}])
