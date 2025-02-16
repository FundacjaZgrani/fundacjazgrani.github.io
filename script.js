// Funkcja otwierająca obraz na pełnym ekranie
function openFullscreen(image) {
    let fullscreenOverlay = document.getElementById("fullscreen-overlay");
    let fullscreenImage = document.getElementById("fullscreen-image");

    fullscreenImage.src = image.src;
    fullscreenOverlay.style.display = "flex"; // Pokazuje pełnoekranowy overlay
}

// Funkcja zamykająca pełnoekranowy widok po kliknięciu
function closeFullscreen() {
    document.getElementById("fullscreen-overlay").style.display = "none";
}
