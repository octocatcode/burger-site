window.addEventListener('DOMContentLoaded', function () {
    let welcomeOverlay = document.getElementById('welcome-overlay');
    let closeButton = document.getElementById('close-button');


    closeButton.addEventListener('click', function () {
        welcomeOverlay.style.display = 'none';
    });
});