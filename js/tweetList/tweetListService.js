angular.module('twitterApp').service('tweetListService', ['$http',  function ($http) { //Artem
    
          
        this.getAllTweets = () => {
            //return $http.get('http://localhost:8090/users/@' + sessionStorage.getItem('userLogin') + '/feed');
           
            return $http.get('http://localhost:8090/tweets');
        }

        this.getFeed = () => {
            return $http.get('http://localhost:8090/users/@' + sessionStorage.getItem('userLogin') + '/feed');
        }

        //created input params in case if we need to reuse this function to get tweets of someone else
        this.getMyTweets = (username = sessionStorage.getItem('userLogin')) => {
            return $http.get('http://localhost:8090/users/@' + username + '/tweets');
        }
        
        this.getMyMentions = (username = sessionStorage.getItem('userLogin')) => {
            return $http.get('http://localhost:8090/users/@' + username + '/mentions');
        }
    
    }])