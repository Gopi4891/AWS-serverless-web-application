document.addEventListener("DOMContentLoaded", function() {
    const typedText = document.querySelector(".typing");
    const words = ["a DevOps Engineer", "a Cloud Enthusiast", "a CI/CD Expert"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        let currentWord = words[wordIndex];
        let currentText = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);
        typedText.textContent = currentText;
        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            speed = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
