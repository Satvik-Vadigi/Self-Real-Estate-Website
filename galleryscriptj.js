// Select all gallery images
const images = document.querySelectorAll(".grid-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Loop through images and add click event
images.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = image.src;
        caption.textContent = image.alt;
    });
});

// Close the lightbox when clicking the 'X'
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Also close the lightbox when clicking outside the image
window.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});
