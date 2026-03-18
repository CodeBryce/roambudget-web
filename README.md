# RoamBudget Web 💸
The frontend for **RoamBudget**, a modern group trip expense coordinator. 

**Live Demo:** [https://CodeBryce.github.io/roambudget-web/](https://CodeBryce.github.io/roambudget-web/)

## ✨ Key Features
- **User Authentication:** Secure Sign Up / Login powered by Supabase Auth.
- **Private Sessions:** Users see only their own trip data; expenses are never shared between accounts.
- **Real-time Totals:** Automatic calculation of trip costs and category breakdowns.
- **Responsive Design:** Built with Tailwind CSS for a seamless mobile and desktop experience.

## 🧠 Technical Overview
This frontend communicates with a custom FastAPI backend. Instead of a shared database, this version implements **Option 3: Authentication**, where the frontend captures a user session token and passes it via Bearer Authorization headers to the API.

## 🛠️ Tech Stack
- **Frontend:** HTML5 / JavaScript (ES6)
- **Styling:** Tailwind CSS (CDN)
- **Backend Communication:** Fetch API with JWT Headers
- **Auth Provider:** Supabase JS SDK
- **Hosting:** GitHub Pages

## 📖 How to Use
1. **Create an Account:** Use the Sign Up button to create a private workspace.
2. **Add Expenses:** Log your items (Lodging, Food, etc.).
3. **Manage:** Use the 🗑️ icon to remove entries. Your data is saved to your account and persists across devices.
