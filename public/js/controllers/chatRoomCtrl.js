/**
 * Created by syedf on 2/9/2016.
 */
angular
    .module('radoChat')
    .controller('chatRoomCtrl', ['$scope','socketService', function ($scope, socketService) {
        var self = this;
        $scope.messages = [];
        $(document).ready(function(){
            $('#modal').openModal();
        });
        socketService.on('addedNewUser', function (data) {
            $scope.messages.push(data);
        });
        socketService.on('broadcast', function (data) {
           $scope.messages.push(data); 
        });
        $scope.addNewUser = function (user) {
            if(user){
                $scope.nickName = user;
                socketService.emit('new:user',user, "ENTERED CHANNEL");
            }
        };
        $scope.sendMessage = function (message,attachment) {
            var toSend ={};
            if(message){
                toSend.msg = message;
                socketService.emit('message',$scope.nickName || 'anonymous',toSend);
                $scope.msg = '';
            }
            if(attachment && !message){
                toSend.image = attachment.$ngfBlobUrl || '';
                socketService.emit('message',$scope.nickName || 'anonymous',toSend);
                $scope.attachment= '';
            }
            if(attachment && message){
                toSend.msg = message;
                toSend.image = attachment.$ngfBlobUrl || '';
                socketService.emit('message',$scope.nickName || 'anonymous',toSend);
                $scope.msg = '';
                $scope.attachment= '';
            }
        };
        $scope.showModal = function (image) {
            $scope.image = image;
            $('#image-modal').openModal();
        }
    }]);