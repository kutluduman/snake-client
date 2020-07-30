const {MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, SAY_HELL0, ASK_HOW_ARE_YOU, HEY_HEY} = require('./constants.js');


// tcp connection is stored as object
let connection;



const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }
  if (key === SAY_HELL0) {
    connection.write('Say: HELLO');
  }
  if (key === ASK_HOW_ARE_YOU) {
    connection.write('Say: HOW ARE YA');
  }
  if (key === HEY_HEY) {
    connection.write('Say: HEY HEY');
  }
};


module.exports = {setupInput};