angular.module('twitterApp').service('tweetListService', ['$http',  function ($http) { //Artem
    
          
        this.getAllTweets = () => {           
            return $http.get('http://localhost:8090/tweets');
        }

        this.getFeed = (username) => {
            if(username===''){
                username=sessionStorage.getItem('userLogin')
            }
            return $http.get('http://localhost:8090/users/@' + username + '/feed');
        }

        this.getMyTweets = (username) => {
            if(username===''){
                username=sessionStorage.getItem('userLogin')
            }
            return $http.get('http://localhost:8090/users/@' + username + '/tweets');
        }
        
        this.getMyMentions = (username) => {
            if(username===''){
                username=sessionStorage.getItem('userLogin')
            }
            return $http.get('http://localhost:8090/users/@' + username + '/mentions');
        }

        this.getReplies = (tweetId) => {
            return $http.get('http://localhost:8090/tweets/'+tweetId+'/replies');
        }

        this.getReposts = (tweetId) => {
            return $http.get('http://localhost:8090/tweets/'+tweetId+'/reposts')
        }

        this.getBookmarks = (username) => {
            if(username===''){
                username=sessionStorage.getItem('userLogin')
            }
            return $http.get('http://localhost:8090/users/@' + username + '/liked');
        }
        
    }])