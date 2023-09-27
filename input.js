const { banter, ENCODING, MOVEMENT_KEYS } = require("./constants");

// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {

  connection.write("");
  //exit
  if (key === '\u0003') {
    console.log("Player left the game");
    process.exit();
  }

  if (key.toLowerCase() === MOVEMENT_KEYS.MOVE_UP) {
    connection.write("Move: up");
    return;
  }

  if (key.toLowerCase() === MOVEMENT_KEYS.MOVE_LEFT) {
    connection.write("Move: left");
    return;
  }

  if (key.toLowerCase() === MOVEMENT_KEYS.MOVE_DOWN) {
    connection.write("Move: down");
    return;
  }

  if (key.toLowerCase() === MOVEMENT_KEYS.MOVE_RIGHT) {
    connection.write("Move: right");
    return;
  }
};

//25 character limit for msgs
const startBanter = () => {
  let i = 0;
  setInterval(() => {
    const msg = banter[i];
    i = i >= banter.length - 1 ? 0 : i + 1;
    connection.write(`Say: ${msg}`);
  }, 4 * 1000);
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", (data) => handleUserInput(data)); //handles input
  connection = conn;
  startBanter();
  return stdin;
};

module.exports = { setupInput };