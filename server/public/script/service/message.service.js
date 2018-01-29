app.service('MessageService',['$http', function($http) {
    const self = this;
    self.message = { list: [] }

    self.submitMessage = function(data) {
        console.log('received from dom & controller: ', data);
        $http.post('/messages', data)
            .then(function(response) {
                console.log('response from server post: ', response);
                self.getMessages()
            })
            .catch(function(error) {
                console.log('error from server post: ', error);
            })
    } 


    self.getMessages = function() {
        $http.get('/messages')
        .then(function(response) {
            self.message.list = response.data
            console.log('response from get messages: ', response.data);
            
        })        
        .catch(function (response) {
            console.log('error on search get', response);
        });
    }
    self.getMessages()

}]);