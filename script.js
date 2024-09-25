// Toggle "Back to Top" button visibility
window.onscroll = function() {
    const backToTopBtn = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Scroll to top
document.getElementById("backToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
