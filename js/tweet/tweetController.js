angular.module('twitterApp').controller('tweetController', ['tweetService', '$http', '$state', function (tweetService, $http, $state) {
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

    this.createReply = (id) => {
        let tweetData = {
            "content": this.replyText,
            "credentials": {
                "password": sessionStorage.getItem('password'),
                "userLogin": sessionStorage.getItem('userLogin')
            }
        }
        $http.post('http://localhost:8090/tweets/' + id + '/reply', tweetData).then((result) => {
            $state.reload();
        })
    }



}])