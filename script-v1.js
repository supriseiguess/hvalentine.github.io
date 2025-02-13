document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".pages"); // Select all pages
    const nextButton = document.getElementById("button-f");
    const prevButton = document.getElementById("button-b");
    const restartButton = document.createElement("button");

    restartButton.textContent = "Read again";
    restartButton.id = "button-r";
    restartButton.style.display = "none"; // Hide it initially
    document.querySelector("main").appendChild(restartButton); // Add to the DOM

    let currentIndex = 0; // Track current page index

    // Create message element
    const message = document.createElement("div");
    message.id = "restart-message";
    message.style.display = "none";
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.background = "rgba(0, 0, 0, 0.8)";
    message.style.color = "white";
    message.style.padding = "20px 40px";
    message.style.borderRadius = "12px";
    message.style.fontSize = "40px"; // Same size as h1
    message.style.fontWeight = "bold";
    message.style.textAlign = "center";
    message.style.width = "80%";
    message.style.maxWidth = "600px";
    message.style.opacity = "0";
    message.style.transition = "opacity 0.5s ease-in-out";
    document.body.appendChild(message);

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
            prevButton.style.display = "none"; // Hide Previous button
        } else {
            restartButton.style.display = "none"; // Hide restart button
        }
    }

    // Show/hide navigation buttons
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
            checkForRestart();
            checkForNavigationButtons();
        }
    });

    // Previous button (Previous Page)
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            showPage(currentIndex);
            checkForRestart();
            checkForNavigationButtons();
        }
    });

    // Restart button (Restart the book)
    restartButton.addEventListener("click", () => {
        message.textContent = "Reading again, huh? I'm glad you liked this,huge hug for you 🤗❤️";
        message.style.display = "block";
        setTimeout(() => {
            message.style.opacity = "1"; // Fade in
        }, 50);

        setTimeout(() => {
            message.style.opacity = "0"; // Fade out
            setTimeout(() => {
                message.style.display = "none"; // Hide after fading
                currentIndex = 0;
                showPage(currentIndex);
                checkForRestart();
                checkForNavigationButtons();
            }, 500);
        }, 2000);
    });

    // Show the first page initially
    showPage(currentIndex);
    checkForRestart();
    checkForNavigationButtons();
});
