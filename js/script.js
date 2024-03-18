



let formEl = document.querySelector("form")
let inputEl = document.querySelector("input")
let buttonEl = document.querySelector("#button")
let ol = document.querySelector("ol")

buttonEl.addEventListener("click", () => {
    ol.innerHTML = "";
    new Audio("./music/res.mp3").play()
})

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(inputEl.value);
    ol.innerHTML += `<li>${inputEl.value}</li>`
    new Audio("./music/analog-appliance-button-2-185277.mp3").play()
    inputEl.value = "";
})


inputEl.addEventListener("input", () => {
    new Audio("./music/typing.mp3").play()
})

































// let inputel = document.querySelector("input");

// inputel.addEventListener("input"() => {
//     console.log(inputel.value);
// });

// let increment = document.querySelector('#increment');
// let decrement = document.querySelector('#decrement');

// let counter = document.querySelector('#counter');


// function changeColor() {
//     if (number > 0) {
//         counter.style.color = "green";
//         let music = new Audio("./music/sam.mp3");
//         music.play();
//     } else if (number < 0) {
//         counter.style.color = "red";
//         let music = new Audio("./music/sar.mp3");
//         music.play();
//     } else {
//         counter.style.color = "gold";
//         let music = new Audio("./music/res.mp3");
//         music.play();
//     }
// }

// let number = 0;
// increment.addEventListener("click", () => {
//     number++;
//     counter.textContent = number;
//     changeColor();
// });

// decrement.addEventListener("click", () => {
//     number--;
//     counter.textContent = number;
//     changeColor();
// });

