document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');

    if (!menu) {
        console.error("Menu element not found.");
        return;
    }

    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-open');

        // Update burger menu position
        if (menu.classList.contains('menu-open')) {
            burgerMenu.style.position = 'fixed';
            burgerMenu.style.top = '2rem'; // Adjust as needed
            burgerMenu.style.right = '2rem'; // Adjust as needed
        } else {
            // Reset burger menu position when menu is closed
            burgerMenu.removeAttribute('style');
        }
    });

    // Ticker tape functionality
    const tickerText = document.getElementById('ticker-text');
    if (!tickerText) {
        console.error("Ticker text element not found.");
        return;
    }

    const word = 'Projects ';
    const screenWidth = window.innerWidth;
    const numRepetitions = Math.ceil(screenWidth / (word.length * 1)); // Adjust the multiplier as needed
    const repeatedText = word.repeat(numRepetitions);

    tickerText.textContent = repeatedText;
});
