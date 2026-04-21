const parent = document.getElementById("parent");
const socialIcon = document.querySelectorAll("#parent .social-icon");
const myAudio = new Audio("imgs/bubble-pop.mp3");



socialIcon.forEach((icon, index) => {

    const handleMouseEnter = function () {
        parent.className = "";
        parent.classList.add(`parent-child-${index + 1}`);
        myAudio.currentTime = 0;
        myAudio.volume = 0.2;
        myAudio.play();
    };

    const handleMouseLeave = function () {
        parent.className = ""; // reset back
    };

    icon.addEventListener("mouseover", handleMouseEnter);
    icon.addEventListener("mouseleave", handleMouseLeave);

});


