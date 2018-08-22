'use strict';

// Import the interface to Tessel hardware
let tessel = require('tessel');
let TesselIO = require('tessel-io');
let five = require("johnny-five");

let board = new five.Board({
  io: new TesselIO()
});

board.on("ready", () => {
  // Blink!
  setInterval(() => {
    tessel.led[2].toggle();
  }, 500);

  var button = new five.Button("b7");
  var led = new five.Led("b3");
  button.on("press", () => {
    console.log("on");
    led.on();
  });
  button.on("release", () => {
    console.log("off");
    led.off();
  });

  console.log("(Press CTRL + C to stop)");
});

