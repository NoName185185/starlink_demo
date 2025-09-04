        // Анимация спутников
        function createSatellites() {
            const animationContainer = document.querySelector('.satellite-animation');
            for (let i = 0; i < 5; i++) {
                const satellite = document.createElement('div');
                satellite.className = 'satellite';
                satellite.style.cssText = `
                    top: ${Math.random() * 100}%;
                    left: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * -20}s;
                    animation-duration: ${15 + Math.random() * 15}s;
                `;
                animationContainer.appendChild(satellite);
            }
        }
        
        // FAQ toggle
        function toggleFaq(element) {
            const answer = element.nextElementSibling;
            const icon = element.querySelector('i');
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                answer.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        }
        
        // Плавная прокрутка для навигации
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Инициализация при загрузке страницы
        window.addEventListener('DOMContentLoaded', (event) => {
            createSatellites();
        });
