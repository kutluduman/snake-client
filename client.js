const net = require('net');
const {NAME, SUCCESS_CONNECT, IP, PORT} = require('./constants');
let {direction} = require('./input');

/**
 * Establishes connection with the game server
 */

const connect = function() {

  const conn = net.createConnection({
    port : PORT ,
    host : IP
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // event hand for successfully connection
  conn.on('connect', function () {
    console.log(SUCCESS_CONNECT);
    
  });

  conn.on('connect', () => {
    // sending the name to the server as JOK
    conn.write(` Name: ${NAME}`);
  });


  // event handle for receiving incoming message from server
  conn.on('data', function(message) {
    console.log('Message from server ', message);
  });

  return conn;

};

module.exports = {connect};