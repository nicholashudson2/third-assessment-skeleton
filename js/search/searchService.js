angular.module('twitterApp').service('searchService', ['tweetService', function(tweetService){
    
    this.tweetService = tweetService

    this.setSearchString = (searchString) => {
        this.searchString = searchString
    }

    this.getSearchType = () => {
        if (this.searchString.charAt(0) == '#'){
            return 'main.hashtagSearch'                 //10/3 Artem updated
        }
        if (this.searchString.charAt(0) == '@'){
            return 'usernameSearch'

        }
        return 'signIn'
    }

}])