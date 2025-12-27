# Expenser

**Expenser** is a powerful, offline-capable Progressive Web App (PWA) designed to track expenses, investments, and assets seamlessly. It features a modern One UI-inspired design, dynamic crypto tracking, and detailed analytics without any ads or server dependencies.

> **Version:** 8.2  
> **Status:** Stable

---

## ✨ Key Features

### 💼 Comprehensive Account Management
* **Cash & Bank:** Manage physical wallets, lockers, savings, and current accounts.
* **Investments:** Track Fixed Deposits, Provident Funds, Stocks, and more.
* **Crypto Assets:** Dynamic valuation engine—enter the current coin price, and your portfolio value updates instantly in USD.
* **EPFO:** Dedicated tracking for Employee, Employer, and Pension shares.
* **Credit Cards:** Visual progress bars for credit limit usage and "Bill Paid" logic to reset balances.

### 🚀 Smart Transaction Entry
* **Dual Input System:** Separate input boxes for Income (Add) and Expense (Subtract) to prevent errors.
* **Smart Codes:** Type `f 200` to instantly log 200 under Food, or `t 50` for Transport.
* **Legend Buttons:** Quick-tap buttons (Income, Food, Bills, etc.) to auto-select categories.

### 📊 Analytics & Reports
* **Visual Charts:** Interactive Pie and Bar charts for expense breakdown (excludes investments and bill payments to keep data accurate).
* **Financial Summaries:** Auto-calculated totals for "Money in Hand," "Savings," and "Crypto Assets."

### 🛡️ Privacy & Data
* **100% Offline:** All data is stored locally on your device.
* **Backup & Restore:** Export your financial data to a JSON file and restore it safely (merges with existing data) anytime.
* **Dark Mode:** Fully supported OLED-friendly dark theme.

---

## 📲 How to Install (PWA)

Expenser is built as a **Progressive Web App**. You don't need an App Store to install it.

1.  Open the hosted link (e.g., via GitHub Pages) in **Chrome** (Android) or **Safari** (iOS).
2.  **Android:** Wait for the "Add to Home Screen" prompt or tap the browser menu (⋮) > **Install App**.
3.  **iOS:** Tap the Share button (box with arrow) > Scroll down > **Add to Home Screen**.
4.  Launch the app from your home screen. It now works **completely offline**!

---

## 🛠️ Hosting on GitHub Pages

To run this app yourself for free:

1.  Create a **Public Repository** on GitHub.
2.  Upload these 5 files to the root folder:
    * `index.html`
    * `manifest.json`
    * `sw.js`
    * `icon-192.png`
    * `icon-512.png`
3.  Go to **Settings** > **Pages**.
4.  Under **Branch**, select `main` and save.
5.  Wait a minute, and GitHub will provide your live app URL.

---

## 📖 User Guide

### Adding Transactions
1.  Tap on any **Account Card** (e.g., Wallet).
2.  **To Add Money:** Type the amount in the **Top Box** (Input Income).
3.  **To Spend Money:** Type the amount in the **Bottom Box** (Input Expense).
    * *Shortcut:* Type `f 500` to log 500 under Food.

### Investment & Crypto
* **Fixed Deposit/Stocks:** Use the dedicated "Invest" and "Withdraw" fields.
* **Crypto:** In "Details," set the current **Coin Value** (e.g., 1 BTC = $95,000). The app auto-calculates your portfolio value in USD based on your holdings.

---

## 👥 Credits & Support

**Created by:** Pritam and Rupam Roy  
**License:** MIT  

For support or feedback, please contact:  
📧 **rpritam906@gmail.com**
