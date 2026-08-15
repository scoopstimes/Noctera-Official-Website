document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const iconOpen = menuToggle.querySelector('.icon-open');
    const iconClose = menuToggle.querySelector('.icon-close');

    function toggleMenu() {
        const isOpen = navMenu.classList.toggle('active');
        
        if (isOpen) {
            iconOpen.style.display = 'none';
            iconClose.style.display = 'inline-block';
            document.documentElement.style.overflow = 'hidden'; 
        } else {
            iconOpen.style.display = 'inline-block';
            iconClose.style.display = 'none';
            document.documentElement.style.overflow = 'auto'; 
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    
    document.querySelectorAll('.nav-link, .mobile-cta-wrapper a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
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
