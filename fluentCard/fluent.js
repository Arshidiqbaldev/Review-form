


const parent = document.getElementById("parent");
const children = document.querySelectorAll("#parent .child");

children.forEach((child, index) => {
    child.addEventListener("click", () => {
        parent.className = ""; // clear old classes
        parent.classList.add(`parent-child-${index + 1}`);
    });
});





const parentTwo = document.getElementById("parentTwo");
const childrenTwo = document.querySelectorAll("#parentTwo .child-2");

childrenTwo.forEach((child, index) => {
    child.addEventListener("click", () => {
        parentTwo.className = ""; // clear old classes
        parentTwo.classList.add(`parent-2-child-${index + 1}`);
    });
});



const columns = document.getElementById("columns");
const rows = document.getElementById("rows");


columns.addEventListener("click", () => {
    parent.style.display = "none";
    parentTwo.style.display = "flex";
})


rows.addEventListener("click", () => {

    parentTwo.style.display = "none";
    parent.style.display = "flex"
})

