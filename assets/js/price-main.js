/* ========================================
   SUMMER KISSES - MAIN JAVASCRIPT
   ======================================== */

/*
    本檔案負責網站的主要互動功能：
    - 導航選單的展開收合
    - 響應式選單控制
    - 一般互動功能
    - 搭配 Bootstrap 5 的導航功能
*/

// ===== GLOBAL VARIABLES =====
let navbarToggler, navbarCollapse;

// ===== NAVIGATION MENU FUNCTIONS =====

/**
 * 初始化導航選單功能
 */
function initNavigation() {
    navbarToggler = document.querySelector('.navbar-toggler');
    navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (!navbarToggler || !navbarCollapse) {
        console.warn('找不到導航選單元素');
        return;
    }
    
    console.log('初始化導航選單');
    
    // 監聽Bootstrap選單狀態變化
    navbarCollapse.addEventListener('shown.bs.collapse', function() {
        document.body.classList.add('menu-open');
    });
    
    navbarCollapse.addEventListener('hidden.bs.collapse', function() {
        document.body.classList.remove('menu-open');
    });
    
    // 點擊選單外區域關閉選單
    document.addEventListener('click', function(event) {
        if (!navbarToggler.contains(event.target) && 
            !navbarCollapse.contains(event.target) && 
            navbarCollapse.classList.contains('show')) {
            
            // 使用Bootstrap的方法關閉選單
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
    
    // 點擊導航連結關閉選單
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 991) { // 只在行動版關閉選單
                // 使用Bootstrap的方法關閉選單
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
    
    // 點擊關閉按鈕關閉選單
    const menuCloseBtn = document.querySelector('.menu-close-btn');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', function() {
            // 使用Bootstrap的方法關閉選單
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    }
}

/**
 * 處理視窗大小變化
 */
function handleResize() {
    if (window.innerWidth > 991) {
        // 桌面版：確保選單是展開的
        navbarCollapse.classList.remove('show');
        navbarToggler.classList.add('collapsed');
        document.body.classList.remove('menu-open');
    }
}

// ===== UTILITY FUNCTIONS =====

/**
 * 平滑滾動到指定元素
 */
function smoothScrollTo(element, offset = 0) {
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPosition = elementPosition - headerHeight - offset;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

/**
 * 處理錨點連結
 */
function initAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                smoothScrollTo(targetElement);
            }
        });
    });
}

/**
 * 初始化回憶系列輪播
 */
function initMemoriesCarousel() {
    const carouselContainer = document.querySelector('.memories-carousel');
    const carouselImages = document.querySelectorAll('.memories-carousel-img');
    if (carouselImages.length < 2) return;
    
    let currentIndex = 0;
    let isTransitioning = false;
    
    // 動畫時間配置
    const slideDuration = 1200; // 增加滑動動畫時間，讓過渡更順暢
    const slideDelay = 100;     // 減少延遲時間，讓切換更快速
    const overlapTime = 800;    // 重疊時間，讓下一張照片提前開始滑入
    
    // 確保容器有正確的樣式
    if (carouselContainer) {
        carouselContainer.style.overflow = 'hidden';
        carouselContainer.style.position = 'relative';
        carouselContainer.style.backgroundColor = 'transparent'; // 確保背景透明
    }
    
    // 為每張圖片設置初始樣式
    carouselImages.forEach((img, index) => {
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.transition = `opacity ${slideDuration}ms ease-out, transform ${slideDuration}ms ease-out`; // 改為ease-out讓滑動更自然
        img.style.opacity = '0';
        img.style.transform = 'translateX(0%)'; // 改為右側準備
        
        // 第一張圖片顯示在中央
        if (index === 0) {
            img.style.opacity = '1';
            img.style.transform = 'translateX(0)';
            img.classList.add('active');
        }
    });
    
    function showNextImage() {
        if (isTransitioning) return; // 防止重複觸發
        
        const currentImage = carouselImages[currentIndex];
        const nextIndex = (currentIndex + 1) % carouselImages.length;
        const nextImage = carouselImages[nextIndex];
        
        isTransitioning = true;
        
        // 準備下一張圖片（從右側準備）
        nextImage.style.transform = 'translateX(250%)';
        nextImage.style.opacity = '1'; // 確保下一張圖片完全可見
        
        // 延遲一小段時間後開始滑動
        setTimeout(() => {
            // 下一張圖片滑入到中央（先移動）
            nextImage.style.transform = 'translateX(0)';
            
            // 短暫延遲後，當前圖片開始向左滑出
            setTimeout(() => {
                currentImage.style.transform = 'translateX(-450%)';
                currentImage.style.opacity = '0';
            }, 50); // 短暫延遲，確保下一張圖片已經開始顯示
            
            // 更新索引和類別
            currentImage.classList.remove('active');
            nextImage.classList.add('active');
            currentIndex = nextIndex;
            
            // 等待動畫完成後重置狀態
            setTimeout(() => {
                // 隱藏所有非活動圖片，並將它們移到更遠的位置
                carouselImages.forEach((img, index) => {
                    if (index !== currentIndex) {
                        img.style.opacity = '0';
                        img.style.transform = 'translateX(0%)'; // 改為右側準備
                    }
                });
                
                isTransitioning = false;
            }, slideDuration);
        }, slideDelay);
    }
    
    // 調整切換間隔，確保動畫完成後有適當的停留時間
    const totalAnimationTime = slideDelay + slideDuration;
    const stayTime = 8000; // 圖片停留時間改為5秒 (毫秒)
    const switchInterval = totalAnimationTime + stayTime;
    
    // 每間隔切換一次圖片
    setInterval(showNextImage, switchInterval);
}

// ===== INITIALIZATION =====

/**
 * 主要初始化函數
 */
function init() {
    console.log('初始化主要功能');
    
    // 初始化導航選單
    initNavigation();
    
    // 初始化錨點連結
    initAnchorLinks();
    
    // 初始化回憶系列輪播
    initMemoriesCarousel();
    
    // 綁定視窗大小變化事件
    window.addEventListener('resize', handleResize);
    
    console.log('主要功能初始化完成');
}

// ===== EVENT LISTENERS =====

// 當 DOM 載入完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 載入完成，開始初始化主要功能');
    init();
});

// ===== EXPORT FOR MODULE SYSTEMS =====
// 如果使用模組系統，可以匯出函數
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init,
        initNavigation,
        smoothScrollTo,
        initMemoriesCarousel
    };
} 