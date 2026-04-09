const displayCount = document.getElementById("countDisplay");
const countDec = document.getElementById("dec");
const countInc = document.getElementById("inc");
const countReset = document.getElementById("cont-reset")
const myAudio = new Audio("imgs/bubble-pop.mp3");
const myAudio2 = new Audio("imgs/mouse-click.mp3");
let count = 0;




countDec.addEventListener("click", function () {
    count--;
    displayCount.textContent = count;
    myAudio.currentTime = 0;
    myAudio.volume = 0.1;
    myAudio.duration = 0.4;
    myAudio.play();


});


countInc.addEventListener("click", function () {
    count++;
    displayCount.textContent = count;
    myAudio.currentTime = 0;
    myAudio.volume = 0.1;
    myAudio.duration = 0.4;
    myAudio.play();
})



countReset.addEventListener("click", function () {
    count = 0;
    displayCount.textContent = count;
    myAudio2.currentTime = 0;
    myAudio2.volume = 0.1;
    myAudio2.duration = 0.4;
    myAudio2.play();
})


