
const plusIcons = document.querySelectorAll(".plus-icon")


function addAnimate() {



    plusIcons.forEach((icon) => {
        icon.classList.add("animate-icon");

        


    });
}

setInterval(addAnimate, 1000);





try {

    const questions = document.querySelectorAll(".ques");
    questions.forEach(function (question) {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            const isOpen = item.classList.contains("open");
            document.querySelectorAll(".item").forEach(i => {
                i.classList.remove("open");
            })
            if (!isOpen) item.classList.add("open");

        });

    });

} catch (error) {
    console.error(error);

}