
        // Get elements
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeSidebar = document.getElementById('closeSidebar');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        // Open mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            sidebar.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        });

        // Close mobile menu
        function closeMobileMenu() {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }

        closeSidebar.addEventListener('click', closeMobileMenu);
        overlay.addEventListener('click', closeMobileMenu);

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 1024) {
                closeMobileMenu();
            }
        });

        // Tab functionality for transactions
        const tabButtons = document.querySelectorAll('nav button');
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all tabs
                tabButtons.forEach(tab => {
                    tab.classList.remove('border-teal-500', 'text-teal-600');
                    tab.classList.add('border-transparent', 'text-gray-500');
                });
                
                // Add active class to clicked tab
                this.classList.remove('border-transparent', 'text-gray-500');
                this.classList.add('border-teal-500', 'text-teal-600');
            });
        });

        // Add click handlers for action buttons
        document.querySelectorAll('button').forEach(button => {
            if (button.textContent.includes('Add money') || 
                button.textContent.includes('Withdraw') || 
                button.textContent.includes('Link Bank')) {
                button.addEventListener('click', function() {
                    alert(`${this.textContent} functionality will be implemented soon!`);
                });
            }
        });
    