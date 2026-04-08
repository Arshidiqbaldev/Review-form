const parent = document.getElementById("parent");
const socialIcon = document.querySelectorAll("#parent .social-icon");


socialIcon.forEach((icon, index) => {

    icon.addEventListener("mouseenter", () => {
        parent.className = "";
        parent.classList.add(`parent-child-${index + 1}`);
    });

    

});





