# RoamBudget - Web Frontend

The frontend for **RoamBudget**, a clean and professional group travel expense tracker. This is a Single-Page Application (SPA) built with vanilla JavaScript, Tailwind CSS, and Chart.js, integrated directly with Supabase for authentication and a FastAPI backend for data operations.

## 🚀 Features
- **Illustrated Auth Experience**: A dual-panel login/signup screen with branding and visual previews.
- **Dynamic Profile System**: First-time users are prompted to choose a display name and avatar color, which syncs across all their travel groups.
- **Real-time Dashboard**:
  - **Category Breakdown**: Interactive Doughnut chart showing spending across Lodging, Food, Transport, and Activities.
  - **Balance Sheet**: Calculates "Net per Person" to show exactly who is owed and who owes the group.
  - **Member Strip**: Visual avatars for all authenticated members in a trip.
- **Group Management**: Users can create new trips with custom codes or join existing ones.

## 🛠️ Tech Stack
- **Styling**: Tailwind CSS.
- **Fonts**: DM Sans & DM Mono.
- **Visuals**: Chart.js.
- **Database/Auth**: Supabase JS SDK.

## ⚙️ Configuration
Before deploying, ensure the following constants in `index.html` are updated:
- `SB_URL`: Your Supabase Project URL.
- `SB_KEY`: Your Supabase Anon Key.
- `API_URL`: The URL of your deployed Render backend.
