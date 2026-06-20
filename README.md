# ⚽ FIFA World Cup 2026 Live Tracker

**🔴 LIVE:** https://subhajitg87.github.io/fifa-2026-tracker/

A real-time interactive tracker for the FIFA World Cup 2026 featuring live scores, tournament dashboard, group standings with qualification tracker, knockout bracket, match center, tournament predictor, personal dashboard, and storylines. Built with vanilla HTML/CSS/JS using the **football-data.org API**.

![Live Status](https://img.shields.io/badge/Status-Live_on_GitHub_Pages-green) ![License: MIT](https://img.shields.io/badge/License-MIT-blue) ![Dark Mode](https://img.shields.io/badge/Feature-Dark_Mode-9b59b6)

## ✨ Features

### 🏟️ Tournament Dashboard
- **Live Now** — Current live match with real-time score and status
- **Next Up** — Upcoming fixture with countdown timer
- **Latest Result** — Most recent completed match
- **Most Likely To Qualify** — Top teams based on current standings
- **Daily Recap** — Auto-generated narrative summary of today's results

### 📊 Results & Fixtures
- **Latest Results** — Completed and live matches with scores
- **Fixtures** — Upcoming group stage matches with IST kickoff times
- **Why It Matters** — Hover on any match to see qualification stakes
- **Click result cards** — Opens detailed Match Center

### 🏆 Group Standings
- **12 Groups A–L** — Each with 4 teams; standings auto-calculate from completed matches
- **Qualification Tracker** — Color-coded badges: 🟢 Qualified, 🟡 Likely, 🟠 Need Help, 🔴 Almost Out
- **Collapsible groups** — Click group headers to expand/collapse on mobile
- **Top 2 highlighted** — Green highlight shows teams advancing to R32

### 🎯 Knockout Bracket
- **R32 to Final** — Symmetrical bracket layout (16 matches → 8 → 4 → 2 → 1)
- **Live progression** — As group results finalize, R32 slots fill automatically
- **Horizontally scrollable** — Works on smaller screens

### 🎮 Tournament Predictor
- **Pick outcomes** — Choose Home Win / Draw / Away Win for each remaining fixture
- **Live standings update** — Projected group standings recalculate instantly
- **All client-side** — Predictions saved in localStorage, no backend needed
- **Clear anytime** — Run `wc2026.clearPredictor()` in console to reset

### ⭐ Personal Dashboard
- **Choose favourite teams** — Click team chips to select/deselect
- **Team Cards** — Shows pts, GD, next match, recent form (✅❌🟡)
- **Persisted** — Favourites saved in localStorage across sessions

### 📰 Tournament Storylines
- **Collapsible section** — Auto-generated narratives from match data
- **Dominant teams, struggling teams, high-scoring matches** — Updated each refresh

### 🔍 Match Center (Modal)
- **Detailed match view** — Click any result card to open
- **Teams, scores, stage, status** — Full match context
- **Why It Matters** — Qualification stakes for the match
- **Goal distribution bar** — Visual goal share between teams
- **Venue info** — Match venue when available from API

### 🎨 UI/UX Improvements
- **Dark mode toggle** — 🌙/☀️ button; persisted in localStorage
- **Responsive layout** — Fluid grid, works on desktop and mobile
- **Accessibility** — `:focus-visible` outlines, ARIA labels on flag emojis, semantic HTML (`<header>`, `<nav>`, `<section>`, `<footer>`)
- **Error banner** — Visible alert with Retry button when API fails
- **Refresh spinner** — Animated spinner during data fetch
- **Scroll-based nav highlighting** — Active section shown in top nav
- **Collapsible storylines** — Expand/collapse tournament narratives

### 📈 SEO
- **Descriptive `<title>`** — "FIFA World Cup 2026 Live Scores, Fixtures, Standings & Bracket Tracker"
- **Meta description** — For search engine snippets
- **OpenGraph tags** — og:title, og:description, og:type, og:url
- **JSON-LD structured data** — SportsEvent schema for Google

## 🚀 Quick Start

### Just Open the Link
👉 **https://subhajitg87.github.io/fifa-2026-tracker/**

That's it! The tracker loads instantly.

### Optionally Add Live API Key (For Freshest Data)

For real-time live scores, register for a **free API key** from football-data.org:

1. Visit [football-data.org/client/register](https://www.football-data.org/client/register)
2. Sign up (free tier includes 10 requests/minute — plenty for this tracker)
3. Copy your API key from the dashboard
4. Open the tracker, press F12 → Console, and run:
   ```javascript
   wc2026.setApiKey("your-api-key-here")
   ```
5. The page reloads and live data will auto-refresh every 60 seconds

**Without an API key?** The tracker still works with base fixtures (all 72 group matches pre-loaded).

## 📖 Usage Guide

### Page 1: Dashboard
- Instant overview: live match, next fixture, latest result, top qualifiers
- **Daily Recap** — Auto-generated summary of today's matches
- **Favourite Teams** — Select teams to track; see their stats at a glance
- **Storylines** — Expand the collapsible section for tournament narratives

### Page 2: Results & Fixtures
- **Latest Results** — Completed and live matches with hover-to-reveal "Why It Matters"
- **Fixtures** — Upcoming group stage matches with IST kickoff times
- **Click result cards** — Opens Match Center modal with details

### Page 3: Group Standings
- **12 Groups A–L** — 4 teams each; standings auto-calculate from completed matches
- **Qualification badges** — Green (Qualified), Yellow (Likely), Orange (Need Help), Red (Almost Out)
- **Collapsible** — Click group header to toggle visibility

### Page 4: Knockout Bracket
- **R32 to Final** — Symmetrical bracket with live match progression
- **Scrollable** — Horizontal scroll on smaller screens

### Page 5: Tournament Predictor
- **Pick outcomes** — Click Home Win / Draw / Away Win for each unplayed fixture
- **Projected standings** — See how your picks affect group tables
- **Clear picks** — Run `wc2026.clearPredictor()` in console

### Match Center Modal
- **Open** — Click any result card or team card
- **Close** — Click ✕, click outside, or press Escape
- **Shows** — Teams, scores, stage, status, Why It Matters, goals bar, venue

### Status Indicators
- **🔴 Live** — Connected to API; data is current (within 60s)
- **⏱ Cached** — Using 15-min-old data (API temporarily down)
- **⚠ Error** — API and cache both unavailable; showing base fixtures

## 🛠 Technical Stack

| Layer | Tech |
|-------|------|
| **Frontend** | Vanilla HTML, CSS, JavaScript (ES6+) |
| **Data Source** | football-data.org API v4 |
| **Styling** | Custom CSS with design tokens, CSS variables, dark mode via `[data-theme="dark"]` |
| **Time Handling** | Intl.DateTimeFormat API for timezone conversion |
| **Storage** | LocalStorage for API key, favourites, predictor picks, theme |
| **Accessibility** | Semantic HTML5, ARIA labels, focus-visible outlines |
| **SEO** | OpenGraph, JSON-LD, meta description |
| **No Build** | Single HTML file; no Node, Webpack, or frameworks needed |

## 💻 Development

### Console Commands

```javascript
wc2026.status()          // Show API status, match count, cache age
wc2026.setApiKey("key") // Set football-data.org API key
wc2026.clearApiKey()     // Remove stored API key
wc2026.testApi()        // Test API connection
wc2026.manualRefresh()  // Force immediate data refresh
wc2026.addFav("BRA")    // Add team to favourites
wc2026.removeFav("BRA") // Remove team from favourites
wc2026.clearPredictor() // Reset all predictor picks
```

### Deploy Your Own Copy

1. Fork this repo on GitHub
2. Ensure `index.html` exists in the root
3. Enable GitHub Pages in repo Settings → Pages
4. Access at: `https://yourusername.github.io/fifa-2026-tracker/`

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| `❌ Not set` in status | Run `wc2026.setApiKey("your-key")` in browser console |
| No matches shown | Tournament may not have started; API returns empty until matches begin |
| "Cached" badge persists | API unavailable; using saved data (auto-retries every 60s) |
| Error banner appears | Click "Retry" or wait for auto-retry; data refreshes every 60s |
| Predictor picks stale | Run `wc2026.clearPredictor()` in console |
| Dark mode not saving | Check localStorage is enabled in your browser |

### How CORS Works Here

The `football-data.org` API does **not** send CORS headers. This tracker uses a **5-strategy fallback chain** with independent timeouts:

| Strategy | Proxy | Timeout | Auth Header |
|----------|-------|---------|-------------|
| 1 | Direct API call | 5s | `X-Auth-Token` |
| 2 | `corsproxy.io` (Standard) | 8s | `X-Auth-Token` |
| 3 | `corsproxy.io` (reqHeaders) | 8s | None (in URL) |
| 4 | `thingproxy.freeboard.io` | 8s | `X-Auth-Token` |
| 5 | `cors.eu.org` | 8s | `X-Auth-Token` |

## 🎨 Design Highlights

- **Pitch-inspired background** — Green gradient with subtle grid overlay
- **Gold accents** — Team highlights, buttons, section titles
- **Monospace clock** — Real-time IST display with glow effect
- **High contrast** — Darkened gold (`#a67c1a`) for WCAG AA compliance
- **Dark mode** — Full dark theme with CSS variable swap
- **Live pulse** — Red border animation on active matches
- **Hover effects** — Team links underline; result cards lift; "Why It Matters" reveals
- **Collapsible groups** — Accordion-style group tables for mobile
- **Responsive panels** — Fluid grid adapts from desktop to mobile

## 📝 Limitations & Notes

- **60s latency** — Data refreshes every 60s (controlled by football-data.org API)
- **Free tier limits** — 10 requests/minute on free football-data.org plan
- **Bracket predictions** — Slots remain official (fixture-based) until group stage completes
- **Predictor simulation** — Uses assumed 2-1 scoreline for predicted wins; actual goal details not available
- **Mobile view** — Responsive but optimized for desktop (1360px+)
- **No authentication** — API key stored in browser localStorage
- **Venue data** — Only available when the API provides it; falls back to "TBD"

## 🤝 Contributing

Found a bug or want to improve? Open an issue or PR on GitHub!

## 📄 License

MIT License © 2026. See [LICENSE](./LICENSE) file for details.

## 🔗 Resources

- [Football Data API Docs](https://www.football-data.org/documentation/api)
- [FIFA World Cup 2026 Official](https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/2026)

---

**Last Updated:** June 20, 2026
**Current Tournament:** FIFA World Cup 2026 (Group Stage & Knockouts)
**API:** football-data.org v4
**Timezone:** IST (UTC+5:30)