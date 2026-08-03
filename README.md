# Pro360 Quotation System (hosted app)

A standalone single-page quoting app that shares your **Finance system's** Supabase
project. Agents sign in with the login your admin created for them in Finance; every
quote they save is written into the Finance `quotations` + `quotation_items` tables.

## Files
- `index.html` — the whole app (login + quoting UI, one page)
- `js/config.js` — Supabase URL + anon key (already set to your Finance project)

## Deploy (like the Finance app)
1. Drag this folder into **Netlify** (or Vercel / Cloudflare Pages). No build step.
2. Open the site → sign in with an agent's Finance email + password.

## How linking works
- **Login:** Supabase Auth, same project as Finance. Uses the agent logins from
  `create-agent-login`. The agent is matched to their `agents` record by email.
- **Save to Finance:** finds/creates the customer by name, inserts a `quotations`
  row (auto number QUO-YYYY-####, 8% SST) tagged to the agent, and one
  `quotation_items` row per line. It then shows up in your Finance quotation list.
- **Saved quotes panel:** reads back that agent's quotations from Finance.

## Notes
- Save is **MYR only** (Finance is MYR). You can still quote other currencies for the
  customer PDF, but switch to RM before saving.
- Recurring vs one-time and the payment schedule are recorded in the quotation `notes`.
