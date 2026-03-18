document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // Initial check on load
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simulated terminal load effect (just for visual flair in the tech stack section)
    const terminalLines = document.querySelectorAll('#tech-stack .rounded div');
    
    const observeTerminal = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let delay = 0;
                // Add a small sequential fade to the terminal lines
                Array.from(terminalLines).slice(1).forEach((line, index) => {
                    line.style.opacity = '0';
                    line.style.transition = 'opacity 0.5s ease ' + delay + 's';
                    
                    setTimeout(() => {
                        line.style.opacity = '1';
                    }, 50);
                    
                    delay += 0.3; // 300ms between lines appearing
                });
                observeTerminal.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const terminalContainer = document.querySelector('#tech-stack .rounded');
    if (terminalContainer) {
        observeTerminal.observe(terminalContainer);
    }
});
