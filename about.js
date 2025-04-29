document.addEventListener('DOMContentLoaded', () => {
    console.log('About Us page loaded successfully!');

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
});
