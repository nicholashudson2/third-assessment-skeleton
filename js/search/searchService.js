angular.module('twitterApp').service('searchService', ['tweetService', '$state', function (tweetService, $state) {

    this.tweetService = tweetService

    this.setSearchString = (searchString) => {
        this.searchString = searchString
    }

    this.getSearchType = () => {
        if (this.searchString.charAt(0) == '#') {
            return 'main.hashtagSearch({ label: ' + this.searchString + '})'                 //10/3 Artem updated
        }
        if (this.searchString.charAt(0) == '@') {  // Updated by chris
            return 'main.usernameSearch'

        }
        return 'signIn'
    }

    this.activateSearch = (findString) => {
        if (!this.searchString) {
        } else {
            if (this.searchString.charAt(0) == '#') {
                $state.go('main.hashtagSearch', { label: this.searchString })              //10/3 Artem updated
            }
            if (this.searchString.charAt(0) == '@') {  // Updated by chris
                if (this.searchString.slice(1) === sessionStorage.getItem('userLogin')){
                    $state.go('main.profile', { username: this.searchString } )
                } else {
                    $state.go('main.publicProfile', { username: this.searchString })
                }
            }
        }
    }

}])