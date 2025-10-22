import initGallery from "./maugallery.js"
import initCarousel from "./carousel.js"

document.addEventListener("DOMContentLoaded", () => {
    initGallery($(".gallery"), {
        columns: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
        lightBox: true,
        lightboxId: "myAwesomeLightbox",
        showTags: true,
        tagsPosition: "top"
    })

    initCarousel()
})