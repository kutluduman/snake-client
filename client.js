const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {

  const conn = net.createConnection({
    port : 50541 ,
    host : '135.23.222.131'
  });

  // event handle for receiving incoming message from server
  conn.on('data', function(message) {
    console.log(message);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;

};

module.exports = {connect};