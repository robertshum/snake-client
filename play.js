const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

//from the destructuring in the require stmt up top
const connection = connect();

 //from the destructuring in the require stmt up top
setupInput(connection);





