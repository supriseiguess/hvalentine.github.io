document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".pages");
    const nextButton = document.getElementById("button-f");
    const prevButton = document.getElementById("button-b");
    
    // Create restart button
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.id = "button-r";
    restartButton.style.display = "none"; // Hidden by default
    document.querySelector(".buttons-cointaer").appendChild(restartButton); // Add to DOM

    let currentIndex = 0; // Track the current page index

    // Function to show the correct page
    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none"; 
        });

        // Show restart button only on the last page
        restartButton.style.display = index === pages.length - 1 ? "block" : "none";

        // Hide "Next" button on the last page
        nextButton.style.display = index === pages.length - 1 ? "none" : "inline-block";

        // Hide "Previous" button on the first page
        prevButton.style.display = index === 0 ? "none" : "inline-block";
    }

    // Next button event listener
    nextButton.addEventListener("click", () => {
        if (currentIndex < pages.length - 1) {
            currentIndex++;
            showPage(currentIndex);
        }
    });

    // Previous button event listener
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            showPage(currentIndex);
        }
    });

    // Restart button event listener
    restartButton.addEventListener("click", () => {
        currentIndex = 0;
        showPage(currentIndex);
    });

    // Initialize display
    showPage(currentIndex);
});
