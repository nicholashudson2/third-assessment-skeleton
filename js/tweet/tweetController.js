angular.module('twitterApp').controller('tweetController', [function(){
    
    this.tweets = this.resolvedTweets.data;
    
        this.createNewRobot = () => {
    
            tweetService.createNewTweet(this.newTweet).then((done) => {
                return tweetService.getAllTweets()
            }).then((finishedProduct) => {
                this.tweets = finishedProduct.data
            })
        }
}])