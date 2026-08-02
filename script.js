document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Effect Header (Glass Effect saat di-scroll)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Hamburger Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const iconOpen = menuToggle.querySelector('.icon-open');
    const iconClose = menuToggle.querySelector('.icon-close');

    function toggleMenu() {
        const isOpen = navMenu.classList.toggle('active');
        
        if (isOpen) {
            iconOpen.style.display = 'none';
            iconClose.style.display = 'inline-block';
            document.documentElement.style.overflow = 'hidden'; // Kunci scroll halaman belakang
        } else {
            iconOpen.style.display = 'inline-block';
            iconClose.style.display = 'none';
            document.documentElement.style.overflow = 'auto'; // Buka scroll halaman
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Otomatis Tutup Menu saat Salah Satu Navigasi Diklik
    document.querySelectorAll('.nav-link, .mobile-cta-wrapper a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // 3. Smooth Scroll Navigation saat Menu Diklik
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
