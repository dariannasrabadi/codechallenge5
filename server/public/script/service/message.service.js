app.service('MessageService',['$http', function($http) {
    const self = this;

    self.submitMessage = function(data) {
        console.log('received from dom & controller: ', data);
   
    } 

}]);