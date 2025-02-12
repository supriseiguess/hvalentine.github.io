document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".pages"); // Select all pages
    const nextButton = document.getElementById("button-f");
    const prevButton = document.getElementById("button-b");
    const restartButton = document.createElement("button");
    
    restartButton.textContent = "Restart";
    restartButton.id = "button-r";
    restartButton.style.display = "none"; // Hide it initially
    document.querySelector("main").appendChild(restartButton); // Add to the DOM

    let currentIndex = 0; // Track current page index

    // Function to show the current page
    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.toggle("show", i === index);
            page.classList.toggle("hide", i !== index);
        });
    }

    // Show restart button when last page is reached
    function checkForRestart() {
        if (currentIndex === pages.length - 1) {
            restartButton.style.display = "block"; // Show restart button
        } else {
            restartButton.style.display = "none"; // Hide restart button
        }
    }

    // Show previous and next buttons if we're not at the start or end
    function checkForNavigationButtons() {
        if (currentIndex === 0) {
            prevButton.style.display = "none"; // Hide Previous button on the first page
        } else {
            prevButton.style.display = "inline-block"; // Show Previous button
        }

        if (currentIndex === pages.length - 1) {
            nextButton.style.display = "none"; // Hide Next button on the last page
            prevButton.style.display = "none"; // Hide Next button on the last page
        } else {
            nextButton.style.display = "inline-block"; // Show Next button
        }
    }

    // Next button (Next Page)
    nextButton.addEventListener("click", () => {
        if (currentIndex < pages.length - 1) {
            currentIndex++;
            showPage(currentIndex);
            checkForRestart(); // Check if restart button should be shown
            checkForNavigationButtons(); // Show or hide navigation buttons
        }
    });

    // Previous button (Previous Page)
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            showPage(currentIndex);
            checkForRestart(); // Check if restart button should be shown
            checkForNavigationButtons(); // Show or hide navigation buttons
        }
    });

    // Restart button (Restart the book)
    restartButton.addEventListener("click", () => {
        currentIndex = 0; // Reset to the first page
        showPage(currentIndex); // Show the first page
        checkForRestart(); // Hide the restart button
        checkForNavigationButtons(); // Show both navigation buttons
    });

    // Show the first page initially
    showPage(currentIndex);
    checkForRestart(); // Hide the restart button initially
    checkForNavigationButtons(); // Ensure correct visibility of buttons
});
