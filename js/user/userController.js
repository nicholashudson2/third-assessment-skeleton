angular.module('twitterApp').controller('userController', ['searchService', function(searchService){
    
    this.searchService = searchService

    this.setSearchString = (searchString) => {
        this.searchService.searchString
    }

}])