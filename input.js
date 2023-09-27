// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {

  //exit
  if (key === '\u0003') {
    console.log("Player left the game");
    process.exit();
  }

  if (key.toLowerCase() === "w") {
    connection.write("Move: up");
    return;
  }

  if (key.toLowerCase() === "a") {
    connection.write("Move: left");
    return;
  }

  if (key.toLowerCase() === "s") {
    connection.write("Move: down");
    return;
  }

  if (key.toLowerCase() === "d") {
    connection.write("Move: right");
    return;
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => handleUserInput(data)); //handles input
  connection = conn;
  return stdin;
};

module.exports = { setupInput };