// let text = document.querySelector("#text");


// setTimeout(displayNone, 3000);

// button.onclick = displayNone;

// function displayNone() {
//     text.style.display = "none";
// }
// let button = document.querySelector("button");
// let list = document.querySelector("#list");
// var count = 0;

// let createLi = setInterval(ligeneration, 1000);

// button.addEventListener("click", function() {
//     if (!this.classList.contains("stop")) {
//         clearInterval(createLi);
//         this.classList.add("stop");
//     } else {
//         this.classList.remove("stop");
//         createLi = setInterval(ligeneration, 1000);
//     }

// })

// function ligeneration() {
//     var li = document.createElement("li");
//     li.innerText = count;
//     list.appendChild(li);
//     count++;
// }


//timer
var timer = document.querySelector(".timer");
var minute = timer.firstElementChild.innerText;
var second = timer.lastElementChild.innerText;

var secondomer = setInterval(function() {
    if (second > 0) {
        second--;
        timer.lastElementChild.innerText = formatTime(second);
    } else {
        if (minute > 0) {
            minute--;
            timer.firstElementChild.innerText = formatTime(minute);
            second = 59;
            timer.lastElementChild.innerText = formatTime(second);
        }
    }

}, 1000)

function formatTime(nmb) {
    var result = nmb;
    if (nmb < 10) {
        result = "0" + nmb;
    }
    return result;
}