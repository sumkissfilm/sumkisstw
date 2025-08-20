# Summer Kisses 影像工作室官方網站

![Summer Kisses Logo](images/header/summerkiss-logo.png)

## 📖 專案介紹

Summer Kisses 是一間專注於製作愛情故事的影像工作室，致力於捕捉最真實、最動人的情感瞬間。這個官方網站展示了我們的作品集、服務內容，並提供客戶預約諮詢的管道。

**🌐 官方網站：** [www.sumkiss.tw](https://www.sumkiss.tw)

### 🌟 網站特色

- **響應式設計**：完美適配桌面、平板和手機裝置
- **現代化 UI/UX**：簡潔優雅的設計風格
- **流暢動畫效果**：豐富的互動體驗
- **作品展示**：整合 YouTube 影片展示
- **社群媒體整合**：連結 Instagram、YouTube、Facebook
- **載入動畫**：專業的頁面載入體驗

## 🚀 功能特色

### 主要功能
- **導航選單**：響應式漢堡選單，支援桌面和移動裝置
- **滾動效果**：頁首背景色動態變化
- **作品展示**：YouTube 影片嵌入展示
- **社群連結**：一鍵連結各社群平台
- **載入動畫**：進度條式載入效果
- **平滑滾動**：錨點連結平滑滾動

### 技術特色
- **Bootstrap 5**：現代化 CSS 框架
- **Font Awesome 6.5.1**：豐富的圖示庫
- **Intersection Observer**：效能優化的動畫觸發
- **CSS Grid & Flexbox**：現代化布局技術
- **ES6+ JavaScript**：現代化 JavaScript 語法
- **Schema.org 標記**：完整的結構化數據實作
- **SEO 優化**：Meta 標籤、GA4 追蹤、語義化 HTML

## 🛠️ 技術架構

### 前端技術
- **HTML5**：語義化標籤結構
- **CSS3**：現代化樣式設計
- **JavaScript (ES6+)**：互動功能實現
- **Bootstrap 5.3.3**：響應式框架
- **Font Awesome 6.5.1**：圖示庫

### 外部服務
- **YouTube Embed API**：影片嵌入
- **Instagram Embed**：社群媒體整合
- **Google Fonts**：網頁字體 (ABeeZee)

### SEO 與結構化數據
- **Schema.org 標記**：完整的結構化數據實作
  - WebSite 類型：網站基本資訊
  - Organization 類型：工作室詳細資訊
  - WebPage 類型：各頁面結構化數據
  - 聯絡資訊、地址、社群媒體連結等
- **Google Analytics**：GA4 追蹤碼整合
- **Meta 標籤**：完整的 SEO Meta 資訊

## 📁 檔案結構

```
sumkisstw/
├── assets/
│   ├── css/
│   │   ├── home-style.css              # 首頁主要樣式
│   │   ├── home-header-navigation.css  # 頁首導航樣式
│   │   ├── home-footer.css             # 頁尾樣式
│   │   ├── about-style.css             # 關於我們頁面樣式
│   │   ├── about.css                   # 關於我們詳細樣式
│   │   ├── lovestories-style.css       # 愛情故事頁面樣式
│   │   ├── lovestories.css             # 愛情故事詳細樣式
│   │   ├── price-style.css             # 價格方案頁面樣式
│   │   ├── price.css                   # 價格方案詳細樣式
│   │   ├── price-card.css              # 價格卡片樣式
│   │   ├── faq-style.css               # FAQ頁面樣式
│   │   ├── faq-chat.css                # FAQ聊天樣式
│   │   └── stories.css                 # 故事展示樣式
│   ├── js/
│   │   ├── home-main.js                # 首頁主要功能
│   │   ├── home-scroll.js              # 首頁滾動效果
│   │   ├── home-footer.js              # 首頁頁尾功能
│   │   ├── about-main.js               # 關於我們主要功能
│   │   ├── about-scroll.js             # 關於我們滾動效果
│   │   ├── ls-scroll.js               # 愛情故事滾動效果
│   │   ├── price-main.js               # 價格方案主要功能
│   │   ├── price-carousel.js           # 價格輪播功能
│   │   ├── price-script.js             # 價格方案腳本
│   │   ├── price-scroll.js             # 價格方案滾動效果
│   │   ├── price-footer.js             # 價格方案頁尾功能
│   │   ├── faq-main.js                 # FAQ主要功能
│   │   ├── faq-scroll.js               # FAQ滾動效果
│   │   └── faq-footer.js               # FAQ頁尾功能
│   └── hero/                           # 主視覺圖片資源
├── images/
│   ├── body002/                        # 作品圖片
│   ├── favicon/                        # 網站圖標
│   ├── header/                         # 頁首圖片
│   ├── hero/                           # 主視覺圖片
│   └── v1/                             # 版本1圖片
├── index.html                          # 首頁
├── about.html                          # 關於我們頁面
├── lovestories.html                    # 愛情故事頁面
├── price.html                          # 價格方案頁面
├── faq.html                           # FAQ頁面
└── README.md                           # 專案說明文件
```

## 🚀 快速開始

### 前置需求
- 現代化瀏覽器（Chrome、Firefox、Safari、Edge）
- 本地伺服器（可選，用於開發）

### 安裝步驟

1. **克隆專案**
   ```bash
   git clone [repository-url]
   cd sumkisstw
   ```

2. **開啟專案**
   - 直接開啟 `index.html` 檔案
   - 或使用本地伺服器：
     ```bash
     # 使用 Python
     python -m http.server 8000
     
     # 使用 Node.js
     npx serve .
     
     # 使用 PHP
     php -S localhost:8000
     ```

3. **瀏覽網站**
   - 開啟瀏覽器前往 `http://localhost:8000`

## 📱 響應式設計

### 斷點設定
- **桌面版**：992px 以上
- **平板版**：768px - 991px
- **手機版**：576px - 767px
- **小手機版**：400px - 575px

### 適配內容
- 導航選單響應式切換
- 圖片和影片自適應大小
- 字體大小動態調整
- 間距和布局優化

## 🎨 設計系統

### 色彩方案
- **主要色**：#f7bc51 (溫暖橙色)
- **背景色**：#ffffff (純白)
- **文字色**：#333333 (深灰)
- **次要色**：#666666 (中灰)

### 字體系統
- **主要字體**：ABeeZee (Google Fonts)
- **備用字體**：系統預設字體

### 間距系統
- **基礎間距**：1rem (16px)
- **區塊間距**：4rem (64px)
- **元素間距**：2rem (32px)

## 🔧 自訂設定

### 修改影片內容
在各頁面中找到 YouTube 嵌入區塊並修改連結：

```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        title="影片標題">
</iframe>
```

### 修改社群媒體連結
在導航和頁腳區塊中修改社群媒體連結：

```html
<a href="YOUR_SOCIAL_MEDIA_URL" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

### 修改載入動畫
在 `index.html` 的 `<style>` 區塊中修改載入動畫樣式。

## 📊 效能優化

### 已實作的優化
- **圖片優化**：使用適當的圖片格式和大小
- **CSS 模組化**：分頁面樣式檔案，按需載入
- **JavaScript 模組化**：分功能模組，提升維護性
- **載入優化**：非同步載入外部資源

### 建議優化
- 使用 WebP 圖片格式
- 實作圖片懶載入
- 啟用 Gzip 壓縮
- 使用 CDN 加速

## 🌐 瀏覽器支援

### 支援的瀏覽器
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 功能支援
- CSS Grid 和 Flexbox
- ES6+ JavaScript 功能
- Intersection Observer API
- CSS 動畫和過渡效果

## 📝 更新日誌

### v2.0.0 (2025-08-20)
- 🎉 初始版本發布
- ✨ 響應式設計實作
- ✨ 多頁面架構 (首頁、關於我們、愛情故事、價格方案、FAQ)
- ✨ 作品展示功能
- ✨ 社群媒體整合
- ✨ 載入動畫效果
- ✨ 模組化 CSS 和 JavaScript 架構
- ✨ Schema.org 結構化數據標記
- ✨ SEO 優化實作 (Meta 標籤、GA4 追蹤)

## 🤝 貢獻指南

### 開發流程
1. Fork 專案
2. 建立功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 程式碼規範
- 使用 2 空格縮排
- 遵循 HTML5 語義化標籤
- 使用模組化 CSS 架構
- 保持 JavaScript 程式碼簡潔
- 檔案命名使用 kebab-case

## 📄 授權條款

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案

## 📞 聯絡資訊

- **工作室**：Summer Kisses 影像工作室
- **Instagram**：[@sumkiss.film](https://www.instagram.com/sumkiss.film/)
- **YouTube**：[@sumkiss](http://www.youtube.com/@sumkiss)
- **Email**：sumkiss.film@gmail.com

## 🙏 致謝

- **網頁設計**：Gary Chan
- **技術支持**：Jinhe Chen
- **Bootstrap**：Twitter, Inc.
- **Font Awesome**：Fonticons, Inc.

---

© 2024 Summer Kisses 影像工作室. 版權所有. 