document.addEventListener('DOMContentLoaded', () => {

    // --- Image Slider Logic ---
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (sliderWrapper && prevBtn && nextBtn) {
        const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSliderPosition() {
            // Asegurarnos de que totalSlides no es cero para evitar división por cero
            if (totalSlides > 0) {
                 sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
        }

        nextBtn.addEventListener('click', () => {
            if (totalSlides > 0) {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSliderPosition();
            }
        });

        prevBtn.addEventListener('click', () => {
             if (totalSlides > 0) {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSliderPosition();
            }
        });
        
        // Inicializa el slider en la primera imagen
        updateSliderPosition();
    }
    
    // Aquí puedes tener otro código para el menú, etc.
});