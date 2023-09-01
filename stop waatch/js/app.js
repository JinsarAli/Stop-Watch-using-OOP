function Stopwatch() {
    let startTime, stopTime, duration = 0, running

    this.start = function () {

        if (running) {
            throw new Error('stopwatch is already running')
        }
        running = true;
        startTime = new Date();

        this.countingInterval = setInterval(this.render , 1000)
    };

    this.stop = function () {
        if (!running) throw new Error('stopwatch is not running')
        running = false;
        stopTime = new Date();
        let seconds = (stopTime.getTime() - startTime.getTime()) / 1000
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
        //timer
        let now = new Date()
        // formating the time
        let distance = now.getTime() - startTime.getTime();
        // for the seconds
        let seconds = Math.floor(distance / 1000) % 60
        sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        //for he mins
        let minutes = Math.floor((distance / 1000) / 60) % 60
        min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        // for the hours
        let hours = Math.floor(((distance / 1000) / 60) / 60) % 24
        hr.innerHTML = hours < 10 ? "0" + hours : hours
    }
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}
let sw = new Stopwatch();