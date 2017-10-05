angular.module('twitterApp').controller('tweetController', ['tweetService', '$http', '$state', 'usernameSearchService', 
    function (tweetService, $http, $state, usernameSearchService) {
//Artem
  
    this.tweetService = tweetService;
    
    tweetService.getLikes(this.tweet.id).then( (result) => {
        // console.dir(result)
        this.likes = result.data
    })

    // modified by Chris
    this.like = (id) => {
        tweetService.like(id);
        if (!currentUserFoundInLikes()){
            $http.get('http://localhost:8090/users/@' + sessionStorage.getItem('userLogin')).then( (result) => {
                this.likes.push(result.data)
            })
        }
    }
    
    // added by Chris
    const currentUserFoundInLikes = () => {
        for (like of this.likes){
            if (like.credentials.userLogin == sessionStorage.getItem('userLogin')){
                console.log(true)
                return true;
            }
        }
        console.log(false)
        return false;
    }

    // this.currentUserFoundInLikes = () => {
    //     // console.log(this.likes)
    //     console.dir(this.likes)
    // }

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