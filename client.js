const net = require("net");
const { setgroups } = require("process");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    setupData(conn);
  });
  return conn;
};

setupData = function(conn) {

  conn.on("data", (data) => {
    console.log("data", data);
  });

  conn.write("Name: ROB");
};

module.exports = { connect };