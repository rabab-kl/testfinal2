document.addEventListener("DOMContentLoaded", function() {
    $('.carousel').carousel({
        interval: 3000,
        pause: 'hover'
    });

    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.boxShadow = "0 0 15px rgba(255, 60, 0, 0.8)";
        });
        card.addEventListener("mouseleave", function() {
            this.style.boxShadow = "none";
        });
        const slider = document.querySelector(".carousel-item");
        const leftBtn = document.querySelector(".left-btn");
        const rightBtn = document.querySelector(".right-btn");
        const scrollAmount = 220;
        leftBtn.addEventListener("click", function() {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });
        rightBtn.addEventListener("click", function() {
            slider.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });
});

function subscribe() {
    alert("Thank you for subscribing! Your account will be activated shortly.");
}