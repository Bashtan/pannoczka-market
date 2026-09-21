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
index.html                  — entire site (single file) — the LIVE production page. The About
                               section's "ВІДКРИТТЯ! 16 СЕРПНЯ" grand-opening poster
                               (RAW/viber_image_2026-08-16_12.jpg, still used nowhere else) has
                               been PROMOTED from the test page to production: it's now an inline
                               <video id="about-video" controls autoplay muted loop playsinline>
                               of images/Videos/video.mp4, boxed in an aspect-[3/2] + object-cover
                               container matching the poster's old shape/rounded corners/shadow,
                               with a small inline <script> right after the tag setting
                               playbackRate = 0.9 (re-asserted on loadedmetadata) so it plays 10%
                               slower. Hero is unchanged (still the original photo + .hero-overlay).
test-video.html             — ⚠️ SANDBOX, not linked from the live site. Still reachable at
                               pannoczka.pl/test-video.html (clean URL /test-video too) for trying
                               future video ideas. Only differs from index.html by the Hero's
                               .hero-overlay div, which was removed here during an earlier,
                               abandoned hero-background-video experiment and was deliberately
                               NOT carried over when the About-section video was promoted above —
                               don't blind-diff this file into index.html; check what's actually
                               being promoted first.
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
  Asortyment/               — ⚠️ SOLE source of truth for the Assortment (#assortment) AND Gallery
                               (#gallery) sections' photos, as of the "complete photo refresh" pass.
                               Every image in these two sections comes from here (root) or Alkohol/
                               below — nothing else. Before adding/removing a photo in either
                               section, `ls` this folder (+ Alkohol/) first — don't trust a filename
                               the client types in chat; check the real name/extension on disk (this
                               has bitten us before: the client wrote "Alcohol2/3/4/5" but the actual
                               files were inconsistently spelled, and separately once said "images/"
                               when the real path was "images/Asortyment/").
                               Two visual styles live side by side here, and the site deliberately
                               displays them differently:
                                 • "clean shot" style — a single/few products on a plain or blurred
                                   shelf background, minimal/no text baked into the image. These go in
                                   the ASSORTMENT masonry WITH a small caption overlay (site supplies
                                   the label, translated via T.*.assort.brands / T.*.assort.alcohol).
                                 • "promo poster" style — a full illustrated flyer with the Pannoczka
                                   girl-mascot logo, a big bold headline, and marketing copy already
                                   baked into the graphic. These go in the GALLERY masonry with NO
                                   caption overlay (would be redundant — the poster speaks for itself).
                               If a new photo arrives, look at it before deciding where it goes —
                               don't assume by filename or folder alone.
    Pannoczka19.jpg         — Torchin sauces — clean shot — Assortment (`pg-sauces`)
    Pannozcka18.jpg         — Lovare tea (note: file has "Pannozcka" typo, not "Pannoczka") — clean shot — Assortment (`pg-tea`)
    Pannoczka17.jpg         — kids' snacks selection — clean shot — Assortment (`pg-kids`)
    Pannoczka16.jpg         — Natakhtari lemonade (single bottle) — clean shot — Assortment (`pg-lemonade1`)
    Pannoczka15.jpg         — Natakhtari lemonade (6-flavor lineup) — clean shot — Assortment (`pg-lemonade2`)
    Pannoczka14.jpg         — Roshen chocolate — clean shot — Assortment (`pg-chocolate`)
    Pannozcka13.jpg         — Mivina instant noodles (note: "Pannozcka" typo) — clean shot — Assortment (`pg-noodles`)
    Pannoczka12.jpg         — sunflower halva — clean shot — Assortment (`pg-halva`)
    Pannoczka11.jpg         — Salut corn sticks (salami/bacon/mushroom) — clean shot — Assortment (`pg-cornsticks`)
    ⚠️ the 9 above are sequential (11–19) but do NOT map to brands in that order — see index.html for the actual src per card if these ever need reordering
    Baguette1.jpg           — Flint "baguette" croutons poster (4 flavors) — promo poster — Gallery
    Flint1.jpg              — Flint Crisps "MEGA PACK" poster (5 flavors) — promo poster — Gallery
    GoldenShips.jpg         — Golden Chips potato chips poster (4 flavors) — promo poster — Gallery
    GotoshokVeres.jpg       — Veres canned peas + sweet corn poster — promo poster — Gallery
    Grinky1.jpg             — "До бочкового" rye-wheat rusks poster (3 flavors) — promo poster — Gallery
    Kontik.jpg              — Super Kontik sandwich cookies poster (3 flavors) — promo poster — Gallery
    MASLO1.jpg              — Ферма chocolate butter (62.5% fat) poster — promo poster — Gallery
    Oil1.jpg                — Olejarnia Kozak home sunflower oil poster — promo poster — Gallery
    Pelmeni.jpg             — Ukrainian homemade pelmeni poster (kids/adults) — promo poster — Gallery
    Salo.jpg                — smoked white salo + smoked pork belly poster — promo poster — Gallery
    Soda.jpg                — vinegar (Zelta Saule) + baking soda (Deko) poster — promo poster — Gallery
    TavernChips.jpg         — Flint Tavern potato chips poster (3 flavors) — promo poster — Gallery
    Alkohol/                — alcohol & energy-drinks assortment photos (client-supplied), all
                               square (1254–1280px). Same clean-shot/promo-poster split as above.
      A1.jpg .. A6.jpg      — individual bottle "hero shot" product photos, clean-shot style — used
                               in the Assortment masonry (captions in T.*.assort.alcohol.c1..c6): A1
                               Morosha Wiśniówka, A2 Khortytsa Platinum, A3 Morosha Carpathian
                               350ml, A4 Sinevir Morosha, A5 Morosha Carpathian 1L, A6 Khortytsa
                               Premium.
      A11.jpg               — "АЛКОГОЛЬ В ПРОДАЖІ" full promo poster (Martini, Mionetto, Morosha, Sinevir) — promo poster — Gallery
      AA12.jpg              — "Wódka Morosha – czysty ukraiński charakter" promo poster — promo poster — Gallery
      Alkohol13.jpg         — REVO Alco Energy cans poster (black/mango/cherry/silver, 8.5%) — promo poster — Gallery
      Alkohol14.jpg         — Shake Cocktails poster (Bora Bora/Mojito/Sex on the Beach) — promo poster — Gallery
      ⚠️ the original Alkohol1.jpg (single promo graphic) and the later Alcohol2/Alkohol3/4/5.jpg
      (candid shelf photos) that both briefly lived in this folder are gone — client deleted them and
      replaced with the 10 files above during the photo refresh. If you see either name mentioned in
      old chat history or an old commit message, they no longer exist; don't re-add references.
  Interior/                 — ⚠️ RETIRED from the site as of the "complete photo refresh" — every
                               photo here (both batches, 18 files, store/product candids) has been
                               removed from index.html's Gallery section per the client's instruction
                               to source Assortment/Gallery photos ONLY from images/Asortyment/ (+
                               Alkohol/). Files are left on disk untouched (client didn't ask to
                               delete them, only to stop displaying them), unreferenced anywhere in
                               index.html or test-video.html. Don't reintroduce them without asking —
                               the client may have moved on to the new promo-poster photos for good.
RAW/
  Favicon Pannochka_new.png — current logo (used in navbar + favicons)
  Favicon Pannochka.jpeg    — old logo (do not use)
  viber_image_2026-08-16_16-58-06-361.jpg  — store exterior (hero background) — still in use (Hero)
  viber_image_2026-08-16_12.jpg            — opening promo poster — no longer referenced (About section now shows the video instead; see index.html entry above)
  Gemini_Generated_Image_l0txpll0txpll0tx (1).jpeg  — illustrated menu — ⚠️ RETIRED, same photo-refresh pass as Interior/ above (was in Assortment, not sourced from images/Asortyment/, so removed; category cards now stand alone without it)
  viber_image_2026-08-16_16-15-06-686.jpg  — interior photo 1 — ⚠️ RETIRED (was in Gallery, same reason)
  viber_image_2026-08-16_16-15-11-515.jpg  — interior photo 2 — ⚠️ RETIRED (was in Gallery, same reason)
  viber_image_2026-08-16_16-15-13-981.jpg  — salo & pickles closeup — ⚠️ RETIRED (was in Gallery, same reason)
```

## index.html architecture
- All translatable text lives in the `T` JS object at the bottom of the file — two keys: `pl` (primary) and `ua` (secondary)
- Language toggle calls `setLang('pl')` / `setLang('ua')` which updates all `id`-tagged elements
- Every text element that changes on language switch has a unique `id` (e.g. `ct-addr-l`, `a-title`, etc.)
- To add new translatable text: add the string to both `T.pl` and `T.ua`, add the element with an `id`, call `setText('id', t.key)` inside `setLang()`
- Scroll-reveal: any element with class `.reveal` fades/slides in via a vanilla-JS `IntersectionObserver` (adds `.is-visible`); respects `prefers-reduced-motion` and has a no-JS/no-IO fallback. Stagger multiple items in the same row with inline `style="transition-delay:Nms"`. Fonts: Playfair Display (headings, via one Google Fonts `<link>`) + the original Georgia stack (body).
- Photo grids (Assortment + Gallery masonries): CSS multi-column masonry — `columns-2 sm:columns-3 lg:columns-4` on the container, each photo wrapped in a plain `break-inside-avoid mb-4` div, images at their natural aspect ratio (no forced `aspect-*`/fixed `height`). This is deliberate: the site's earlier fixed CSS-Grid galleries (`grid-cols-2 md:grid-cols-3` with hand-placed `row-span`/`col-span` items) needed the exact item count and order hand-calculated every time a photo was added or removed, and got it wrong more than once (see git history — several commits exist solely to fix a gap that appeared after a photo-count change). Masonry columns don't have that failure mode: items just flow, so adding/removing photos never needs any span/gap math. Prefer masonry over a fixed grid for any future photo section here unless there's a specific reason to pin exact positions (e.g. a tall "establishing" photo that must anchor a corner).

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
3. **About** (`#about`) — store description mentioning "produkty z Ukrainy i Wschodu", grand-opening video (`#about-video`, `images/Videos/video.mp4`, autoplay/muted/loop/playsinline/controls, 0.9x playbackRate) in place of the old static poster image
4. **Assortment** (`#assortment`) — label/title header, then a standalone **category-card grid** (`sm:grid-cols-2 lg:grid-cols-3`, 5 cards: fish, meat, drinks, sweets, preserves — no image alongside them any more, see photo-refresh note below), then the **product showcase masonry** (`columns-2 sm:columns-3 lg:columns-4`, heading `as-brands-title` / `T.*.assort.brands.title`): 15 "clean shot" photos — the 9 `images/Asortyment/Pannoczka*.jpg` brand photos (captions via `T.*.assort.brands.*`, ids `pg-*`) interleaved with the 6 `images/Asortyment/Alkohol/A1-A6.jpg` bottle shots (captions via `T.*.assort.alcohol.c1..c6`, ids `as-alc-1..6`) — each a `.prod-card` (rounded, shadow, hover-lift, gradient caption overlay), lightbox-enabled via `openLb()`. The drinks card (`c-drink-d` / `T.*.assort.drink.d`) mentions alcohol and energy drinks alongside water/juice/soda. ⚠️ **Photo refresh** (see images/Asortyment/ note in File structure): the old illustrated-menu image, the separate 9-photo brand *grid*, and the separate alcohol-slider *carousel* (`#alc-track`/`alcSliderMove()`/`.alc-dot`) were all retired in one pass — the menu image because it wasn't sourced from images/Asortyment/, the grid and slider merged into this one masonry because keeping them as two visually-different components stopped making sense once both held the same kind of "clean shot" photo. If you're tempted to rebuild a slider, don't reach for `alc-*` classes/JS — they're gone; check git history only for reference.
5. **Gallery** (`#gallery`) — label/title/description header (`T.*.gallery.desc` now reads "new arrivals, promotions, and the full assortment" rather than the old "peek inside our store" copy, to match the new content — see below) + one **promo-poster masonry** (`columns-2 sm:columns-3 lg:columns-4`): 16 "promo poster" photos — 12 from `images/Asortyment/*.jpg` (Baguette1, Flint1, GoldenShips, GotoshokVeres, Grinky1, Kontik, MASLO1, Oil1, Pelmeni, Salo, Soda, TavernChips) + 4 from `images/Asortyment/Alkohol/` (A11, AA12, Alkohol13, Alkohol14) — plus the `.gal-teaser` "coming soon" card (`id="g-teaser"`, translated via `T.*.gallery.teaser`), all as `break-inside-avoid` masonry items. Every photo item uses `.gal-wrap`/`.gal-img`/`.gal-zoom-icon` hover + `.reveal` scroll-animation, lightbox-enabled via `openLb()`, **no caption overlay** (unlike Assortment) since these posters already carry their own headline/branding baked in — adding a caption would be redundant clutter. The teaser card has no `onclick`/lightbox (not a photo) and uses its own `.gal-teaser:hover` lift. ⚠️ **Photo refresh**: this section previously held real store/product candid photos from `RAW/` + `images/Interior/` (22-26 photos) in a fixed `grid-cols-2 md:grid-cols-3` with hand-placed `row-span`/`col-span` items and a span-matched teaser card — ALL of that was retired per the client's instruction to source Gallery photos only from images/Asortyment/(+Alkohol/), and the fixed grid was replaced by the masonry described above specifically so a future photo-count change never again requires recalculating a teaser's `col-span` by hand (see the masonry note in "index.html architecture"). (A separate "Nasze wnętrze" section and a unified-but-fixed-grid Gallery both existed at earlier points in this project's history; neither exists any more — there is currently one gallery section, one masonry, sourced only from images/Asortyment/.)
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
