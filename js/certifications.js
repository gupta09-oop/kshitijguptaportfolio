document.addEventListener("DOMContentLoaded", function () {
    const certCards = document.querySelectorAll(".cert-card");

    function animateCertifications() {
        certCards.forEach((card) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (cardPosition < screenHeight - 100) {
                card.classList.add("animate"); // Add animation when visible
            }
        });
    }

    // Run animation on scroll
    window.addEventListener("scroll", animateCertifications);
    animateCertifications(); // Run once on page load
});
