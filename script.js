

        // Function to scroll to a section smoothly
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Attach event listeners for menu items
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('home-link').addEventListener('click', function() {
                scrollToSection('home');
            });
            
            document.getElementById('aboutus-link').addEventListener('click', function() {
                scrollToSection('aboutus');
            });
            
            document.getElementById('services-link').addEventListener('click', function() {
                scrollToSection('services');
            });
            
            document.getElementById('portfolio-link').addEventListener('click', function() {
                scrollToSection('portfolio');
            });
            
            document.getElementById('contact-link').addEventListener('click', function() {
                scrollToSection('contact');
            });
        });


