# Neutral Advisory — Website Demo

## What this is

A **Phase 1** working demo: a static React frontend built for one purpose —
letting the founder review content and design direction. No backend is
running. The Contact form works as a UI (validates, submits, shows a
confirmation) and logs the payload to the browser console instead of
sending it anywhere, by design.

A **Phase 2** backend scaffold exists in `/backend` but is not wired up.
It's there so the path from "approved demo" to "real site with a working
contact endpoint and a founder-editable Insights CMS" is a continuation,
not a rewrite.

## Before you show this to anyone — read this

`frontend/src/data/content.js` contains every piece of text on the site,
and it is deliberately annotated. Search that file for `[[` — every match
is a fact that was either:
- invented by the AI-generated wireframe (founder's name, career history,
  office location) and has been corrected against the founder's actual
  brief, or
- required by the founder's brief but not yet given to you (the WhatsApp
  disclaimer wording, confirmed office/geography).

Do not let those placeholders quietly disappear into "reasonable-sounding"
text before the founder has actually confirmed them. That was the exact
mistake in the wireframe you started from.

## Running the frontend

```
cd frontend
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Project structure

```
neutral-advisory/
├── frontend/                  Phase 1 — this is what you run/demo
│   ├── src/
│   │   ├── data/content.js    Single source of truth for all site copy
│   │   ├── pages/              One component per site page
│   │   ├── components/         Navbar, Footer, shared UI
│   │   └── styles/global.css   Design tokens (colors, type, spacing)
│   └── package.json
│
└── backend/                   Phase 2 — scaffolded, not active
    ├── server.js               Express app, Mongo connection commented out
    ├── models/                 Mongoose schemas matching frontend data shapes
    └── package.json
```

## Turning on Phase 2 (when the founder has approved direction)

1. `cd backend && npm install`
2. Get a MongoDB connection string (local `mongod`, or a free Atlas cluster)
3. Create `backend/.env` with `MONGO_URI=...`
4. Uncomment the `mongoose.connect()` block and the two route imports in
   `server.js`
5. Build `backend/routes/contact.js` and `backend/routes/insights.js`
   (create, list, and an update/publish action for insights)
6. In `frontend/src/pages/Contact.jsx`, replace the `console.log` in
   `handleSubmit` with a `fetch("http://localhost:5000/api/contact", ...)`
   call
7. Build a minimal `/admin` route (protect it — even basic auth is fine
   for a v1) that lists and edits `InsightArticle` documents

## Content still needing the founder's direct answer

- Confirmed office location / engagement geography (see contradiction
  flagged in `content.js` — the founder's notes say "U.S.-based" but his
  brief also requires a WhatsApp contact disclaimer, which is an unusual
  combination worth asking about directly rather than guessing)
- Exact WhatsApp disclaimer wording (legal/compliance language — don't
  draft this yourself)
- Whether the three "Insights" articles are approved as-is, need editing,
  or should be replaced with the founder's own material
