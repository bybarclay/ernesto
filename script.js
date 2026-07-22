

        document.addEventListener('DOMContentLoaded', function() {
            // Toggling Skill Tabs
            const tabs = document.querySelectorAll('[data-target]');
            const tabContent = document.querySelectorAll('[data-content]');
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const target = document.querySelector(tab.dataset.target);
                    tabContent.forEach(tabContents => {
                        tabContents.classList.remove('skills-active');
                    })
                    target.classList.add('skills-active');
                    tabs.forEach(tab => {
                        tab.classList.remove('skills-active');
                    })
                    tab.classList.add('skills-active');
                })
            })

            //Mix it up Sorting
            let mixerPortfolio = mixitup('.work-container', {
                selectors: {
                    target: '.work-card'
                },
                animation: {
                    duration: 300
                }
            });

            // Active link changing
            const linkWork = document.querySelectorAll('.work-item');
            function activeWork() {
                linkWork.forEach(l => l.classList.remove('active-work'))
                this.classList.add('active-work')
            }
            linkWork.forEach(l => l.addEventListener('click', activeWork));

            //Portfolio Popup
            document.addEventListener('click', (e) => {
                const workButton = e.target.closest('.work-button');
                const popupClose = e.target.closest('.portfolio-popup-close');
                if (workButton) {
                    e.preventDefault();
                    togglePortfolioPopup();
                    portfolioItemDetails(workButton.parentElement);
                }
                if (popupClose) {
                    e.preventDefault();
                    togglePortfolioPopup();
                }
            })

            function togglePortfolioPopup() {
                document.querySelector('.portfolio-popup').classList.toggle('open');
            }

            function portfolioItemDetails(portfolioItem) {
                document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.work-img').src;
                document.querySelector('.portfolio-popup-subtitle span').innerHTML = portfolioItem.querySelector('.work-title').innerHTML;
                document.querySelector('.portfolio-popup-body').innerHTML = portfolioItem.querySelector('.portfolio-item-details').innerHTML;
            }

           


 // Services Popup - Fixed Version
const serviceButtons = document.querySelectorAll('.services-button');
const serviceModals = document.querySelectorAll('.services-modal');
const serviceCloseButtons = document.querySelectorAll('.services-modal-close');

serviceButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Close any open modals first
        serviceModals.forEach(modal => {
            modal.classList.remove('active-modal');
        });
        // Open the corresponding modal
        serviceModals[index].classList.add('active-modal');
    });
});

serviceCloseButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.closest('.services-modal').classList.remove('active-modal');
    });
});

// Close modal when clicking outside the content
serviceModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active-modal');
        }
    });
});






// Video Modal

            const playButton = document.getElementById('play-video-btn');
            const videoModal = document.getElementById('video-modal');
            const closeModalButton = document.getElementById('video-modal-close');
            const youtubeIframe = document.getElementById('youtube-video');
            const videoSrc = "https://www.youtube.com/embed/w2fBzH71BWw";

            if (playButton) {
                playButton.addEventListener('click', () => {
                    youtubeIframe.src = videoSrc + "?autoplay=1";
                    videoModal.style.display = 'flex';
                });
            }

            function closeVideoModal() {
                if(videoModal) videoModal.style.display = 'none';
                if(youtubeIframe) youtubeIframe.src = "";
            }

            if (closeModalButton) {
                closeModalButton.addEventListener('click', closeVideoModal);
            }
            if (videoModal) {
                videoModal.addEventListener('click', (e) => {
                    if (e.target === videoModal) {
                        closeVideoModal();
                    }
                });
            }







            // Swiper Services
            let servicesSwiper = new Swiper(".services-container.swiper", {
                spaceBetween: 24,
                loop: false,
                grabCursor: true,
                scrollbar: {
                    el: ".services-section-scrollbar",
                    draggable: true,
                },
                breakpoints: {
                    576: { slidesPerView: 2, },
                    768: { slidesPerView: 2, spaceBetween: 48, },
                    992: { slidesPerView: 3, spaceBetween: 24, }
                },
            });

            //Swiper Testimonial
            let testimonialsSwiper = new Swiper(".testimonials-container", {
                spaceBetween: 24,
                loop: true,
                grabCursor: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                breakpoints: {
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                },
            });

            // Input Animation
            const inputs = document.querySelectorAll('.input');
            function focusFunc() {
                let parent = this.parentNode;
                parent.classList.add('focus');
            }
            function blurFunc() {
                let parent = this.parentNode;
                if (this.value == "") {
                    parent.classList.remove('focus');
                }
            }
            inputs.forEach((input) => {
                input.addEventListener('focus', focusFunc);
                input.addEventListener('blur', blurFunc);
            })

            // Scroll Section Active Link
            const sections = document.querySelectorAll('section[id]');
            window.addEventListener('scroll', navHighlighter);
            function navHighlighter() {
                let scrollY = window.pageYOffset;
                sections.forEach(current => {
                    const sectionHeight = current.offsetHeight;
                    const sectionTop = current.offsetTop - 50;
                    const sectionId = current.getAttribute('id');
                    const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
                    if (navLink) {
                        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                            navLink.classList.add('active-link');
                        } else {
                            navLink.classList.remove('active-link');
                        }
                    }
                })
            }








// FAQ Accordion
            const faqHeaders = document.querySelectorAll('.faq-header');
            faqHeaders.forEach(header => {
                header.addEventListener('click', () => {
                    const openItem = document.querySelector('.faq-item.faq-open');
                    const clickedItem = header.parentElement;

                    if (openItem && openItem !== clickedItem) {
                        openItem.classList.remove('faq-open');
                    }
                    
                    clickedItem.classList.toggle('faq-open');
                });
            });













            // Activating Sidebar
            const navMenu = document.getElementById('sidebar');
            const navToggle = document.getElementById('nav-toggle');
            const navClose = document.getElementById('nav-close');
            if (navToggle) {
                navToggle.addEventListener('click', () => {
                    navMenu.classList.add('show-sidebar');
                })
            }
            if (navClose) {
                navClose.addEventListener('click', () => {
                    navMenu.classList.remove('show-sidebar');
                })
            }

            // Modified: Keep the structure but remove card limiting
const exploreProjectsBtn = document.getElementById('exploreProjectsBtn');
if (exploreProjectsBtn) {
    const workContainer = document.querySelector('.work-container');

    function updateButtonVisibility() {
        const allCards = workContainer.querySelectorAll('.work-card');
        const visibleFilteredCards = Array.from(allCards).filter(card => {
            const style = window.getComputedStyle(card);
            return style.display !== 'none';
        });
        
        // Always show the button, but you can add logic here if needed
        // For example, hide button if no cards are visible
        if (visibleFilteredCards.length === 0) {
            exploreProjectsBtn.style.display = 'none';
        } else {
            exploreProjectsBtn.style.display = 'inline-flex';
        }
    }

    exploreProjectsBtn.addEventListener('click', () => {
        window.open('/projects', '_blank');
    });
    
    // Update button when filtering (keeps the filter integration)
    const filterItems = document.querySelectorAll('.work-item');
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            setTimeout(updateButtonVisibility, 350); // Wait for mixitup animation
        });
    });
    
    // Initial setup
    updateButtonVisibility();
}
        });
