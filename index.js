document.addEventListener('DOMContentLoaded', function() {
    //responsiveness of web-pages
    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const exitBtn = document.getElementById('exit-btn');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuToggle.classList.toggle('hidden');
    });
    
    exitBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.classList.toggle('hidden');
    });
    // click login button to open login page
    function openLoginPage() {
        window.location.href = 'login.html';
    }
      
    document.getElementById('loginButton').addEventListener('click', openLoginPage);
    
    // click explore button to open all items page
    function clickexplorebtn() {
        window.location.href = 'all.html';
    }
});