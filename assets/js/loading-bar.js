// Loading Bar Functionality
class LoadingBar {
    constructor() {
        this.loadingBar = document.querySelector('.loading-bar');
        this.init();
    }

    init() {
        if (!this.loadingBar) return;
        
        // Show loading bar when page starts loading
        this.show();
        
        // Hide loading bar when page is fully loaded
        window.addEventListener('load', () => {
            this.complete();
        });
        
        // Show loading bar on navigation
        this.handleNavigation();
    }

    show() {
        if (!this.loadingBar) return;
        
        this.loadingBar.classList.add('active', 'loading');
    }

    complete() {
        if (!this.loadingBar) return;
        
        this.loadingBar.classList.remove('loading');
        this.loadingBar.classList.add('complete');
        
        // Hide loading bar after completion
        setTimeout(() => {
            this.hide();
        }, 1000);
    }

    hide() {
        if (!this.loadingBar) return;
        
        this.loadingBar.classList.remove('active', 'complete', 'loading');
    }

    handleNavigation() {
        // Show loading bar on page navigation
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.href && !link.href.startsWith('javascript:') && !link.href.startsWith('#')) {
                this.show();
            }
        });

        // Show loading bar on form submission
        document.addEventListener('submit', () => {
            this.show();
        });
    }
}

// Initialize loading bar when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LoadingBar();
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LoadingBar;
}
