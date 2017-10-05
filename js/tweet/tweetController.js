angular.module('twitterApp').controller('tweetController', ['tweetService', '$http', function (tweetService, $http) {
//Artem
  
    this.tweetService = tweetService;

    this.like = (id) => {
        tweetService.like(id);
    }

    this.repost = (id) => {
        tweetService.repost(id);
    }

    this.deleteTweet = (id) => {
        tweetService.deleteTweet(id);
    }

    this.ownTweet = (tweetAuthor) => {
        return tweetAuthor === sessionStorage.getItem('userLogin')
    }

}])