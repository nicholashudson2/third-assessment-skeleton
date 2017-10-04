angular.module('twitterApp').controller('tweetController', ['tweetService', function (tweetService) {
//Artem
  
    this.tweetService = tweetService;

    this.like = (id) => {
        tweetService.like(id);
    }

    //tweetService.NumberOfLikes(this.tweet.id)   // Get number of likes on this tweet load, digest loop freeze on function call from template


}])