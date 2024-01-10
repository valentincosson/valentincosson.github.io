document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling when clicking on a navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active', 'clicked'));
            this.classList.add('active', 'clicked');

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Highlighting the active link based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY;
        document.querySelectorAll('.scrollspy').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(nav => {
                    nav.classList.remove('active');
                    if (nav.getAttribute('href') === '#' + sectionId) {
                        nav.classList.add('active');
                    }
                });
            }
        });
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('clicked'));
    });
});
