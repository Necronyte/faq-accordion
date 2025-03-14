document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question-container");

    questions.forEach(question => {
        const answerContainer = question.nextElementSibling;
        const toggleIcon = question.querySelector("img");

        answerContainer.style.maxHeight = "0";
        answerContainer.style.opacity = "0";
        answerContainer.style.overflow = "hidden";
        toggleIcon.src = "assets/images/icon-plus.svg";

        question.addEventListener("click", function() {
            const isOpen = answerContainer.style.maxHeight !== "0px";

            document.querySelectorAll(".answer-container").forEach(answer => {
                answer.style.maxHeight = "0";
                answer.style.opacity = "0";
                answer.style.overflow = "hidden";
            });

            document.querySelectorAll(".question-container img").forEach(icon => {
                icon.src = "assets/images/icon-plus.svg";
            });

            if (!isOpen) {
                answerContainer.style.maxHeight = "200px"; 
                answerContainer.style.opacity = "1";
                answerContainer.style.overflow = "visible";
                toggleIcon.src = "assets/images/icon-minus.svg";
            }
        });
    });
});
