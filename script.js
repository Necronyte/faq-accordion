document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question-container");

    questions.forEach(question => {
        const answerContainer = question.nextElementSibling;
        const toggleIcon = question.querySelector("img");

        // Başlangıçta tüm cevapları gizle
        answerContainer.style.maxHeight = "0";
        answerContainer.style.opacity = "0";
        answerContainer.style.overflow = "hidden";
        toggleIcon.src = "assets/images/icon-plus.svg";

        // Tıklama olayını ekle
        question.addEventListener("click", function() {
            const isOpen = answerContainer.style.maxHeight !== "0px";

            // Önce tüm cevapları kapat
            document.querySelectorAll(".answer-container").forEach(answer => {
                answer.style.maxHeight = "0";
                answer.style.opacity = "0";
                answer.style.overflow = "hidden";
            });

            document.querySelectorAll(".question-container img").forEach(icon => {
                icon.src = "assets/images/icon-plus.svg";
            });

            // Eğer zaten açıksa kapalı bırak
            if (!isOpen) {
                answerContainer.style.maxHeight = "200px"; // İçeriğe uygun yükseklik
                answerContainer.style.opacity = "1";
                answerContainer.style.overflow = "visible";
                toggleIcon.src = "assets/images/icon-minus.svg";
            }
        });
    });
});
