angular.module('twitterApp').controller('tweetController', ['tweetService', '$http', function (tweetService, $http) {
//Artem
  
    this.tweetService = tweetService;

    this.like = (id) => {
        tweetService.like(id);
    }

    this.repost = (id) => {
        tweetService.repost(id);
    }

    this.likes=[];

    this.getLikes = (id) => {
        likes[id] = http.get('http://localhost:8090/tweets/'+id+'/likes').then((result) => {
            console.log(result.data.length)
            return result.data.length;
        })
    }

    //tweetService.NumberOfLikes(this.tweet.id)   // Get number of likes on this tweet load, digest loop freeze on function call from template

    // this.NumberOfLikes = (id) => {
    //     return $http.get('http://localhost:8090/tweets/'+id+'/likes').then((result) => {
    //         console.log(result.data.length)
    //         return result.data.length;
    //     })
    // }

}])