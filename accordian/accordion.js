


try {

    const questions = document.querySelectorAll(".question");
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





try {

    const questions2 = document.querySelectorAll(".question-2");

    questions2.forEach(function(question2){
        question2.addEventListener("click" ,()=>{
            const item2 = question2.parentElement;
            const isOpen2 = item2.classList.contains("open-2");
            document.querySelectorAll(".item-2").forEach(i=>{
                i.classList.remove("open-2")
            })
            if(!isOpen2) item2.classList.add("open-2");
        })
    })


    
} catch (error) {
    
}