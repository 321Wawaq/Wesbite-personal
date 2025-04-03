document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const container = document.getElementById('container');
    const menuButton = document.getElementById('menu');
    const links = document.querySelectorAll('a[href^="#"]');

    // Function to handle the scroll
    function handleScroll() {
        container.classList.remove('menuopen');
        header.classList.toggle('sticky', window.scrollY >= 100);
    }

    // Function to handle menu button click
    function handleMenuButtonClick() {
        header.classList.remove('sticky');
        container.classList.toggle('menuopen');
    }

    // Function to handle anchor links click
    function handleLinkClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Function to close the menu when clicking outside and show the sticky menu
    function handleCloseOutside(event) {
        if (!menuButton.contains(event.target)) {
            // Check if the click was outside the menu button
            container.classList.remove('menuopen');
            header.classList.add('sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);
    menuButton.addEventListener('click', handleMenuButtonClick);
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    // Listen for clicks anywhere in document
    document.addEventListener('click', handleCloseOutside);
});

document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("languageButton");
    const languageDropdown = document.getElementById("languageDropdown");

    // Toggle dropdown saat tombol diklik
    languageButton.addEventListener("click", function () {
        const isOpen = languageDropdown.style.display === "block";
        languageDropdown.style.display = isOpen ? "none" : "block";
        languageButton.innerHTML = isOpen ? "🌐 English ▲" : "🌐 English ▼";
    });

    // Pilih bahasa dan ubah teks tombol
    languageDropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const selectedLang = event.target.innerHTML;
            languageButton.innerHTML = `🌐 ${selectedLang} ▲`;
            languageDropdown.style.display = "none";
        }
    });

    // Tutup dropdown jika klik di luar
    document.addEventListener("click", function (event) {
        if (!languageButton.contains(event.target) && !languageDropdown.contains(event.target)) {
            languageDropdown.style.display = "none";
            languageButton.innerHTML = "🌐 English ▲";
        }
    });
});
