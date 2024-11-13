document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});
