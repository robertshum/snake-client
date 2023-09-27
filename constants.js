const IP = "localhost";
const PORT = 50541;

const banter = ["I'm a sneaky snake",
  "Hello snake world",
  "You look fang-cy",
  "It's a hit or hiss",
  "Lighthouse Labs rocks!",
  "~>°)~~~~~~~~~~",
  "=)"];

const ENCODING = "utf8";

//can be rebound here
const MOVE_UP = "w";
const MOVE_DOWN = "s";
const MOVE_LEFT = "a";
const MOVE_RIGHT = "d";

module.exports = {
  IP,
  PORT,
  banter,
  ENCODING,
  MOVEMENT_KEYS: {
    MOVE_UP,
    MOVE_DOWN,
    MOVE_RIGHT,
    MOVE_LEFT
  }
};