const displayCount  = document.getElementById("countDisplay");
const countDec = document.getElementById("dec");
const countInc = document.getElementById("inc");
const countReset = document.getElementById("cont-reset")
let count = 0;



countDec.addEventListener("click", function(){
    count--;
    displayCount.textContent = count;

    

});


countInc.addEventListener("click", function(){
  count++;
    displayCount.textContent = count;
})



countReset.addEventListener("click", function(){
  count = 0;
    displayCount.textContent = count;
})


