const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('aktif');
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


const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});


const langToggle = document.getElementById('lang-toggle');
let currentLang = 'tr'; 

const translations = {
    tr: {
        nav: ["Hakkımda", "Projeler", "Deneyim", "Yetkinlikler", "İletişim"],
        heroTitle: "Merhaba, Ben Özlem 👋",
        heroDesc: "İnternet ve Ağ Teknolojileri öğrencisiyim. <br> Siber Güvenlik, Ağ Yönetimi ve Web Teknolojileri üzerine kendimi geliştiriyorum.",
        titles: ["Projelerim & Çalışmalarım", "İş & Staj Deneyimi", "Yetkinlikler & Sertifikalar", "İletişim"]
    },
    en: {
        nav: ["About Me", "Projects", "Experience", "Skills", "Contact"],
        heroTitle: "Hello, I'm Özlem 👋",
        heroDesc: "I am an Internet and Network Technologies student. <br> I am improving myself on Cyber Security, Network Management, and Web Technologies.",
        titles: ["Projects & Works", "Work & Internship Experience", "Skills & Certificates", "Contact"]
    }
};

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR'; 

    const langData = translations[currentLang];

    const navItems = document.querySelectorAll('#nav-links a');
    navItems.forEach((item, index) => {
        if(langData.nav[index]) item.textContent = langData.nav[index];
    });

    document.querySelector('.hero h1').textContent = langData.heroTitle;
    document.querySelector('.hero p').innerHTML = langData.heroDesc;

    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach((title, index) => {
        if(langData.titles[index]) title.textContent = langData.titles[index];
    });
});