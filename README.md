# RoamBudget Web 💸
A modern, responsive frontend for the **RoamBudget** trip expense coordinator. 

**Live Demo:** [https://CodeBryce.github.io/roambudget-web/](https://CodeBryce.github.io/roambudget-web/)

## ✨ Key Features
- **Secure Authentication:** Integrated Sign Up and Login flow powered by Supabase Auth.
- **User-Specific Persistence:** Secure session handling ensures users only access their own private expenses.
- **Dynamic Cost Calculation:** Real-time logic for total trip costs and category-based spending breakdowns.
- **Mobile-First Design:** Fully responsive UI built with Tailwind CSS.

## 🧠 Architecture Overview
The application follows a decoupled architecture. The frontend manages user sessions via the Supabase JS SDK and communicates with a custom Python API. Every request includes a Bearer Token in the Authorization header to verify identity and maintain data integrity.

## 🛠️ Tech Stack
- **Frontend:** HTML5 / JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **API Interaction:** Fetch API with JWT Authorization headers
- **Session Management:** Supabase JS SDK
- **Hosting:** GitHub Pages

## 📖 Usage
1. **Register:** Create a private account to start a new trip.
2. **Track:** Log expenses by name, category, and cost.
3. **Manage:** View real-time totals or remove items using the delete functionality. Data persists across devices and sessions.
