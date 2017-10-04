angular.module('twitterApp').service('searchService', ['tweetService', function(tweetService){
    
    this.tweetService = tweetService


    this.getSearchType = () => {
        if (this.searchString.charAt(0) == '#'){
            return 'hashtagSearch'
        }
        if (this.searchString.charAt(0) == '@'){
            return 'usernameSearch'

        }
        return 'signIn'
    }

}])