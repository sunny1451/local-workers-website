document.addEventListener('DOMContentLoaded', () => {
    console.log('Contact page loaded successfully!');

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Hover effect for contact boxes
    const boxes = document.querySelectorAll('.contact-box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transform = 'translateY(-10px)';
            box.style.transition = 'transform 0.3s ease';
        });

        box.addEventListener('mouseout', () => {
            box.style.transform = 'translateY(0)';
        });
    });
});
