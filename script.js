const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('aktif');
    
    console.log("Menüye tıklandı, sınıf değiştirildi.");
});

document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('aktif');
    }
});

const menuLinkleri = document.querySelectorAll('nav a');

menuLinkleri.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('aktif');
    });
});