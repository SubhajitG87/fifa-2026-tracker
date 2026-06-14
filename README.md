# FIFA World Cup 2026 Live Tracker

A real-time interactive tracker for the FIFA World Cup 2026, featuring live scores, group standings, knockout bracket, and direct links to official match reports. Built with vanilla HTML/CSS/JS using the **football-data.org API** for reliable live updates.

![Live Status](https://img.shields.io/badge/Status-Active-green) ![License: MIT](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **📊 Live Results & Fixtures** — See scores and upcoming matches in real-time with IST (India Standard Time)
- **🏆 Group Standings** — Track all 12 groups with automatic qualification highlighting (top 2 teams)
- **🎯 Knockout Bracket** — Interactive R32, R16, QF, SF, and Final bracket with live match progression
- **🔗 Deep Links** — Click team names to view official FIFA.com profiles; click results for ESPN match reports
- **🔴 Live Indicators** — Visual pulse animation for live matches; status badge shows API connection state
- **⚡ 60-Second Auto-Refresh** — Automatically polls football-data.org for latest updates (configurable)
- **💾 Smart Caching** — Falls back to 15-minute cached data if API unavailable
- **🌍 Timezone-Aware** — All times converted to IST for Indian audiences

## 🚀 Quick Start

### No Setup Required
1. **Open in browser:** Download `wc2026_tracker.html` and open in any modern browser
2. **Enter API key:** On first load, you'll be prompted to enter a free football-data.org API key
3. **Done!** Tracker auto-refreshes every 60 seconds

### Get a Free API Key
1. Visit [football-data.org/client/register](https://www.football-data.org/client/register)
2. Sign up (free tier includes 10 requests/minute — plenty for this tracker)
3. Copy your API key from the dashboard
4. Paste into the tracker prompt on first run

### Optional: Self-Host on GitHub Pages
```bash
# Clone repo
git clone https://github.com/yourusername/fifa-2026-tracker.git
cd fifa-2026-tracker

# No build step needed! Just push to gh-pages branch
git checkout --orphan gh-pages
git add wc2026_tracker.html
git commit -m "Deploy tracker"
git push -u origin gh-pages

# Access at: https://yourusername.github.io/fifa-2026-tracker/wc2026_tracker.html
```

## 📖 Usage Guide

### Page 1: Results & Fixtures
- **Latest Results** — Shows all completed and live matches (reversed chronologically)
- **Fixtures** — Upcoming group stage matches with IST kickoff times
- **Click result cards** → Opens ESPN match report in new tab
- **Click team names** → Opens official FIFA.com team profile
- **Live pulse animation** → Indicates ongoing matches

### Page 2: Group Standings
- **8 Groups A–L** — Each with 4 teams; standings auto-calculate from completed matches
- **Top 2 highlighted** — Green highlight shows teams advancing to R32
- **Stats displayed** — P (matches played), GD (goal diff), GF (goals for), Pts (points)
- **Click team names** → Opens FIFA.com team profile

### Page 3: Knockout Bracket
- **R32 to Final** — Symmetrical bracket layout (16 matches → 8 → 4 → 2 → 1)
- **Live progression** — As group results finalize, R32 slots fill automatically
- **Empty slots** — Minimal visual (no clutter); show tooltips on hover
- **Champion centered** — Final winner displayed prominently at bracket center

### Status Indicators
- **🔴 Live** — Connected to API; data is current (within 60s)
- **⏱ Cached** — Using 15-min-old data (API temporarily down)
- **⚠ Error** — API and cache both unavailable; showing base fixtures

### Refresh Data
- **Auto-refresh** — Happens every 60 seconds automatically
- **Manual refresh** — Click "Refresh Now" button for immediate update
- **Footer shows** — Last sync time, data source (football-data.org or base), refresh count

## 🛠 Technical Stack

| Layer | Tech |
|-------|------|
| **Frontend** | Vanilla HTML, CSS, JavaScript (ES6+) |
| **Data Source** | football-data.org API v4 |
| **Styling** | Custom CSS with design tokens (gold accent, green highlight, pitch background) |
| **Time Handling** | Intl.DateTimeFormat API for timezone conversion |
| **Storage** | LocalStorage for API key persistence |
| **No Build** | Single HTML file; no Node, Webpack, or frameworks needed |

## ⚙️ Configuration

### Environment
Stored in browser `localStorage` — survives page reloads:
- `FOOTBALL_DATA_API_KEY` — Your API key (prompt on first load)

### Constants (Edit if Needed)
Open `wc2026_tracker.html` and modify:
```javascript
const REFRESH_MS = 60000;           // Polling interval (ms)
const CACHE_DURATION_MS = 15 * 60 * 1000; // Cache TTL
const WORLD_CUP_2026_ID = 730;      // football-data.org competition ID
```

### Clear API Key
```javascript
// In browser DevTools console:
localStorage.removeItem("FOOTBALL_DATA_API_KEY");
location.reload();
```

## 🔍 Troubleshooting

### Data Not Updating?

1. **Test API Connection** — Open browser DevTools (F12 → Console):
   ```javascript
   wc2026.testApi()
   ```
   Should show: `✓ Proxy responded` + match count

2. **Check API Key**:
   ```javascript
   wc2026.status()
   // Should show: apiKey: "dc29163c..." (first 8 chars)
   // corsProxy: "allorigins.win (no setup needed)"
   ```

3. **Force Immediate Refresh** (don't wait 60s):
   ```javascript
   wc2026.manualRefresh()
   ```

4. **Common Issues & Fixes**:
   | Issue | Solution |
   |-------|----------|
   | `❌ Not set` in status | Enter API key when prompted on first load |
   | No matches in testApi | Tournament may not have started; API returns empty data during pre-match period |
   | "Cached" badge shows | API unavailable; using cached data (auto-refreshes every 60s) |
   | Still seeing 404 errors | Refresh the page and run `wc2026.testApi()` again |

5. **Re-enter API Key**:
   ```javascript
   wc2026.clearApiKey()
   // Page reloads, prompts for new key
   ```

6. **Full System Status**:
   ```javascript
   wc2026.status()
   // Shows: apiKey, apiStatus, lastSync, matchCount, refreshCount, cacheAge
   ```

### How CORS Works Here

- **No setup needed** — Uses `allorigins.win` (free CORS proxy)
- **Automatic proxy routing** — All API calls wrapped transparently
- **No rate limiting** — football-data.org handles the 10 req/min limit
- **Fallback system** — If API fails, uses 15-min cached data
- **Auto-refresh** — Updates every 60 seconds while page is open

### Other Issues

| Issue | Solution |
|-------|----------|
| **Times showing wrong timezone** | Tracker converts all times to IST (UTC+5:30). Normal behavior. |
| **Bracket slots empty** | Will auto-fill once group stage matches complete |
| **Team links not working** | Check internet connection; team pages require live link access |

### Best Experience: Deploy to GitHub Pages

If you deploy to GitHub Pages (free hosting), CORS issues disappear entirely:
1. Push to GitHub
2. Enable GitHub Pages in repo settings
3. Access via `https://username.github.io/fifa-2026-tracker/`
4. **No CORS, always works!** 🎉

## 📊 Data Flow

```
┌─────────────────────┐
│ Browser (Client)    │
│ wc2026_tracker.html │
└──────────┬──────────┘
           │ fetch every 60s
           ↓
┌─────────────────────────────────┐
│ football-data.org API v4        │
│ /competitions/730/matches       │
│ (returns: 64 group matches,     │
│  32 knockout matches, scores)   │
└──────────┬──────────────────────┘
           │
           ↓ Parse & Normalize
┌──────────────────────────────────┐
│ Local State (liveMatches[])       │
│ Compute standings, renderall views│
└──────────────────────────────────┘
           │
           ↓ Render
┌──────────────────────────────────┐
│ DOM (3 pages: Results, Groups, Bracket) │
└──────────────────────────────────┘
```

## 🎨 Design Highlights

- **Pitch-inspired background** — Green gradient with subtle grid overlay
- **Gold accents** — Team highlights, buttons, section titles
- **Monospace clock** — Real-time IST display with glow effect
- **High contrast** — WCAG AA compliant text colors
- **Live pulse** — Subtle opacity animation on active matches
- **Hover effects** — Team links underline; result cards lift on hover
- **Responsive panels** — Overflow-handled sections for small windows

## 📝 Limitations & Notes

- **60s latency** — Data refreshes every 60s (controlled by football-data.org API)
- **Free tier limits** — 10 requests/minute on free football-data.org plan (sufficient for this tracker)
- **Bracket predictions** — Slots remain official (fixture-based) until group stage completes
- **Mobile view** — Optimized for desktop (1360px+); tablet/mobile not fully responsive
- **No authentication** — API key stored in browser localStorage (not suitable for production)

## 🤝 Contributing

Found a bug or want to improve? Open an issue or PR on GitHub!

### Development Workflow
```bash
# 1. Clone repo
git clone https://github.com/yourusername/fifa-2026-tracker.git

# 2. Open in VS Code
code fifa-2026-tracker

# 3. Edit wc2026_tracker.html

# 4. Test in browser (just open the file)

# 5. Push changes
git add .
git commit -m "Add feature: ..."
git push origin main
```

## 📄 License

MIT License © 2026. See [LICENSE](./LICENSE) file for details.

## 🔗 Resources

- [Football Data API Docs](https://www.football-data.org/documentation/api)
- [FIFA World Cup 2026 Official](https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/2026)
- [ESP Scoreboard](https://www.espn.com/soccer/scoreboard/_/league/FIFA.WORLD)

---

**Last Updated:** June 14, 2026  
**Current Tournament:** FIFA World Cup 2026 (Group Stage & Knockouts)  
**API:** football-data.org v4  
**Timezone:** IST (UTC+5:30)
