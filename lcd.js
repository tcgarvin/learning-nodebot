'use strict';

let tessel = require('tessel');
let TesselIO = require('tessel-io');
let five = require("johnny-five");

let board = new five.Board({
  io: new TesselIO()
});

let names = ["Tim","David","World","Everyone"];
let rainbow = ["white", "black", "red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

board.on("ready", () => {
  // Blink!
  setInterval(() => {
    tessel.led[2].toggle();
  }, 500);

  var led = new five.Led.RGB({
    pins: { red: "a0", green: "a1", blue: "a2", }
  });

  var lcd = new five.LCD({
    pins: ["b2", "b3", "b4", "b5", "b6", "b7"]
  });

  var index = 0;

  board.loop(1000, () => {
    led.color(rainbow[index]);
    index = index + 1;
    if (index === rainbow.length) {
      index = 0;
    }
  });

  lcd.cursor(0,0).print("Hello, world!");
  lcd.cursor(1,0).print("#JSConfUS 2018");
  led.color("white");

  setInterval(() => {
    lcd.cursor(0,0).print(("Hello, " + getRandomName() + " ".repeat(16)).substring(0,16));
    led.color(rainbow[Math.floor(Math.random() * rainbow.length)]);
  }, 2000);

  console.log("(Press CTRL + C to stop)");
});