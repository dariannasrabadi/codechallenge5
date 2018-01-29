app.controller('MessageController', ['MessageService', function(MessageService) {
    const self = this;
    
    self.message = MessageService.message
    
    self.submitMessage = function(data) {
        MessageService.submitMessage(data);        
    } 
    
}]);
