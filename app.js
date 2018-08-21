const DOMstrings = {
    timerDays: document.querySelector(".timer__days-box--num"),
    timerHours: document.querySelector(".timer__hours-box--num"),
    timerMinutes: document.querySelector(".timer__minutes-box--num"),
    timerSeconds: document.querySelector(".timer__seconds-box--num")
};

var countDown = setInterval(function () {
    // The countdown date
    let countDate = new Date('Aug 30, 2018 13:05').getTime();

    // current Time Stamp
    let now = new Date().getTime();

    let difference = countDate - now;

    // Calculating Time:
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    DOMstrings.timerDays.textContent = days;
    DOMstrings.timerHours.textContent = hours;
    DOMstrings.timerMinutes.textContent = minutes;
    DOMstrings.timerSeconds.textContent = seconds;

    if (difference < 0) {
        clearInterval(countDown);
        document.querySelector('.title').textContent = 'Time is over!';
    }

}, 1000);
