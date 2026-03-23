# RoamBudget 🌍

**Live app → [codebryce.github.io/roambudget-web](https://codebryce.github.io/roambudget-web/)**

A full-stack shared travel expense tracker for friend groups. Create a trip, invite your crew with a join code, log expenses, and see instantly who owes whom.

---

## Features

- **Google Sign-In** — one-tap auth via Google OAuth
- **Trip Groups** — create or join trips with a shared code
- **Expense Tracking** — log expenses by category with split counts
- **Balance Sheet** — live net per-person balance (who's owed, who owes)
- **Spending Chart** — doughnut chart breakdown by category
- **Member Profiles** — avatars with custom colors for each trip member
- **Venmo & Cash App** — deep links for one-tap settlements

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML/JS, Tailwind CSS, Chart.js |
| Backend | Python FastAPI, hosted on Render |
| Database | Supabase (PostgreSQL) with Row Level Security |
| Auth | Google OAuth via Supabase |

---

## Local Setup

### 1. Clone the repo
```bash
git clone https://github.com/CodeBryce/roambudget-web.git
cd roambudget-web
```

### 2. Configure credentials
Create a `config.js` file in the root (gitignored):
```js
window.ROAMBUDGET_CONFIG = {
    SB_URL:    "https://YOUR_PROJECT_ID.supabase.co",
    SB_KEY:    "YOUR_SUPABASE_ANON_KEY",
    API_URL:   "https://your-app.onrender.com/expenses",
    TRIPS_API: "https://your-app.onrender.com/trips",
};
```

### 3. Run the Supabase migration
In **Supabase → SQL Editor**, run `migration.sql` to create the required tables and RLS policies.

### 4. Open the app
```bash
npx serve .
```

---

## Backend

The backend lives in a separate repo → [roambudget-server](https://github.com/CodeBryce/roambudget-server)

Built with Python FastAPI, deployed on Render. Set these environment variables in Render:
- `SUPABASE_URL`
- `SUPABASE_KEY` (service role key)

---

## Database Schema

### `trips`
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key |
| trip_code | text | Unique join code e.g. `JAMAICA2026` |
| name | text | Friendly display name |
| creator_id | uuid | References auth.users |

### `trip_expenses`
| Column | Type | Notes |
|--------|------|-------|
| id | int8 | Primary key |
| trip_id | text | References trips.trip_code |
| item_name | text | |
| amount | numeric | |
| category | text | Lodging / Food / Transport / Activity |
| paid_by | text | Display name of payer |
| split_count | int | Number of people splitting |

### `trip_members`
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key |
| trip_id | uuid | References trips.id |
| user_id | uuid | References auth.users |
| display_name | text | Cached from user metadata |
| avatar_color | text | Hex color for avatar chip |

---

## Built With

This project was built using AI-assisted development (vibe coding) with [Claude](https://claude.ai).
