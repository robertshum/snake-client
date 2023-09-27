const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Player left the game");
    process.exit();
  }

  console.log("key", key);
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => handleUserInput(data)); //handles input
  return stdin;
};

module.exports = { setupInput };