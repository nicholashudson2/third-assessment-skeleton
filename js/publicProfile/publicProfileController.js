angular.module('twitterApp').controller('publicProfileController', function(){

    this.user = this.resolvedUser.data
    this.isBeingFollowed = this.resolvedIsBeingFollowed.data
    console.log("loading public profile")
    console.log("isBeingFollowed value = " + this.isBeingFollowed)
})