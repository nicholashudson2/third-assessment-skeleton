angular.module('twitterApp').service('tweetService', ['$http', function (http) {

    
    //likes don't work 
   // this.likes;

    // this.NumberOfLikes = (id) => {
    //     return http.get('http://localhost:8090/tweets/'+id+'/likes').then((result) => {
    //         console.log(result.data.length)
    //         this.likes = result.data.length;
    //         return result.data.length;
    //     })
    // }

    this.like = (id) => {
        let credentials = {
            password: sessionStorage.getItem('password'),
            userLogin: sessionStorage.getItem('userLogin')
        }
        http.post('http://localhost:8090/tweets/'+id+'/like', credentials)
        // .then((result)=>{
        //     console.log(result)
        //     this.NumberOfLikes(id).then((res)=> {
        //         console.log(res)
        //     });
        // })
       // this.NumberOfLikes(id);
    }

}])