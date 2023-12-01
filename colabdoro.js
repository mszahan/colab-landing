var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var breakStartSound = new Audio('end.mp3');
var breakEndSound = new Audio('start.mp3');

// store a reference to a timer variable
var startTimer;

start.addEventListener('click', function () {
    if (startTimer === undefined) {
        breakStartSound.play();
        startTimer = setInterval(timer, 1000);
    } 
});

reset.addEventListener('click', function () {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval();
    startTimer = undefined;
});

stop.addEventListener('click', function () {
    stopInterval();
    startTimer = undefined;
});

// Start Timer Function
function timer() {
    // Work Timer Countdown
    if (ws.innerText != 0) {
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    // Break Timer Countdown
    if (wm.innerText == 0 && ws.innerText == 0) {
        if (bs.innerText != 0) {
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;

            // Play break start sound
            breakStartSound.play();
        }
    }

    // Increment Counter by one if one full cycle is completed
    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        // Play break end sound
        breakEndSound.play();

        document.getElementById('counter').innerText++;
    }
}

// Stop Timer Function
function stopInterval() {
    clearInterval(startTimer);
}
