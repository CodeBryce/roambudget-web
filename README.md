# RoamBudget

A full-stack shared travel expense tracker. Create trip groups, log expenses, track who paid what, and settle up with Venmo or Cash App deep links.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML/JS, Tailwind CSS, Chart.js, Supabase JS SDK |
| Backend | Python FastAPI, hosted on Render |
| Database | Supabase (PostgreSQL) with Row Level Security |
| Auth | Supabase Auth (email/password + user metadata) |

## Local Setup

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/roambudget-web
cd roambudget-web
```

### 2. Configure credentials
```bash
cp config.example.js config.js
```
Open `config.js` and fill in your Supabase project URL and anon key.  
Find these in: **Supabase Dashboard → Settings → API**

> ⚠️ `config.js` is gitignored. Never commit it.

### 3. Run the Supabase migration
In **Supabase → SQL Editor**, run the contents of `migration.sql` to create the required tables and RLS policies.

### 4. Open the app
Open `index.html` directly in a browser, or serve it with any static file server:
```bash
npx serve .
```

## Backend Setup (Render)

1. Deploy `main.py` to Render as a Python web service
2. Set these environment variables in Render → Environment:
   - `SUPABASE_URL` — your Supabase project URL
   - `SUPABASE_KEY` — your Supabase **service_role** key (for server-side operations)
3. Make sure `requirements.txt` is in the repo root

## Database Schema

### `trips`
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key |
| trip_code | text | Unique join code e.g. `JAMAICA2026` |
| name | text | Friendly display name |
| creator_id | uuid | References auth.users |
| require_payment | boolean | |

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
| user_id | uuid | Auth user who submitted |

### `trip_members`
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | Primary key |
| trip_id | uuid | References trips.id |
| user_id | uuid | References auth.users |
| display_name | text | Cached from user metadata |
| avatar_color | text | Hex color for avatar chip |

## Security Notes

- Row Level Security (RLS) is enabled on all tables
- The anon key is safe to use client-side — Supabase RLS policies enforce access control
- The service_role key is only used server-side via Render environment variables and is never exposed to the client
- Users can only read trip_members rows for trips they belong to
- Only trip creators can delete their own trips
