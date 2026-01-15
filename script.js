const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const artworkItems = document.querySelectorAll(".artwork-item");

artworkItems.forEach(item => {
    const img = item.querySelector("img");

    item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = ((x / rect.width) - 0.5) * 20;
        const moveY = ((y / rect.height) - 0.5) * 20;

        img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.15)`;
    });

    item.addEventListener("mouseleave", () => {
        img.style.transform = "translate(0, 0) scale(1)";
    });
});




