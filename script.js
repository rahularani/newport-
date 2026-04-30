document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const icon = mobileMenu.classList.contains('open') ? 'x' : 'menu';
            hamburger.innerHTML = `<i data-lucide="${icon}"></i>`;
            lucide.createIcons();
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                hamburger.innerHTML = `<i data-lucide="menu"></i>`;
                lucide.createIcons();
            });
        });
    }

    // 2. Vertical Navbar Scroll Effect & Active Link Highlight
    const sections = document.querySelectorAll('section, .hero-wrapper');
    const navLinksDesktop = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        // Active Link Highlight
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinksDesktop.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 3. Smooth Scrolling with Offset
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
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // 5. Number Counter Animation
    const counters = document.querySelectorAll('.counter');
    let hasCounted = false;

    const runCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / 50; // Speed of counting

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 40);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Trigger counters when hero section is visible
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasCounted) {
                runCounters();
                hasCounted = true;
            }
        }, { threshold: 0.5 });
        
        statsObserver.observe(heroStats);
    }

    // 6. Contact Form Submission (Mailto / Gmail trick)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            const toEmail = 'rahulramesharani@gmail.com';
            const subject = encodeURIComponent(`New Portfolio Inquiry: ${service} - ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService Interested In: ${service}\n\nMessage:\n${message}`);
            
            // Gmail compose URL format
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${subject}&body=${body}`;
            
            window.open(gmailUrl, '_blank');
        });
    }

    // 7. Copy Email Functionality (Global scope for onclick attribute)
    window.copyEmail = function() {
        const emailText = document.getElementById('email-address').innerText;
        navigator.clipboard.writeText(emailText).then(() => {
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    // 8. Timeline Animations
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timeline && timelineItems.length > 0) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.2 });
        
        timelineObserver.observe(timeline);
        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }

    // 9. Hero Portrait Parallax
    const heroWrapper = document.querySelector('.hero-wrapper');
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroWrapper && heroBg) {
        heroWrapper.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) * 0.03;
            const y = (window.innerHeight / 2 - e.pageY) * 0.03;
            
            // Apply slight rotation and translation based on mouse position
            heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
        });
        
        heroWrapper.addEventListener('mouseleave', () => {
            heroBg.style.transform = `translate(0px, 0px) scale(1)`;
            heroBg.style.transition = 'transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
        });
        
        heroWrapper.addEventListener('mouseenter', () => {
            heroBg.style.transition = 'transform 0.1s ease-out';
        });
    }
});
