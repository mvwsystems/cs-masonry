# C & S Brick, Stucco, and Stone — Website

Static marketing website for C & S Brick, Stucco, and Stone — a commercial masonry subcontractor based in Rockwall, TX, and sister company to C&C Roofing. Built by [Titan AI](https://titanai.io).

---

## Overview

- **Company:** C & S Brick, Stucco, and Stone
- **Location:** 2740 State Highway 276, Suite 100 — Rockwall, TX 75032
- **Phone:** 469-867-8349
- **Email:** info@candsbrick.com
- **Services:** Stucco & EIFS, Brick Veneer, CMU Block, Natural Stone, Cast Stone & Balustrades, Multi-Family Cladding Packages
- **Deployment:** Netlify (static, no server-side dependencies)

---

## File Structure

```
cs-brick/
├── index.html          # Homepage — hero, intro, services preview, projects preview, CTA
├── services.html       # Full services page with 6 service cards + process steps
├── projects.html       # Portfolio grid with category filter
├── about.html          # Company story, values, and team contacts
├── contact.html        # Bid request form (Netlify Forms) + direct contact info
│
├── css/
│   └── style.css       # Full design system — variables, layout, components, responsive
│
├── js/
│   └── main.js         # Nav scroll, mobile menu, IntersectionObserver reveals, smooth scroll
│
├── images/             # All images go here (see Image Assets section below)
│
├── netlify.toml        # Build config, 404 redirect, cache headers, security headers
└── README.md           # This file
```

---

## Design System

| Token | Value |
|-------|-------|
| `--black` | `#0a0a0a` |
| `--dark-1` | `#0e0e10` |
| `--blue` | `#2563eb` |
| `--blue-bright` | `#60a5fa` |
| `--font-display` | Bebas Neue |
| `--font-heading` | Barlow Condensed |
| `--font-body` | Barlow |

Fonts loaded from Google Fonts. Body background `#0a0a0a`. SVG grain overlay at `body::after` (opacity 0.03, pointer-events none, z-index 9999).

---

## Image Assets Required

Place all images in the `/images/` directory. The site references the following files:

### Logo
- `images/CSBrickLogo.png` — Company logo (displayed at ~44px height in nav)

### Hero
- `images/hero.mp4` — Background video (autoplay, muted, loop) — masonry construction footage preferred
- `images/hero-poster.jpg` — Fallback poster image for video

### Intro / About
- `images/about-main.jpg` — About band image on homepage (4:3 ratio)
- `images/about-story.jpg` — About page story image (3:4 portrait ratio)

### Projects (all PNG or JPG)
- `images/project1.PNG` — The Crescent Place, Fort Worth
- `images/project2.PNG` — Alta Yorktown
- `images/project3.PNG` — Alta Creekside
- `images/project4.PNG` — Ablon Frisco Square
- `images/project5.PNG` — Water's Creek
- `images/project6.PNG` — ER Centers of America, Plano
- `images/project7.PNG` — United Market Street
- `images/project8.PNG` — Alta 1500 Block
- `images/project9.PNG` — American National Bank, Rockwall

> **Tip:** Source project photos from the existing portfolio at candsbrick.com/portfolio or from internal project archives. Minimum recommended size: 1200×800px.

### Trust Ticker Certifications
- `images/CERT1.png` through `images/CERT6.png` — Association logos, insurance certs, or partner badges (displayed at 40px height, grayscale filter applied via CSS)

---

## Deployment to Netlify

### Option A — Netlify CLI (Recommended)

```bash
# Install CLI globally if not already installed
npm install -g netlify-cli

# Login to your Netlify account
netlify login

# From the project root, deploy as a new site
netlify init

# Deploy
netlify deploy --prod
```

### Option B — Netlify Dashboard (Drag & Drop)

1. Log in at [app.netlify.com](https://app.netlify.com)
2. Drag the `cs-brick/` folder onto the **"Want to deploy a new site without connecting to Git?"** drop zone on the Sites page
3. Configure site name (e.g., `cs-brick`) and custom domain

### Option C — GitHub + Netlify Auto-Deploy

1. Push this directory to a GitHub repository
2. In Netlify: **Add new site → Import an existing project → GitHub**
3. Set **Publish directory** to `.` (root)
4. Click **Deploy site**
5. Connect custom domain under **Domain settings**

---

## Forms

The contact page uses **Netlify Forms** (zero-config on Netlify):
- Form name: `bid-request`
- Spam protection: Netlify honeypot field included
- Success redirect: `/contact.html?submitted=true` — displays a confirmation UI
- **No third-party service required** — form submissions appear in the Netlify dashboard under **Forms**

To receive email notifications on new submissions:
1. Netlify Dashboard → **Forms → bid-request**
2. **Form notifications** → Add email notification

---

## Custom Domain Setup

1. Netlify Dashboard → Site settings → **Domain management → Add custom domain**
2. Add `candsbrick.com` (or your preferred domain)
3. Update DNS at your registrar:
   - Point `A` record to Netlify's load balancer IP, **or**
   - Point nameservers to Netlify DNS for full control
4. HTTPS is provisioned automatically via Let's Encrypt (may take up to 24 hours)

---

## Local Development

No build step required — this is a pure static site.

```bash
# Using Python (built-in)
python3 -m http.server 8080

# Using Node.js (npx)
npx serve .

# Using VS Code
# Install "Live Server" extension and click "Go Live"
```

Open `http://localhost:8080` in your browser.

---

## Browser Support

Targets modern browsers (Chrome, Firefox, Safari, Edge). Uses:
- CSS custom properties (no IE11)
- CSS Grid and Flexbox
- `IntersectionObserver` (graceful fallback included)
- Native `<video>` with poster fallback

---

## Credits

- Built by [Titan AI](https://titanai.io)
- Fonts: Google Fonts — Bebas Neue, Barlow, Barlow Condensed
- Icons: Inline SVG (no external dependencies)
- Forms: Netlify Forms (built-in)
