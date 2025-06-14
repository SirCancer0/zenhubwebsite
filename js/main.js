// Loading screen functionality
        window.addEventListener('load', function() {
            setTimeout(() => {
                const loadingScreen = document.getElementById('loadingScreen');
                loadingScreen.classList.add('hidden');
                
                // Remove loading screen from DOM after transition
                setTimeout(() => {
                    loadingScreen.remove();
                }, 1000);
            }, 5000); // Show loading screen for 5 seconds
        });

        // Add smooth scroll enhancement
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add intersection observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.content-section').forEach(section => {
            section.style.transform = 'translateY(30px)';
            section.style.opacity = '0';
            section.style.transition = 'all 0.6s ease-out';
            observer.observe(section);
        });

        // Add mouse movement parallax effect
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const background = document.querySelector('.background::before');
            if (background) {
                background.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
            }
        });
