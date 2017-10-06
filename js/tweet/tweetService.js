angular.module('twitterApp').service('tweetService', ['$http', '$state', function ($http, $state) {

    this.myStyle = {display: 'none'}

    this.getLikes = (id) => {
        return $http.get('http://localhost:8090/tweets/' + id + '/likes')
    }

    this.like = (id) => {
        let credentials = {
            password: sessionStorage.getItem('password'),
            userLogin: sessionStorage.getItem('userLogin')
        }
        $http.post('http://localhost:8090/tweets/' + id + '/like', credentials);
    }

    this.repost = (id) => {
        let credentials = {
            password: sessionStorage.getItem('password'),
            userLogin: sessionStorage.getItem('userLogin')
        }
        this.myStyle = {display: 'block'}
        $http.post('http://localhost:8090/tweets/' + id + '/repost', credentials).then((result) => {
            if ($state.is('main.allTweets')) {
                $state.reload();
            } else {
                $state.go('main.allTweets');
            }
        })
    }

    this.deleteTweet = (id) => {
        let credentials = {
            password: sessionStorage.getItem('password'),
            userLogin: sessionStorage.getItem('userLogin')
        }
        $http.post('http://localhost:8090/tweets/' + id + '/delete', credentials).then((result) => {
            $state.reload();
        })
    }

    this.createReply = (id) => {
        if(!this.replyTweet || !this.replyTweet.content){
            alert('Nothing to say aaah?');
        }else{
            this.replyTweet.credentials = {userLogin: sessionStorage.getItem('userLogin'), password: sessionStorage.getItem('password')};
            $http.post('http://localhost:8090/tweets/' + id + '/reply', this.replyTweet).then((result) => {
                this.replyTweet.content = '';
                $state.reload();
                
            })
        }
        
    }



}])