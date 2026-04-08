const parent = document.getElementById("parent");
const socialIcon = document.querySelectorAll("#parent .social-icon");
const myAudio = new Audio("imgs/water-bubble.wav");



socialIcon.forEach((icon, index) => {

    icon.addEventListener("mouseenter", () => {
        parent.className = "";
        parent.classList.add(`parent-child-${index + 1}`);
        myAudio.currentTime = 0;
        myAudio.volume = 0.2;
        myAudio.duration = 0.4;
        myAudio.play();
    });

    

});





