// ══════════════════════════════════════════════════════════════════
//  RoamBudget — Client Configuration
//  
//  1. Copy this file to config.js
//  2. Fill in your real values
//  3. config.js is gitignored — never commit it
// ══════════════════════════════════════════════════════════════════

window.ROAMBUDGET_CONFIG = {
    // Supabase project URL — found in: Supabase → Settings → API
    SB_URL: "https://YOUR_PROJECT_ID.supabase.co",

    // Supabase anon/public key — found in: Supabase → Settings → API
    // This is the ANON key, not the service_role key
    SB_KEY: "YOUR_SUPABASE_ANON_KEY",

    // Your Render backend URLs (these are public and safe to commit)
    API_URL:   "https://your-app-name.onrender.com/expenses",
    TRIPS_API: "https://your-app-name.onrender.com/trips",
};
