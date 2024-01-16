document.addEventListener('DOMContentLoaded', (event) => {
    const gallery = document.getElementById('gallery');
    let offset = 0;

    // Function to move images
    function moveImages() {
        const images = gallery.querySelectorAll('.image-container');
        images.forEach((imgContainer, index) => {
            imgContainer.style.transform = `translateX(${offset}px)`;
            offset += 5; // Move each image by 5px
        });
    }

    // Call moveImages every 50ms
    setInterval(moveImages, 50);
});
