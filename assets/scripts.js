$(document).ready(function() {
    // Galerie du portfolio
    $(".gallery").mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: "myAwesomeLightbox",
        showTags: true,
        tagsPosition: "top"
    })

    // Carrousel d'accueil
    const carouselElement = document.getElementById("carouselExampleIndicators")
    const carouselFigures = document.querySelectorAll(".carousel-item")

    carouselElement.addEventListener("slid.bs.carousel", () => {
        carouselFigures.forEach(item => item.setAttribute("tabindex", "-1"))

        const activeFigure = carouselElement.querySelector(".carousel-item.active")
        activeFigure.setAttribute("tabindex", "0")
    })

    const carousel = new bootstrap.Carousel(carouselElement)
    const toggleButton = document.querySelector(".toggle")

    let isPaused = carousel._isPaused

    toggleButton.addEventListener("click", () => {
        isPaused = !isPaused

        if (isPaused) {
            carousel.pause()
            toggleButton.textContent = "⯈"
            toggleButton.setAttribute("aria-label", "Carrousel mis en pause")
            toggleButton.setAttribute("aria-pressed", "true")
        } else {
            carousel.cycle()
            toggleButton.textContent = "I I"
            toggleButton.setAttribute("aria-label", "Mettre le carrousel en pause")
            toggleButton.setAttribute("aria-pressed", "false")
        }
    })
})