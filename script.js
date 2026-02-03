// --- 1. MEVCUT HAMBURGER MENÜ KODLARI ---
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


// --- 2. KARANLIK MOD AYARLARI ---
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


// --- 3. DİL DEĞİŞTİRME (FULL ÇEVİRİ) ---
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'tr'; 

const translations = {
    tr: {
        // Navigasyon
        nav: ["Hakkımda", "Projeler", "Deneyim", "Yetkinlikler", "İletişim"],
        
        // Hero Bölümü
        heroTitle: "Merhaba, Ben Özlem 👋",
        heroDesc: "İnternet ve Ağ Teknolojileri öğrencisiyim. <br> Siber Güvenlik, Ağ Yönetimi ve Web Teknolojileri üzerine kendimi geliştiriyorum.",
        
        // Bölüm Başlıkları
        titles: ["Projelerim & Çalışmalarım", "İş & Staj Deneyimi", "Yetkinlikler & Sertifikalar", "İLETİŞİM"],
        
        // Projeler
        projects: {
            p1_title: "Veri Tabanı Projesi",
            p1_desc: "SQL kullanarak geliştirdiğim, stok takibi ve veri analizi yapabilen yönetim sistemi.",
            p2_title: "Ağ & Güvenlik",
            p2_desc: "Sunucu yönetimi, penetrasyon testleri ve ağ güvenliği üzerine uygulamalı çalışmalar.",
            p3_title: "Kurumsal Ağ Tasarımı",
            p3_desc: "Cisco Packet Tracer ile sanal şirket ağ topolojisi, VLAN ve WLAN yapılandırması."
        },

        // Deneyimler 
        experience: {
            date1: "Ocak 2024 - Mayıs 2024",
            list1: "<li>Karmaşık ağ sorunlarının analizi ve çözümü.</li><li>Ağ güvenliği ve VPN yapılandırmaları.</li><li>Switch, Modem, Router cihazlarının yapılandırılması.</li>",
            
            date2: "Ağustos 2023 - Ocak 2024",
            list2: "<li>DNS yapılandırmaları ve temel ağ desteği.</li><li>Müşteri taleplerinin karşılanması ve teknik yönlendirme.</li>",
            
            date3: "Mart 2023 - Haziran 2023",
            job3: "Stajyer - Web Yönetimi",
            list3: "<li>WordPress tabanlı web sitesi tasarımı ve yönetimi.</li><li>Ofis programlarının etkin kullanımı.</li>",
            
            date4: "Kasım 2022 - Aralık 2022",
            list4: "<li>Uluslararası çalışma ortamında teknik destek deneyimi.</li><li>Ağ yapılandırmaları ve yazılım süreçlerine destek.</li>",
            
            date5: "Eylül 2022 - Mart 2023",
            job5: "Stajyer - İdari İşler",
            list5: "<li>İnsan Kaynakları ve operasyonel süreçlere destek.</li>"
        },

        // İletişim ve Footer
        contact: {
            desc: "Sorularınız ve iş birliği fırsatları için benimle iletişime geçebilirsiniz.",
            lbl_address: "📍 Adres:",
            lbl_email: "📧 E-posta:",
            lbl_phone: "📞 Telefon:",
            btn_linkedin: "LinkedIn Profilim",
            footer: "&copy; 2026 Özlem Çetin. Tüm Hakları Saklıdır."
        }
    },
    en: {
        // Navigation
        nav: ["About Me", "Projects", "Experience", "Skills", "Contact"],
        
        // Hero Section
        heroTitle: "Hello, I'm Özlem 👋",
        heroDesc: "I am an Internet and Network Technologies student. <br> I am improving myself on Cyber Security, Network Management, and Web Technologies.",
        
        // Section Titles
        titles: ["Projects & Works", "Work & Internship Experience", "Skills & Certificates", "CONTACT"],

        // Projects
        projects: {
            p1_title: "Database Project",
            p1_desc: "Stock tracking and data analysis management system developed using SQL.",
            p2_title: "Network & Security",
            p2_desc: "Applied studies on server management, penetration testing, and network security.",
            p3_title: "Corporate Network Design",
            p3_desc: "Virtual company network topology, VLAN, and WLAN configuration using Cisco Packet Tracer."
        },

        // Experience
        experience: {
            date1: "January 2024 - May 2024",
            list1: "<li>Analysis and resolution of complex network issues.</li><li>Network security and VPN configurations.</li><li>Configuration of Switches, Modems, and Routers.</li>",
            
            date2: "August 2023 - January 2024",
            list2: "<li>DNS configurations and basic network support.</li><li>Handling customer requests and technical guidance.</li>",
            
            date3: "March 2023 - June 2023",
            job3: "Intern - Web Management",
            list3: "<li>WordPress-based website design and management.</li><li>Effective use of MS Office programs.</li>",
            
            date4: "November 2022 - December 2022",
            list4: "<li>Technical support experience in an international work environment.</li><li>Support for network configurations and software processes.</li>",
            
            date5: "September 2022 - March 2023",
            job5: "Intern - Administrative Affairs",
            list5: "<li>Support for Human Resources and operational processes.</li>"
        },

        // Contact & Footer
        contact: {
            desc: "You can contact me for your questions and collaboration opportunities.",
            lbl_address: "📍 Address:",
            lbl_email: "📧 Email:",
            lbl_phone: "📞 Phone:",
            btn_linkedin: "My LinkedIn Profile",
            footer: "&copy; 2026 Özlem Çetin. All Rights Reserved."
        }
    }
};

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    
    const langData = translations[currentLang];

    // 1. Genel Metinler (Nav, Hero, Başlıklar)
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

    // 2. Projeler Çevirisi
    document.getElementById('proj-1-title').textContent = langData.projects.p1_title;
    document.getElementById('proj-1-desc').textContent = langData.projects.p1_desc;
    document.getElementById('proj-2-title').textContent = langData.projects.p2_title;
    document.getElementById('proj-2-desc').textContent = langData.projects.p2_desc;
    document.getElementById('proj-3-title').textContent = langData.projects.p3_title;
    document.getElementById('proj-3-desc').textContent = langData.projects.p3_desc;

    // 3. Deneyimler Çevirisi
    document.getElementById('date-1').textContent = langData.experience.date1;
    document.getElementById('exp-1-list').innerHTML = langData.experience.list1;
    
    document.getElementById('date-2').textContent = langData.experience.date2;
    document.getElementById('exp-2-list').innerHTML = langData.experience.list2;

    document.getElementById('date-3').textContent = langData.experience.date3;
    document.getElementById('job-3-title').textContent = langData.experience.job3;
    document.getElementById('exp-3-list').innerHTML = langData.experience.list3;

    document.getElementById('date-4').textContent = langData.experience.date4;
    document.getElementById('exp-4-list').innerHTML = langData.experience.list4;

    document.getElementById('date-5').textContent = langData.experience.date5;
    document.getElementById('job-5-title').textContent = langData.experience.job5;
    document.getElementById('exp-5-list').innerHTML = langData.experience.list5;

    // 4. İletişim ve Footer Çevirisi
    document.getElementById('contact-desc').textContent = langData.contact.desc;
    document.getElementById('label-address').textContent = langData.contact.lbl_address;
    document.getElementById('label-email').textContent = langData.contact.lbl_email;
    document.getElementById('label-phone').textContent = langData.contact.lbl_phone;
    document.getElementById('btn-linkedin').textContent = langData.contact.btn_linkedin;
    document.getElementById('footer-text').innerHTML = langData.contact.footer;
});