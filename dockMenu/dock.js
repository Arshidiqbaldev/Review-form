const parent = document.getElementById("parent");
const socialIcon = document.querySelectorAll("#parent .social-icon");
const myAudio = new Audio("imgs/bubble-pop.mp3");



socialIcon.forEach((icon, index) => {

    icon.addEventListener("mouseenter", () => {
        parent.className = "";
        parent.classList.add(`parent-child-${index + 1}`);
        myAudio.currentTime = 0;
        myAudio.volume = 0.1;
        myAudio.duration = 0.4;
        myAudio.play();
    });

    

});





