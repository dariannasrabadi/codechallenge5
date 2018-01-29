app.controller('MessageController', ['MessageService', function(MessageService) {
    const self = this;
            
    self.submitMessage = function(data) {
        MessageService.submitMessage(data);        
    } 
    
}]);
