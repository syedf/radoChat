/**
 * Created by syedf on 2/8/2016.
 */
angular
    .module('radoChat')
    .factory('socketService',['socketFactory', function (socketFactory) {
        var socket = socketFactory();
        socket.forward('broadcast');
        return socket;
    }]);