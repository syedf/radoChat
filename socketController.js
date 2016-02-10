/**
 * Created by syedf on 2/9/2016.
 */
module.exports = function (io) {
  io.on('connection', function (socket) {
      socket.on('new:user', function (from, message) {
          io.sockets.emit('addedNewUser',{
              msg : message,
              from: from
          });
      });
      
      socket.on('message', function (from, data) {
          io.sockets.emit('broadcast', {
              img: data.image || '',
              msg: data.msg,
              from: from
          });
      });
  })  
};