# Pannoczka Market – Project Brief

## What this project is
Single-page landing website for **Pannoczka market** — a Ukrainian grocery store in Żory, Poland.
- Live domain: **pannoczka.pl** (and www.pannoczka.pl)
- Cloudflare Pages project: **pannoczka-market**
- GitHub: to be connected (git init done, push pending)
- Owner email: dimabashtan@gmail.com

## Tech stack
- Pure **HTML5 + CSS3** — no framework, no build step
- **Tailwind CSS** via CDN (no npm needed)
- Vanilla JavaScript for language toggle and mobile menu
- Deployed via `npx wrangler pages deploy . --project-name pannoczka-market --branch main`

## File structure
```
index.html                  — entire site (single file)
CLAUDE.md                   — this file
.gitignore                  — excludes .DS_Store, .wrangler/, .claude/
images/
  favicon.ico               — 16+32px, generated from RAW/Favicon Pannochka_new.png
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png      — 180×180, white background
  og-image.jpg              — 1200×630, dark green bg + logo + address line
  twitter-card.jpg          — 1200×600
RAW/
  Favicon Pannochka_new.png — current logo (used in navbar + favicons)
  Favicon Pannochka.jpeg    — old logo (do not use)
  viber_image_2026-08-16_16-58-06-361.jpg  — store exterior (hero background)
  viber_image_2026-08-16_12.jpg            — opening promo poster (About section)
  Gemini_Generated_Image_l0txpll0txpll0tx (1).jpeg  — illustrated menu (Assortment)
  viber_image_2026-08-16_16-15-06-686.jpg  — interior photo 1 (Gallery)
  viber_image_2026-08-16_16-15-11-515.jpg  — interior photo 2 (Gallery)
  viber_image_2026-08-16_16-15-13-981.jpg  — salo & pickles closeup (Gallery)
```

## index.html architecture
- All translatable text lives in the `T` JS object at the bottom of the file — two keys: `pl` (primary) and `ua` (secondary)
- Language toggle calls `setLang('pl')` / `setLang('ua')` which updates all `id`-tagged elements
- Every text element that changes on language switch has a unique `id` (e.g. `ct-addr-l`, `a-title`, etc.)
- To add new translatable text: add the string to both `T.pl` and `T.ua`, add the element with an `id`, call `setText('id', t.key)` inside `setLang()`

## Store details (never change without client confirmation)
- **Address:** ul. Folwarecka 2, 44-240 Żory, Polska
- **Hours:** Mon–Fri (Pn–Pt) 9:00–20:00 · Sat–Sun (Sb–Nd) 10:00–20:00
- **Email:** pannoczkamarket@gmail.com
- **Instagram:** https://www.instagram.com/pannoczkamarket/
- **Facebook:** https://www.facebook.com/people/Pannoczka-Market/61593312664059/

## Design tokens
- Dark green: `#1a5c2a` (header, contact section, hero overlay)
- Medium green: `#2d7a3e` (accents, labels)
- Red/burgundy: `#9b1c1c` (CTA buttons)
- Gold/wood: `#c4934a` (decorative rule, borders)
- Cream background: `#fdf8f0`

## Site sections (in order)
1. **Header** — sticky, logo image (`RAW/Favicon Pannochka_new.png`), nav links, PL/UA toggle, mobile hamburger
2. **Hero** — full-screen exterior photo, headline, two CTA buttons, hours + address chips
3. **About** (`#about`) — store description mentioning "produkty z Ukrainy i Wschodu", opening poster image
4. **Assortment** (`#assortment`) — 5 category cards (fish, meat, drinks, sweets, preserves) + illustrated menu image
5. **Gallery** (`#gallery`) — masonry grid of 4 photos, lightbox on click
6. **Contact** (`#contact`) — address, email, social links (FB + IG), hours, Google Maps iframe
7. **Footer** — copyright, email, FB + IG icon buttons

## Cloudflare deployment
- Account ID: e8eeb644ca96a2d4cb2a9674ea599e79
- Deploy command: `npx wrangler pages deploy . --project-name pannoczka-market --branch main`
- Custom domains bound via Cloudflare API (both pannoczka.pl and www.pannoczka.pl are active)
- Wrangler auth stored in `~/.wrangler/config/default.toml` (OAuth token)

## Favicon/image generation
Assets are generated with Pillow (Python). Source is `RAW/Favicon Pannochka_new.png` (2048×... px, white bg).
White-removal is done per-pixel (brightness > 238 threshold). Girl portrait crop = top 54% of content bbox.
Run `python3` with the generation script if any favicon needs regenerating.

## What's been done
- [x] Full site built from scratch (HTML/CSS/JS)
- [x] PL/UA bilingual toggle
- [x] Deployed to Cloudflare Pages
- [x] Custom domains pannoczka.pl + www.pannoczka.pl bound
- [x] Favicons generated from new logo (favicon.ico, PNGs, apple-touch-icon)
- [x] OG image 1200×630 (dark green bg, logo centred, address line)
- [x] Email added to Contact + Footer
- [x] "Products from Ukraine and the East" copy update (both languages)
- [x] Instagram + Facebook added to Contact + Footer with brand SVG icons
- [x] .gitignore created, ready for `git init` + `gh repo create`
