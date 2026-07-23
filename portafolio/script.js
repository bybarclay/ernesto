
// Back to Top Functionality
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Portfolio Popup Functionality - FIXED CODE
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio Popup
    document.addEventListener('click', (e) => {
        const workButton = e.target.closest('.work-button');
        const popupClose = e.target.closest('.portfolio-popup-close');
        const popup = document.querySelector('.portfolio-popup');
        
        if (workButton) {
            e.preventDefault();
            togglePortfolioPopup();
            portfolioItemDetails(workButton.closest('.work-card'));
        }
        if (popupClose || (popup.classList.contains('open') && e.target === popup)) {
            e.preventDefault();
            togglePortfolioPopup();
        }
    })

    function togglePortfolioPopup() {
        document.querySelector('.portfolio-popup').classList.toggle('open');
    }

    function portfolioItemDetails(portfolioItem) {
        const imgSrc = portfolioItem.querySelector('.work-img').src;
        const detailsContent = portfolioItem.querySelector('.portfolio-item-details').innerHTML;
        
        document.querySelector('.pp-thumbnail img').src = imgSrc;
        document.querySelector('.portfolio-popup-body').innerHTML = detailsContent;
    }
});
