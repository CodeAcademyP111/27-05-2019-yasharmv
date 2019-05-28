var timer = document.querySelector(".timer")
var minute = timer.firstElementChild.innerText;
var second = timer.lastElementChild.innerText;
let button = document.querySelector("button");

var clock = setInterval(start, 1000)

function formatTime(nmb) {
    var result = nmb;
    if (nmb < 10) {
        result = "0" + nmb;
    }
    return result;
} 

button.addEventListener("click", function() {
    if (!this.classList.contains("stop")){
        clearInterval(clock);
    this.classList.add("stop"); 
    } else{
        this.classList.remove("stop"); 
        clock = setInterval(start, 1000)
    }
    

})

function start () {
    if (second > 0) {
        second--;
        timer.lastElementChild.innerText = formatTime(second);
    }
    else {
        if (minute > 0) {
            minute--;
            timer.firstElementChild.innerText = formatTime(minute);
            second = 59;
            timer.lastElementChild.innerText = formatTime(second);
        }
    }
}