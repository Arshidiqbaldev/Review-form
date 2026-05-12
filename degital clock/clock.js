const displaytTime = document.getElementById("displayTime");

const hourSpan = document.getElementById("hh");

const minSpan = document.getElementById("mm");

const secSpan = document.getElementById("ss");

const displatyDate = document.getElementById("displaydate");





function getTime() {

    const now = new Date();


    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');


    hourSpan.textContent = hh;
    minSpan.textContent = mm;
    secSpan.textContent = ss;

}

setInterval(getTime, 1000)