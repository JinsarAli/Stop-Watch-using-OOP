function Stopwatch() {
    let startTime, stopTime, duration = 0, running, reset = true;

    this.startTime = function () {
        if (running) {
            throw new Error("Stopwatch has already started.")
        }

        running = true;
        startTime = new Date();

        this.countingInterval = setInterval(this.render, 1000)
        setTimeout("stopwatch()",1000)
    }
    this.stopTime = function () {
        if (!running) {
            throw new Error("Stopwatch is not started.");
        }
        running = false;
        stopTime = new Date();

        let seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;

        clearInterval(this.countingInterval);
    }
    this.reset = function () {
        startTime = null;
        stopTime = null;
        duration = 0;
        running = false;

        hr.innerHTML = "00";
        min.innerHTML = "00";
        sec.innerHTML = "00";

        clearInterval(this.countingInterval);
    }

    this.render = function () {
        let now = new Date();
        // FOrmating the time
        let distance = now.getTime() - startTime.getTime();
        // seconds
        let seconds = Math.floor(distance / 1000) % 60;
        sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        // minutes
        let minutes = Math.floor((distance / 1000) / 60) % 60;
        min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        // hours
        let hours = Math.floor(((distance / 1000) / 60) / 60) % 24;
        hr.innerHTML = hours < 10 ? "0" + hours : hours;
    }
    // 
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}

let sw = new Stopwatch();