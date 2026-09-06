# Pannoczka Market – Project Brief

## What this project is
Single-page landing website for **Pannoczka market** — a Ukrainian grocery store in Żory, Poland.
- Live domain: **pannoczka.pl** (and www.pannoczka.pl)
- Cloudflare Pages project: **pannoczka-market**
- GitHub: [Bashtan/pannoczka-market](https://github.com/Bashtan/pannoczka-market) (connected, pushed)
- Owner email: dimabashtan@gmail.com

## Tech stack
- Pure **HTML5 + CSS3** — no framework, no build step
- **Tailwind CSS** via CDN (no npm needed)
- Vanilla JavaScript for language toggle and mobile menu
- Deployed via `npx wrangler pages deploy . --project-name pannoczka-market --branch main`

## File structure
```
index.html                  — entire site (single file) — the LIVE production page
test-video.html             — ⚠️ SANDBOX ONLY, not linked from the live site. A duplicate of
                               index.html used to try out video ideas without touching the
                               real page. Client reviews it at pannoczka.pl/test-video.html
                               (Cloudflare Pages serves it at the clean URL /test-video too).
                               Currently: Hero is back to the plain original photo (no video,
                               no .hero-overlay — client asked for both to be removed after the
                               first hero-background-video experiment); the "ВІДКРИТТЯ! 16
                               СЕРПНЯ" grand-opening poster in the About section
                               (RAW/viber_image_2026-08-16_12.jpg) is replaced by an inline
                               <video id="about-video" controls autoplay muted loop playsinline>
                               of images/Videos/video.mp4, boxed in an aspect-[3/2] + object-cover
                               container to match the poster's shape/rounded corners/shadow. A
                               small inline <script> right after the tag sets playbackRate = 0.9
                               (and re-asserts it on loadedmetadata) so the clip plays 10% slower.
                               Only fold any of this into index.html once the client explicitly
                               confirms — keep the two files in sync deliberately, not by habit.
CLAUDE.md                   — this file
.gitignore                  — excludes .DS_Store, .wrangler/, .claude/
images/
  favicon.ico               — 16+32px, generated from RAW/Favicon Pannochka_new.png
  favicon-16x16.png
  favicon-32x32.png
  apple-touch-icon.png      — 180×180, white background
  og-image.jpg              — 1200×630, dark green bg + logo + address line
  twitter-card.jpg          — 1200×600
  qr-review.png             — 3000×3000, QR code (branded with logo) for the Google review link, in the Contact section's review card (`id="ct-review-cta"` block). Decodes to a qrco.de short link that redirects → g.page review link → Google's write-review page for this business, verified with zbarimg.
  Videos/
    video.mp4               — client-supplied store tour clip (higher-quality re-export, replaced the
                               original store-video.mp4), h264/aac, 720×1280 (portrait), 18.7s, ~6.3MB.
                               Used ONLY in test-video.html (see above) — not yet in the live index.html.
  Asortyment/               — brand/product gallery source photos (promo banner images, client-supplied)
    Pannoczka19.jpg         — Torchin sauces
    Pannozcka18.jpg         — Lovare tea (note: file has "Pannozcka" typo, not "Pannoczka")
    Pannoczka17.jpg         — kids' snacks selection
    Pannoczka16.jpg         — Natakhtari lemonade (single bottle)
    Pannoczka15.jpg         — Natakhtari lemonade (6-flavor lineup)
    Pannoczka14.jpg         — Roshen chocolate
    Pannozcka13.jpg         — Mivina instant noodles (note: "Pannozcka" typo)
    Pannoczka12.jpg         — sunflower halva
    Pannoczka11.jpg         — Salut corn sticks (salami/bacon/mushroom)
    ⚠️ filenames are sequential (11–19) but do NOT map to brands in that order — see index.html assortment gallery for the actual src per card if these ever need reordering
  Interior/                 — real store/product photos (client-supplied), used in the expanded Gallery section
    2026-08-28 11.13.02.jpg — shelf aisle (wide "establishing" banner, top of the new grid)
    2026-08-28 11.12.37.jpg — cakes/desserts display case
    2026-08-28 11.12.54.jpg — smoked fish counter
    2026-08-28 11.14.03.jpg — sunflower seeds shelf
    2026-08-28 11.13.23.jpg — sausages (Saltowski) deli case
    2026-08-28 11.14.09.jpg — frozen seafood (shrimp / crab sticks)
    2026-08-28 11.13.35.jpg — sausage close-up ("Лікарська")
    2026-08-28 11.14.17.jpg — frozen dumplings / nuggets / ice cream
    2026-08-28 11.13.45.jpg — deli counter, hams and sausages
    2026-08-28 11.13.57.jpg — full fridge, wide shot (wide closing banner)
    viber_image_2026-08-28_14-33-18-656.jpg — chips/snacks shelf (Nasze wnętrze section)
    viber_image_2026-08-28_14-33-19-028.jpg — frozen seafood (shrimp / surimi sticks)
    viber_image_2026-08-28_14-33-19-299.jpg — frozen dumplings / nuggets / ice cream
    viber_image_2026-08-28_14-33-20-474.jpg — deli counter, fish pastes and caviar spreads
    viber_image_2026-08-28_14-33-21-152.jpg — Sofia roladki cake box, fresh delivery
    viber_image_2026-08-28_14-33-21-454.jpg — dried fish rack
    viber_image_2026-08-28_14-33-21-931.jpg — smoked fish counter, close-up
    viber_image_2026-08-28_14-33-22-786.jpg — Eskimos ice cream rolls in freezer
    ⚠️ these 8 are a separate later batch from the 10 above (added same folder, different day/session), but as of the "merge galleries" edit both batches are used together inside `#gallery` — there is no separate `#interior` section anymore (it was tried, then folded back in per client request)
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
- Scroll-reveal: any element with class `.reveal` fades/slides in via a vanilla-JS `IntersectionObserver` (adds `.is-visible`); respects `prefers-reduced-motion` and has a no-JS/no-IO fallback. Stagger multiple items in the same row with inline `style="transition-delay:Nms"`. Fonts: Playfair Display (headings, via one Google Fonts `<link>`) + the original Georgia stack (body).

## Store details (never change without client confirmation)
- **Address:** ul. Folwarecka 2, 44-240 Żory, Polska
- **Hours:** Mon–Fri (Pn–Pt) 9:00–20:00 · Sat–Sun (Sb–Nd) 10:00–20:00
- **Email:** pannoczkamarket@gmail.com
- **Instagram:** https://www.instagram.com/pannoczkamarket/
- **Facebook:** https://www.facebook.com/people/Pannoczka-Market/61593312664059/
- **Google Business Profile (directions link):** https://maps.app.goo.gl/mvTXyahW8R6XbUsF8 — used on both "Get Directions" CTAs (hero `#h-cta` + Contact `#ct-cta`). Resolves to "Pannoczka Market" at 50.0433809, 18.6890681 (used to rebuild the Contact section's embeddable map iframe, since Google short links can't be framed directly — see git log for `index.html` around "Point Google Maps links to the new Business Profile").
- **Google review link:** https://g.page/r/CZn7h-8vIObLEBM/review — used on the Contact section's "Zostaw opinię" / "Залишити відгук" button (`#ct-review-cta`)

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
4. **Assortment** (`#assortment`) — 5 category cards (fish, meat, drinks, sweets, preserves) + illustrated menu image + 9-card brand/product gallery grid (`.prod-card`, lightbox-enabled via `openLb()`, captions translated via `T.*.assort.brands`)
5. **Gallery** (`#gallery`) — one unified masonry grid, `grid grid-cols-2 md:grid-cols-3`: original 4 curated photos (exterior/customers/closeup, `RAW/`) + a wide "shelf aisle" establishing banner + 16 real product/case-closeup photos (both `images/Interior/` batches merged together) + a `col-span-2` "coming soon" teaser card (`.gal-teaser`, soft green→cream→gold gradient, clock icon, `id="g-teaser"`, translated via `T.*.gallery.teaser`) that exactly fills the trailing grid gap after the last photo + a wide "full fridge" closing banner (22 photos total). Everything but the teaser card uses `.gal-wrap`/`.gal-img`/`.gal-zoom-icon` hover + `.reveal` scroll-animation, lightbox-enabled via `openLb()`; the teaser card is deliberately not clickable (no `onclick`/lightbox — it's not a photo) and uses its own `.gal-teaser:hover` lift instead. ⚠️ If the photo count in this grid ever changes, recheck whether the teaser's `col-span-2` still exactly closes the gap before the closing banner — the span was hand-calculated for a specific item count/order, not automatic. (A separate "Nasze wnętrze" section briefly existed for the second photo batch; client asked to merge it back into Gallery, so there is currently only one gallery section on the page.)
6. **Contact** (`#contact`) — address, email, social links (FB + IG), hours, Google Maps iframe, "Get Directions" CTA, and a "Leave a Review" glass card (gold `.btn-sheen` button + QR code, `images/qr-review.png`, `id="ct-review-*"`)
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
- [x] .gitignore created
- [x] Git repo initialized, pushed to GitHub (`Bashtan/pannoczka-market`)
