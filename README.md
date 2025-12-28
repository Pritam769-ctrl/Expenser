# 📱 Expenser V8.4 - User Manual

**Expenser** is a powerful, offline-capable Progressive Web App (PWA) designed to track expenses, investments, debts, and crypto assets. It features a smart "Dual-Input" system, dynamic crypto valuation, and an iMessage-style debt tracker.

---

## 🚀 1. Getting Started & Navigation

### PWA Installation
* **Add to Home Screen:** Open the link in Chrome (Android) or Safari (iOS) and select "Add to Home Screen".
* **Offline Mode:** Once installed, the app works 100% offline. No internet required.

### Navigation
* **Bottom Tabs:** Tap the icons at the bottom to switch between **Cash**, **Bank**, **Invest**, **Debts**, **Crypto**, and **Reports**.
* **Swipe Gestures:** Swipe **Left** or **Right** anywhere on the dashboard to quickly switch between tabs.
    * *Note: Swipe is disabled inside the transaction entry screen to allow scrolling.*

---

## 💸 2. Cash & Bank Accounts
*Used for: Physical Wallet, Locker, Savings Accounts.*

### Adding Transactions (Dual-Input System)
When you open an account, you will see two text boxes:
1.  **Top Box (Add Funds):** Type a number here (e.g., `5000`) to add money (Income).
2.  **Bottom Box (Subtract Funds):** Type a number here to spend money (Expense).

### Smart Codes & Legends
In the **Bottom Box** (Expense), you can use shortcuts:
* **Keyboard Shortcuts:** Type `f 200` to log 200 under Food.
    * `f` = Food
    * `t` = Transport
    * `o` = Outfit
    * `e` = Entertainment
    * `b` = Bills
    * `l` = Living
    * `d` = Investment (Debit)
* **Legend Buttons:** Tap the buttons (F, T, O, etc.) above the keyboard. This automatically selects the Expense box and inserts the code for you.

---

## 💳 3. Credit Cards
*Located in the **Bank** tab.*

* **Visual Progress:** The dashboard shows a progress bar indicating how much of your credit limit you have utilized.
* **Setting Limit:** Click the **Details** button inside the account to set your **Credit Limit**.
* **Paying the Bill:** Inside the account, click the green **Bill Paid (Reset)** button. This automatically adds a transaction to balance your debt to zero.
* *Note: Bill payments are excluded from expense charts to avoid double counting.*

---

## 📈 4. Investments & EPFO
*Located in the **Invest** tab.*

### Fixed Deposit / PPF / Stock
* **Invest (+):** Adds value to your asset.
* **Withdraw (-):** Removes value from your asset.
* **Details:** Store Account Number, Holder Name, and Interest Rate.

### EPFO (Employee Provident Fund)
* Features a **4-way input system** to track specific contributions:
    1.  **Employee Share**
    2.  **Employer Share**
    3.  **Pension Contribution**
    4.  **Withdrawal**
* **Details:** Store UAN Number and Organisation Name.

---

## 🤝 5. Debts & Loans (Chat UI)
*Located in the **Debts** tab.*

### Person (Borrowing/Lending)
This uses a unique **Chat Interface** (like iMessage/WhatsApp):
* **Green Bubble (Left):** Money **Received**. Use this if you borrowed money or someone paid you back.
* **Blue Bubble (Right):** Money **Given**. Use this if you lent money or paid someone back.
* **Details:** Store Contact Number and Address.

### EMI (Loans)
* **Principal (+):** Adds to your loan balance.
* **Payment (-):** Deducts from your loan balance (EMI payment).
* **Details:** Store Interest Rate and Tenure.

---

## ₿ 6. Crypto Assets (Dynamic Engine)
*Located in the **Crypto** tab.*

* **Unit-Based Tracking:** Transactions are entered in **Coins**, not currency (e.g., Deposit 0.5 BTC).
* **Dynamic Valuation:**
    1.  Click **Details**.
    2.  Enter the current **Coin Value** in USD (e.g., $95,000).
    3.  The app instantly recalculates your total portfolio value ($) across the dashboard and transaction history based on this rate.
* **Details:** Store Wallet Location and Address/Phrase.

---

## 📊 7. Reports & Analytics
*The Report icon glows **Green** when active.*

* **Charts:** Pie and Bar charts visualize your **Income vs. Expense** and **Category Breakdown**.
    * *Note: Investments, Crypto, and Debt movements are excluded from these charts to show only "Real" spending.*
* **Summaries (Scroll Down):**
    1.  **Money In Hand:** Total of Cash + Savings Accounts.
    2.  **Savings:** Total of Investments (FD, Mutual Funds, PF).
    3.  **Crypto Assets:** Total live USD value of all coins.

---

## ⚙️ 8. Settings & Data

* **Dark Mode:** Toggle between Light and Dark themes.
* **Backup (JSON):** Downloads a file containing all your data. **Save this file securely.**
* **Restore (Green Button):** Upload a backup file.
    * *Safe Merge:* Restoring **adds** the data from the file to your existing data. It does **not** delete what is currently on your phone.
* **Reset (Red Button):** Wipes all data from the app. Irreversible.

---

### 📞 Support & Credits
* **Created by:** Pritam and Rupam Roy
* **Support Email:** rpritam906@gmail.com
