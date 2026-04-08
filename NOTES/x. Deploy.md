在 Gihub，delpoy從單純的 HTML/CSS 轉向 React + Vite，本質上是從**「靜態檔案存放」**進化到了**「前端工程化」**的階段。

簡單來說：**GitHub Pages 只能讀取瀏覽器看得懂的東西（HTML/CSS/JS），但你的 React 原始碼瀏覽器看不懂。**

以下是詳細原因與機制拆解：

---

### 1. 「原始碼」與「成品」的區別
當你寫 HTML/CSS 時，你上傳的就是**成品**。瀏覽器直接抓取 `index.html` 就能渲染。

但在 React + Vite 中：
* **你的原始碼**：包含 `.jsx`、`.tsx`、`import` 語句、Sass 等。瀏覽器無法直接執行這些檔案。
* **成品 (Build Artifacts)**：你需要執行 `npm run build`，Vite 會把幾百個檔案壓縮、轉譯、打包成瀏覽器懂的少量 `.js` 和 `.css` 檔案（通常放在 `dist` 資料夾）。

> **結論**：如果你直接上傳 React 專案，GitHub Pages 只會看到一堆它不認識的原始碼，找不到可以執行的 `index.html`。

---

### 2. 為什麼以前可以，現在要用 GitHub Actions？

#### 傳統做法（手動部署）
以前你可以手動在本地跑 `npm run build`，然後把生成的 `dist` 資料夾內容「手動」推送到 GitHub 的一個分支（例如 `gh-pages`）。這樣 GitHub 就能顯示了。
* **缺點**：每次改程式碼都要手動 build、手動 push，非常麻煩且容易出錯。

#### 現代做法：GitHub Actions (CI/CD)
GitHub Actions 就像是一個**雲端機器人**。
1.  你只需把「原始碼」推送到 GitHub。
2.  機器人看到更新後，會自動在雲端開一台小電腦。
3.  這台小電腦幫你跑 `npm install` 和 `npm run build`。
4.  最後機器人自動把產出的 `dist` 內容餵給 GitHub Pages。



---

### 3. 如何在 Vite 專案中輕鬆設定？

既然你在用 **Antigravity**（或是任何現代 AI 編輯器），通常只要在專案根目錄建立一個路徑為 `.github/workflows/deploy.yml` 的檔案，內容貼上 GitHub 官方提供的 [Static Site 模板](https://github.com/actions/starter-workflows/blob/main/deployments/static-site-pages.yml) 即可。

**最重要的兩個關鍵設定：**

1.  **Vite 的 Base Path**：
    在 `vite.config.js` 中，必須加上 `base` 路徑，否則路徑會跑掉。
    ```javascript
    export default defineConfig({
      base: '/你的倉庫名稱/', // 這行很重要！
      plugins: [react()],
    })
    ```

2.  **GitHub 設置**：
    去 GitHub Repo 的 **Settings > Pages**，將 **Build and deployment** 下的 **Source** 從 "Deploy from a branch" 改成 **"GitHub Actions"**。

---

### 總結
這不是 GitHub 故意刁難，而是因為現代前端框架需要經過**「編譯 (Compile)」**這道手續。GitHub Actions 把這道手續自動化了，讓你可以專心在 Antigravity 裡寫程式，剩下的打包與發布交給機器人。

你在搬到 Bellevue 之後的辦公環境應該會更常遇到這種 CI/CD 的流程，習慣這種「自動化部署」的概念對你在 Meta 的工作也會很有幫助！

對於設定 GitHub Action 還有哪一部分覺得卡住的嗎？例如 YAML 檔案的內容？