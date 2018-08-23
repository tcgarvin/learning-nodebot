// Import the interface to Tessel hardware
let tessel = require('tessel');
let TesselIO = require('tessel-io');
let five = require("johnny-five");

let board = new five.Board({
    io: new TesselIO()
});

board.on("ready", () => {

    // Code goes here 
    var led = new five.Led("b7");
    led.on();
    setInterval(() => {
        if (Math.random() > 0.5)
            led.on();
        else
            led.off();
    }, 500)


    console.log("(Press CTRL + C to stop)");
});

