// Master Data Object storing project details and image arrays
const portfolioData = {
    project1: {
        title: "Blue Spreads",
        description: "A short description of project 1 goes here.",
        images: [
            "assets/blue/376_Project3_FINAL-1.jpg",
            "assets/blue/376_Project3_FINAL-2.jpg",
            "assets/blue/376_Project3_FINAL-3.jpg",
            "assets/blue/Des376ProjectThree_2018-1.jpg"
        ]
    },
    project2: {
        title: "Cornhole boards",
        description: "A short description of project 2 goes here.",
        images: [
            "assets/cornhole/IMG_8823.jpg",
            "assets/cornhole/IMG_8850.jpg",
            "assets/cornhole/IMG_9034.jpg",
            "assets/cornhole/IMG_9039.jpg",
            "assets/cornhole/IMG_9102.jpg",
            "assets/cornhole/IMG_9104.jpg"
        ]
    },
    project3: {
        title: "Monorail branding",
        description: "A short description of project 3 goes here.",
        images: [
            "assets/monorail/Jackson_Brand1.jpg",
            "assets/monorail/Jackson_Brand2.jpg",
            "assets/monorail/Jackson_Brand3.jpg",
            "assets/monorail/Jackson_BrandHeader.jpg"
        ]
    }
    // Add project2 through project7 here following this exact structure
};

let currentProjectKey = null;
let currentImageIndex = 0;

// Opens the modal for a specific project
function openProject(projectId) {
    if (!portfolioData[projectId]) return;

    currentProjectKey = projectId;
    currentImageIndex = 0;

    const modal = document.getElementById("assetModal");
    modal.style.display = "flex";

    updateCarousel();
}

// Updates the image source and description caption based on active index
function updateCarousel() {
    const project = portfolioData[currentProjectKey];
    const imgElement = document.getElementById("carouselImage");
    const descElement = document.getElementById("modalDescription");

    if (project && project.images.length > 0) {
        imgElement.src = project.images[currentImageIndex];
        descElement.textContent = project.description;
    }
}

// Cycles through images with automatic looping
function changeImage(direction) {
    if (!currentProjectKey || !portfolioData[currentProjectKey]) return;

    const images = portfolioData[currentProjectKey].images;
    if (images.length <= 1) return;

    // Loop around if reaching start or end of array
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateCarousel();
}

// Closes the modal overlay
function closeModal() {
    const modal = document.getElementById("assetModal");
    modal.style.display = "none";
    currentProjectKey = null;
    currentImageIndex = 0;
}

// Dismiss modal when clicking outside the content area
window.addEventListener("click", function (event) {
    const modal = document.getElementById("assetModal");
    if (event.target === modal) {
        closeModal();
    }
});