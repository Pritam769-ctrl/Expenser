# Expenser 

**Expenser** is a powerful, offline-capable Progressive Web App (PWA) designed to track expenses, manage funds, monitor investments, and calculate crypto assets in real-time. Built with a "Privacy First" approach, all data remains on your device.

---

## 🌟 Key Features

* **⚡ PWA & Offline First:** Installable on Android/iOS and works completely without internet.
* **💸 Smart Transaction Codes:** Quickly add transactions using codes (e.g., `f 200` for Food).
* **📊 Dynamic Analytics:** Beautiful Pie and Bar charts to visualize spending.
* **🪙 Crypto Engine:** Live portfolio valuation based on manual coin rates.
* **💳 Credit Card Manager:** Track credit utilization with visual progress bars.
* **🤝 Debt Tracker:** Manage lending/borrowing with a unique Chat-style interface.
* **🌗 Dark Mode:** Fully optimized dark theme for night usage.
* **💾 Backup & Restore:** Export data to JSON and safely merge it back later.

---

## 🚀 How to Install (PWA)

### Android (Chrome)
1.  Open the hosted link (e.g., GitHub Pages).
2.  Wait for the "Add Expenser to Home screen" prompt at the bottom.
3.  If not prompted, tap the **3-dot menu** -> **Install App** (or Add to Home Screen).

### iOS (Safari)
1.  Open the link in Safari.
2.  Tap the **Share** button (box with arrow).
3.  Scroll down and select **Add to Home Screen**.

---

## 📖 User Manual & Instructions

### 1. Home Dashboard
The app opens to the Home tab by default.
* **Greeting:** Shows a time-sensitive greeting (Morning/Noon/Evening) and your name.
* **Quick Expense:** The fastest way to log a transaction.
    1.  **Input:** Type amount (e.g., `500`) or Code + Amount (e.g., `t 50` for Transport).
    2.  **Legends:** Tap the buttons (F, T, O...) below to auto-insert codes.
    3.  **Dropdown:** Select the account (Cash/Bank) you want to deduct from.
    4.  **Track:** Saves immediately.
* **Analytics:** Visual breakdown of Income vs. Expense and Category-wise spending. *Note: Transfers, Investments, and Initial balances are excluded from these charts to ensure accuracy.*

### 2. Navigation & Gestures
* **Tabs:** Switch between Home, Cash, Bank, Invest, Debt, and Crypto using the bottom bar.
* **Swipe:** You can **swipe left or right** anywhere on the screen to switch tabs quickly. (Swipe is disabled while typing in transaction forms to prevent accidents).

### 3. Account Management
* **Add Account:** Click the `+ Add` button in any tab to create a new account specific to that category.
* **Initial Amount:** When creating an account, you can set a starting balance. This is recorded as an "Initial" transaction and does not affect your Income charts.
* **Account Menu:** Click the **3-dots** on any account card to **Rename**, **Change Currency**, or **Delete** the account.

### 4. Transaction Logic (Cash & Bank)
Tap any account card to open the transaction view.
* **Top Box (Input Income):** * Type a number to add funds (e.g., Salary).
    * Type `b [amount]` (e.g., `b 5000`) to record a **Transfer In** (excluded from income charts).
* **Bottom Box (Input Expense):** * Type a number to subtract funds.
    * Type `b [amount]` (e.g., `b 200`) to record a **Transfer Out**.
* **Codes:**
    * `i` = Income
    * `f` = Food
    * `t` = Transport
    * `o` = Outfit
    * `e` = Entertainment
    * `l` = Living
    * `d` = Investment
    * `b` = Transfer / Bills

### 5. Special Account Features

#### 💳 Credit Cards
* Go to **Details** to set your **Credit Limit**.
* The card shows a progress bar indicating how much limit you have utilized.
* **Bill Paid:** Click this button to reset the utilization to zero. This transaction is recorded but hidden from Income charts.

#### 🪙 Crypto Assets
* **Input:** Use the "Deposit" box to add coins, "Withdraw" to remove coins.
* **Engine:** Go to **Details** and set the **Coin Value** (e.g., 1 BTC = $95,000). The app automatically calculates your total portfolio value in USD based on the coins you hold.

#### 🤝 Debts & Loans
* **Person:** Uses a **Chat Interface**.
    * **Green Bubble (Left):** Money Received (You borrowed or got paid back).
    * **Blue Bubble (Right):** Money Given (You lent or paid back).
    * **Details:** Store contact number and address.
* **EMI:** Track loans. Add "Principal" to increase debt, "Payment" to pay off EMI.

#### 📈 Investments & EPFO
* **Investments:** Dedicated "Invest" (+) and "Withdraw" (-) inputs.
* **EPFO:** Track Employee share, Employer share, and Pension separately via the Details panel.

### 6. Settings & Data
* **Dark Mode:** Toggle between Light and Dark themes.
* **Change Name:** Update the name displayed on the Home screen.
* **Backup (JSON):** Downloads a file with all your financial data. **Save this often!**
* **Restore:** Select a backup file to load data. The system uses a **Smart Merge**, meaning it adds the backup data to your existing data without deleting what you currently have.
* **Reset:** Permanently wipes all data from the app.

---

## 🛠 Technical Details
* **Stack:** HTML5, CSS3, Vanilla JavaScript.
* **Storage:** `localStorage` (No server-side database).
* **Libraries:** `Chart.js` for analytics.
* **Deployment:** GitHub Pages (Static Hosting).

---

## 📞 Support
If you encounter any bugs or need help, please contact customer support:
**Email:** rpritam906@gmail.com

---

### Credits
**Expenser V9.0** Created by **Pritam and Rupam Roy**
