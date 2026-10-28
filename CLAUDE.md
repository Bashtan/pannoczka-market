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
                               slower. The HERO is a silent looping banner video too (promoted from the
                               test page on 2026-10-04): <video id="hero-video" autoplay loop muted
                               playsinline> (NO controls, no sound) of images/Videos/pannoczka-main.mp4 with
                               poster pannoczka-main-poster.jpg, filling the section exactly like the old photo
                               did (absolute inset-0, object-fit: cover; object-position 50% 20% because the clip
                               is PORTRAIT and a centered crop loses the shop sign). The .hero-overlay dark-green
                               gradient stays on top (white headline is unreadable over the bright footage
                               without it). The old photo's Ken Burns zoom (.hero-bg-anim) is NOT applied to the
                               video — that CSS is now unused but left in place. A tiny inline script pauses the
                               video under prefers-reduced-motion (poster stays), and the section has a
                               bg-[#0f3d1c] fallback so white text is never on the cream body colour while the
                               media loads. The Assortment section holds two photo sliders (see Site sections #4).
test-video.html             — ⚠️ SANDBOX, not linked from the live site. Reachable at
                               pannoczka.pl/test-video.html (clean URL /test-video too) for trying ideas before
                               they go to production. RIGHT NOW IT IS A BYTE-FOR-BYTE COPY of index.html: the
                               hero-video experiment it was created for was promoted on 2026-10-04 (together
                               with the fresh-products slider and Beer.jpg), so nothing differs any more. Keep
                               it that way when an experiment ends — after ANY index.html change run
                               `cp index.html test-video.html`, then re-apply whatever experiment is in flight
                               (and record it here). `diff index.html test-video.html` shows what's different.
                               History of what was tried here: a full-screen hero background video (reverted —
                               client moved that clip into About instead); the About-section video (promoted);
                               later the controls-free hero banner video (promoted).
                               Design history: a "clean business card" redesign was first tried HERE on
                               2026-10-03 (via a separate test-style.css, Inter/Montserrat, line-art zoom
                               icon) and reverted — client felt it lost the brand's atmosphere. On
                               2026-10-28 the client explicitly asked for a modern redesign straight on
                               production; that is now live (see "Design system" below). It deliberately
                               keeps what the client missed the first time: the green/burgundy/gold
                               palette, the emoji category icons and the 🔍 gallery zoom emoji.
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
                               Used by the About section (#about-video) in BOTH index.html (live) and
                               test-video.html.
    pannoczka-main.mp4      — silent hero-banner clip, used by the HERO of index.html (live) and
                               test-video.html. A web re-encode (ffmpeg: h264 High, yuv420p,
                               1080×1440 portrait, no audio track, rotation baked in, +faststart, 14s,
                               ~5.5MB, crf 27 / maxrate 3M) of the client's raw iPhone upload, which was
                               HEVC 1440×1080 with a rotate=-90 flag, 12 Mbps, 24.5MB — too heavy for a
                               hero and HEVC doesn't play in every browser, hence the re-encode. If the
                               client sends a new cut, re-encode it the same way rather than dropping it
                               in raw; keep it named without spaces.
    pannoczka-main-poster.jpg — 720px-wide first frame of the clip, used as its `poster` (shown while the
                               video loads, if autoplay is blocked, or under prefers-reduced-motion).
    (pannoczka-main-original.mp4 — the client's raw upload, first renamed from "Pannoczka
                               main.mp4", was deleted at the client's request on 2026-10-04. It was untracked, so it
                               was moved to the macOS Trash rather than rm'd — there is no git copy. If a new cut
                               arrives, re-encode it with the recipe above; never commit/deploy a raw 24MB clip.)
  Asortyment/               — ⚠️ SOLE source of truth for the Assortment (#assortment) AND Gallery
                               (#gallery) sections' photos. Before adding/removing a photo in either,
                               `ls` this folder (+ Alkohol/) first — don't trust a filename the client
                               types in chat; check the real name/extension on disk (this has bitten
                               us before: the client wrote "Alcohol2/3/4/5" but the actual files were
                               inconsistently spelled, once said "images/" when the real path was
                               "images/Asortyment/", and once said "images/Asortyment/Interior/" when the
                               real folder is images/Interior/ — see Interior/ below).
                               ⚠️ STRICT FOLDER SPLIT (client's explicit rule, tightened from an
                               earlier content-style split — see git history for that attempt and why
                               it was reverted). Every photo folder feeds exactly ONE container, no
                               exceptions, regardless of what a photo looks like:
                                 • root files (this level, NOT Alkohol/)  -> Gallery masonry ONLY
                                 • Alkohol/                               -> Assortment alcohol slider ONLY
                                 • images/Interior/ (sibling of this dir)  -> Assortment fresh-products slider ONLY
                               A root-level alcohol-themed photo still goes in Gallery; an Alkohol/ photo
                               that looks like a plain product shot still goes in the slider.
                               Verify with a script before shipping any change here: parse the <img> srcs of
                               each container (#fresh-track, #alc-track, #gallery) and check (a) every src
                               lives in that container's folder, (b) the three sets don't overlap, (c) every
                               image file on disk in each folder is referenced exactly once and every
                               reference exists on disk. Quick first look:
                                 grep -oE 'src="images/(Asortyment|Interior)/[^"]+"' index.html | sort -u
                               — don't just eyeball it. (Remember srcs with spaces are %20-encoded.)
                               Independently of the folder split, photos also fall into two visual
                               styles, which the site still treats differently WITHIN each container:
                                 • "clean shot" — a single/few products on a plain or blurred shelf
                                   background, minimal/no text baked in. Gets a small caption overlay
                                   (site supplies the label, translated via T.*.assort.brands /
                                   T.*.assort.alcohol.c1..c6).
                                 • "promo poster" — a full illustrated flyer with the Pannoczka
                                   girl-mascot logo, a big bold headline, and marketing copy already
                                   baked into the graphic. NO caption overlay (would be redundant —
                                   the poster speaks for itself).
                               So the Gallery masonry is a deliberate MIX (9 captioned clean-shot +
                               12 uncaptioned promo-poster root photos) and so is the alcohol
                               slider (6 captioned clean-shot + 5 uncaptioned: 4 promo-poster Alkohol/
                               photos + the Beer.jpg fridge shot); the fresh slider is all 14 uncaptioned
                               Interior/ candids — verified visually to read as natural variety, not as an
                               inconsistency, since both caption/no-caption cards already share the
                               same rounded-corner/shadow/hover language. If a new photo arrives,
                               look at it before deciding its caption treatment, but its SECTION is
                               decided by folder alone, full stop.
    Pannoczka19.jpg         — Torchin sauces — clean shot, captioned (`pg-sauces`) — Gallery
    Pannozcka18.jpg         — Lovare tea (note: file has "Pannozcka" typo, not "Pannoczka") — clean shot, captioned (`pg-tea`) — Gallery
    Pannoczka17.jpg         — kids' snacks selection — clean shot, captioned (`pg-kids`) — Gallery
    Pannoczka16.jpg         — Natakhtari lemonade (single bottle) — clean shot, captioned (`pg-lemonade1`) — Gallery
    Pannoczka15.jpg         — Natakhtari lemonade (6-flavor lineup) — clean shot, captioned (`pg-lemonade2`) — Gallery
    Pannoczka14.jpg         — Roshen chocolate — clean shot, captioned (`pg-chocolate`) — Gallery
    Pannozcka13.jpg         — Mivina instant noodles (note: "Pannozcka" typo) — clean shot, captioned (`pg-noodles`) — Gallery
    Pannoczka12.jpg         — sunflower halva — clean shot, captioned (`pg-halva`) — Gallery
    Pannoczka11.jpg         — Salut corn sticks (salami/bacon/mushroom) — clean shot, captioned (`pg-cornsticks`) — Gallery
    ⚠️ the 9 above are sequential (11–19) but do NOT map to brands in that order — see index.html for the actual src per card if these ever need reordering
    Baguette1.jpg           — Flint "baguette" croutons poster (4 flavors) — promo poster, uncaptioned — Gallery
    Flint1.jpg              — Flint Crisps "MEGA PACK" poster (5 flavors) — promo poster, uncaptioned — Gallery
    GoldenShips.jpg         — Golden Chips potato chips poster (4 flavors) — promo poster, uncaptioned — Gallery
    GotoshokVeres.jpg       — Veres canned peas + sweet corn poster — promo poster, uncaptioned — Gallery
    Grinky1.jpg             — "До бочкового" rye-wheat rusks poster (3 flavors) — promo poster, uncaptioned — Gallery
    Kontik.jpg              — Super Kontik sandwich cookies poster (3 flavors) — promo poster, uncaptioned — Gallery
    MASLO1.jpg              — Ферма chocolate butter (62.5% fat) poster — promo poster, uncaptioned — Gallery
    Oil1.jpg                — Olejarnia Kozak home sunflower oil poster — promo poster, uncaptioned — Gallery
    Pelmeni.jpg             — Ukrainian homemade pelmeni poster (kids/adults) — promo poster, uncaptioned — Gallery
    Salo.jpg                — smoked white salo + smoked pork belly poster — promo poster, uncaptioned — Gallery
    Soda.jpg                — vinegar (Zelta Saule) + baking soda (Deko) poster — promo poster, uncaptioned — Gallery
    TavernChips.jpg         — Flint Tavern potato chips poster (3 flavors) — promo poster, uncaptioned — Gallery
    Alkohol/                — alcohol & energy-drinks photos (client-supplied), square
                               (1254–1280px) except Beer.jpg (3:4 portrait). ⚠️ ALL 11 files here go in the
                               Assortment alcohol slider ONLY (`#alc-track`) — none in Gallery, regardless
                               of visual style.
      A1.jpg .. A6.jpg      — individual bottle "hero shot" product photos, clean shot, captioned
                               (T.*.assort.alcohol.c1..c6, ids as-alc-1..6): A1 Morosha Wiśniówka, A2
                               Khortytsa Platinum, A3 Morosha Carpathian 350ml, A4 Sinevir Morosha,
                               A5 Morosha Carpathian 1L, A6 Khortytsa Premium.
      A11.jpg               — "АЛКОГОЛЬ В ПРОДАЖІ" full promo poster (Martini, Mionetto, Morosha, Sinevir) — promo poster, uncaptioned
      AA12.jpg              — "Wódka Morosha – czysty ukraiński charakter" promo poster — promo poster, uncaptioned
      Alkohol13.jpg         — REVO Alco Energy cans poster (black/mango/cherry/silver, 8.5%) — promo poster, uncaptioned
      Alkohol14.jpg         — Shake Cocktails poster (Bora Bora/Mojito/Sex on the Beach) — promo poster, uncaptioned
      Beer.jpg              — beer + energy-drink fridge shelves, portrait 1200×1600 — uncaptioned, LAST slide.
                               Added 2026-10-04. The client's file was a raw 3072×4080 / 3.5MB phone photo with
                               GPS EXIF; resized to 1200×1600 q76 (~360KB) and EXIF stripped (original went to the
                               Trash, not git). It sits in the square card with object-[50%_80%], which keeps the full
                               shelves and drops the top row of cans; the lightbox shows the whole frame. Re-process
                               any future raw phone photo the same way before adding it.
      ⚠️ the original Alkohol1.jpg (single promo graphic) and the later Alcohol2/Alkohol3/4/5.jpg
      (candid shelf photos) that both briefly lived in this folder are gone — client deleted them and
      replaced with A1–A6/A11/AA12/Alkohol13/14 during an earlier photo refresh (Beer.jpg came later). If you see either name
      mentioned in old chat history or an old commit message, they no longer exist; don't re-add
      references.
  Interior/                 — ⚠️ SOLE source of the Assortment "fresh products" slider (`#fresh-track`):
                               ALL its photos and nothing else. 14 candid shelf/fridge shots — 8 square 1280×1280
                               "2026-08-28 11.*.jpg" + 6 portrait 1200×1600 "viber_image_2026-08-28_14-33-*.jpg"
                               (cakes, smoked/dried fish, Saltowski sausages, frozen seafood/dumplings/nuggets,
                               fish pastes, Eskimos ice cream) — all uncaptioned, descriptive PL alt text only.
                               ⚠️ The client typed this folder as "images/Asortyment/Interior/"; no such folder
                               exists — the real one is images/Interior/ (it sits next to Asortyment/, not inside).
                               The client pruned it from 18 to 14 files on 2026-10-04 (deleted 2026-08-28 11.13.02,
                               11.14.03 and viber 14-33-18-656 / 14-33-21-152). It was RETIRED from the Gallery in
                               the earlier "complete photo refresh" and is now back in use here, so it is no longer
                               dead. Several filenames contain spaces, so index.html references them %20-encoded
                               (`2026-08-28%2011.12.37.jpg`); they were deliberately not renamed. Strict-split rule
                               applies: every file here goes in the fresh slider and in no other container.
RAW/
  Favicon Pannochka_new.png — current logo (used in navbar + favicons)
  Favicon Pannochka.jpeg    — old logo (do not use)
  viber_image_2026-08-16_16-58-06-361.jpg  — store exterior photo — no longer referenced (it was the hero background until the hero became images/Videos/pannoczka-main.mp4 on 2026-10-04); kept on disk
  viber_image_2026-08-16_12.jpg            — opening promo poster — no longer referenced (About section now shows the video instead; see index.html entry above)
  Gemini_Generated_Image_l0txpll0txpll0tx (1).jpeg  — illustrated menu — ⚠️ RETIRED, same photo-refresh pass that originally retired Interior/ (was in Assortment, not sourced from images/Asortyment/, so removed; category cards now stand alone without it)
  viber_image_2026-08-16_16-15-06-686.jpg  — interior photo 1 — ⚠️ RETIRED (was in Gallery, same reason)
  viber_image_2026-08-16_16-15-11-515.jpg  — interior photo 2 — ⚠️ RETIRED (was in Gallery, same reason)
  viber_image_2026-08-16_16-15-13-981.jpg  — salo & pickles closeup — ⚠️ RETIRED (was in Gallery, same reason)
```

## index.html architecture
- All translatable text lives in the `T` JS object at the bottom of the file — two keys: `pl` (primary) and `ua` (secondary)
- Language toggle calls `setLang('pl')` / `setLang('ua')` which updates all `id`-tagged elements
- Every text element that changes on language switch has a unique `id` (e.g. `ct-addr-l`, `a-title`, etc.)
- To add new translatable text: add the string to both `T.pl` and `T.ua`, add the element with an `id`, call `setText('id', t.key)` inside `setLang()`
- Scroll-reveal: any element with class `.reveal` fades/slides in via a vanilla-JS `IntersectionObserver` (adds `.is-visible`); respects `prefers-reduced-motion` and has a no-JS/no-IO fallback. Stagger multiple items in the same row with inline `style="transition-delay:Nms"`. Fonts: Montserrat (headings — `.font-display`) + Inter (body), one Google Fonts `<link>` (css2 API serves latin-ext + cyrillic/cyrillic-ext subsets automatically via unicode-range, verified with `document.fonts.load` on ąćęłńóśźż / ґєіїщ).
- Photo sliders (Assortment: fresh products + alcohol & energy drinks) share ONE implementation. Markup: a `[data-slider]` wrapper holding `.slider-nav-prev` / `.slider-nav-next` buttons (inline `onclick="sliderMove(this, -1|1)"`), a `.slider-track` of `.slider-slide` items (`flex-none w-[82%] sm:w-[46%] lg:w-[31%]`, each a `.prod-card` with an `aspect-square object-cover` img) and an empty `.slider-dots` that the JS fills with one `.slider-dot` per slide. JS: `sliderStep()`, `sliderMove()` and a single `document.querySelectorAll('[data-slider]').forEach(...)` init, so a new slider needs no new JS/CSS — copy a block, give the track/dots unique ids (`fresh-track`/`alc-track` are for docs and debugging only), and give its heading an id + `T.*.assort.<key>.title` + a `setText` call. ⚠️ No `loading="lazy"` on slider images (scroll-snap drift, see Site sections #4). Arrow buttons sit 6px outside the track below `md` and 12px at `md`+ — the page gutter is only 16px, and the old 20px offset clipped them at the screen edge on tablet widths.
- Photo grid (Gallery masonry only — Assortment's photos are sliders, see above and Site sections below): CSS multi-column masonry — `columns-2 sm:columns-3 lg:columns-4` on the container, each photo wrapped in a plain `break-inside-avoid mb-4` div, images at their natural aspect ratio (no forced `aspect-*`/fixed `height`). This is deliberate: the site's earlier fixed CSS-Grid galleries (`grid-cols-2 md:grid-cols-3` with hand-placed `row-span`/`col-span` items) needed the exact item count and order hand-calculated every time a photo was added or removed, and got it wrong more than once (see git history — several commits exist solely to fix a gap that appeared after a photo-count change). Masonry columns don't have that failure mode: items just flow, so adding/removing photos never needs any span/gap math. Prefer masonry over a fixed grid for any future photo section here unless there's a specific reason to pin exact positions (e.g. a tall "establishing" photo that must anchor a corner) — but note masonry and horizontal scroll-snap sliders don't mix well with `loading="lazy"` in the same way; see the Assortment slider warning in Site sections for a bug that combo caused.

## Store details (never change without client confirmation)
- **Address:** ul. Folwarecka 2, 44-240 Żory, Polska
- **Hours:** Mon–Fri (Pn–Pt) 9:00–20:00 · Sat–Sun (Sb–Nd) 10:00–20:00
- **Email:** pannoczkamarket@gmail.com
- **Instagram:** https://www.instagram.com/pannoczkamarket/
- **Facebook:** https://www.facebook.com/people/Pannoczka-Market/61593312664059/
- **Google Business Profile (directions link):** https://maps.app.goo.gl/mvTXyahW8R6XbUsF8 — used on both "Get Directions" CTAs (hero `#h-cta` + Contact `#ct-cta`). Resolves to "Pannoczka Market" at 50.0433809, 18.6890681 (used to rebuild the Contact section's embeddable map iframe, since Google short links can't be framed directly — see git log for `index.html` around "Point Google Maps links to the new Business Profile").
- **Google review link:** https://g.page/r/CZn7h-8vIObLEBM/review — used on the Contact section's "Zostaw opinię" / "Залишити відгук" button (`#ct-review-cta`)

## Design tokens
- Dark green: `#1a5c2a` (header, headings, secondary buttons, slider dots)
- Deep green: `#0f3d1c` (contact section, hero fallback); footer `#0b2f15`
- Medium green: `#2d7a3e` (section eyebrow labels)
- Red/burgundy: `#9b1c1c` (primary CTA buttons — "Sprawdź dojazd")
- Gold/wood: `#c4934a` (title accent line); gold-light `#f0d9a8` ("market" in the hero, hover text on dark)
- Surfaces: white body; `--surface` `#f6f5f1` (Assortment section, gallery teaser, icon tiles); `--line` `#e8e6df` hairlines
- Text: `--ink` `#18211b`, `--muted` `#5c6860` (`.muted` class)

## Design system (modern redesign, live since 2026-10-28)
- Clean/minimal: NO decorative blobs, gold section dividers, gold-foil shimmer text or button sheen sweep any more (CSS + markup removed). `.title-rule` is now one static 40×2px gold line. Sections use generous padding (`py-24 md:py-32`), white / `#f6f5f1` alternating, deep-green Contact.
- Shadows/easing are tokens: `--shadow-sm` (resting cards), `--shadow-lg` (raised/hovered cards), `--ease`.
- Buttons use `.btn-lift` (was `.btn-sheen`): soft shadow, lift 2px on hover.
- Micro-interactions live ONLY inside `@media (hover: hover)` so taps on phones never leave a card stuck "lifted": cat cards / gallery photos / slider cards / teaser lift 4px + `--shadow-lg`, images ease to `scale(1.03)`, info cards lift 3px, gallery shows a small white 🔍 chip top-right.
- ⚠️ Elements that are BOTH a hover card and `.reveal` (`.cat-card`, `.gal-wrap`, `.info-card`, `.gal-teaser`) declare their own combined `transition: opacity .7s …, transform .35s …` AFTER the `.reveal` block — otherwise the reveal's .7s transform transition would make the hover lift sluggish, and their `:hover` transform must come later in the CSS than `.reveal.is-visible` to win (same specificity).
- `.slider-track` has `padding-block: 10px 26px; margin-block: -10px -26px;` — room for the hover lift/shadow (overflow-x:auto also clips vertically) without moving the layout. Don't drop it.
- Info cards: `.info-card` (white, 20px radius, `--shadow-lg`) + `.info-icon` (44px green-pale tile) + `.info-label` (small uppercase muted) + `.info-link` (green link with an `.arrow` that nudges on hover). Used for the hero key-info cards and the Contact section.

## Site sections (in order)
1. **Header** — sticky, logo image (`RAW/Favicon Pannochka_new.png`), nav links, PL/UA toggle, mobile hamburger
2. **Hero** — full-screen silent looping exterior video (`#hero-video`, `images/Videos/pannoczka-main.mp4`, autoplay/loop/muted/playsinline, NO controls; `.hero-overlay` gradient on top; was a static photo until 2026-10-04), eyebrow + Montserrat headline ("market" in gold-light, no shimmer), two CTA buttons. The old hours/address chips are gone; instead a **key-info card row** sits right after the hero, overlapping its bottom edge (`-mt-24 md:-mt-28`, `z-20`; the hero content has `pb-36 md:pb-44` so the buttons are never covered): an hours card (`hc-hours-l`, `hc-wdays`, `hc-wend` — SHORT day names `T.*.hero.wdays/wend` = Pn–Pt/Sb–Nd, Пн–Пт/Сб–Нд, because the full names wrapped on phones/tablets) and an address card (`hc-addr-l`, `hc-dir` link → Google Maps). Labels reuse `T.*.contact.hoursL/addrL`.
3. **About** (`#about`) — store description mentioning "produkty z Ukrainy i Wschodu", grand-opening video (`#about-video`, `images/Videos/video.mp4`, autoplay/muted/loop/playsinline/controls, 0.9x playbackRate) in place of the old static poster image
4. **Assortment** (`#assortment`) — label/title header, then a standalone **category-card grid** (`sm:grid-cols-2 lg:grid-cols-3`, 5 cards: fish, meat, drinks, sweets, preserves — no image alongside them, see photo-refresh note below), then TWO **photo sliders** with the same design and one shared implementation (see the "Photo sliders" bullet in the index.html architecture section). First the **fresh products slider** (`#fresh-track`, heading `as-fresh-title` / `T.*.assort.fresh.title` = "Różnorodne świeże produkty" / "Різноманітні свіжі продукти") containing ALL 14 photos from `images/Interior/` and nothing else (uncaptioned candid shelf/fridge shots, descriptive PL alt text only). Then the **alcohol & energy drinks slider** (`#alc-track`, heading `as-alc-title` / `T.*.assort.alcohol.title`) containing ALL 11 photos from `images/Asortyment/Alkohol/` and nothing else — A1-A6 bottle shots (captioned, `T.*.assort.alcohol.c1..c6`, ids `as-alc-1..6`) + A11/AA12/Alkohol13/Alkohol14 promo posters + the Beer.jpg fridge shot as the last slide (all uncaptioned). Both are hand-rolled vanilla-JS carousels (no library), `overflow-x:auto` + `scroll-snap-type:x mandatory` for free touch/trackpad swipe, `.slider-nav-btn` prev/next (`sliderMove()`, disabled at either end) + `.slider-dot` position dots driven by one rAF-throttled `scroll` listener per track that derives the active index from `scrollLeft / (slide width + gap)`, special-cased to snap to the *last* dot once `scrollLeft` hits the scrollable max (with ~3 slides visible at once the last slide(s) can't scroll fully flush-left, so plain division under-counts there — don't simplify that check away). ⚠️ **`loading="lazy"` must NOT be added to the sliders' `<img>` tags** — it was tried during the strict-folder-split rebuild and caused a real bug: as each lazy image loaded in, its slide's geometry changed, and because the track has `scroll-snap-type: x`, the browser re-snapped `scrollLeft` to maintain alignment, silently dragging the initial scroll position away from 0 (reproduced reliably, confirmed by removing `loading="lazy"` from just these 10 images and re-testing — the masonry sections below are unaffected since they don't use scroll-snap). The drinks category card (`c-drink-d` / `T.*.assort.drink.d`) mentions alcohol and energy drinks alongside water/juice/soda. ⚠️ **Folder-split history**: this section briefly held a unified "clean shot" masonry (9 Pannoczka photos + 6 Alkohol bottle shots together, no strict folder rule) instead of this slider — the client explicitly reverted that in favor of strict per-folder separation (Alkohol/ → the alcohol slider here, images/Interior/ → the fresh slider here, root Asortyment/ → Gallery masonry only, zero mixing in any direction). If you're tempted to merge the two again, don't — ask first, it's been tried and undone once already.
5. **Gallery** (`#gallery`) — label/title/description header (`T.*.gallery.desc` reads "new arrivals, promotions, and the full assortment" rather than the old "peek inside our store" copy, to match the new content) + one **masonry** (`columns-2 sm:columns-3 lg:columns-4`) containing ALL 21 photos from the ROOT of `images/Asortyment/` (never `/Alkohol/`) and nothing else: 9 clean-shot brand photos (captioned via `T.*.assort.brands.*`, ids `pg-*`) + 12 promo posters (Baguette1, Flint1, GoldenShips, GotoshokVeres, Grinky1, Kontik, MASLO1, Oil1, Pelmeni, Salo, Soda, TavernChips — uncaptioned) — plus the `.gal-teaser` "coming soon" card (`id="g-teaser"`, translated via `T.*.gallery.teaser`), all as `break-inside-avoid` masonry items (`loading="lazy"` is fine here — no scroll-snap involved, see the Assortment slider warning above for why that combo is dangerous specifically). Every photo item uses `.gal-wrap`/`.gal-img`/`.gal-zoom-icon` hover + `.reveal` scroll-animation, lightbox-enabled via `openLb()`; the 9 captioned ones additionally carry a `.prod-card`-style gradient caption `<div>` with `pointer-events-none` (so a click on the caption text still reaches the underlying `<img>` and opens the lightbox — don't drop that attribute if touching this markup). The teaser card has no `onclick`/lightbox (not a photo) and uses its own `.gal-teaser:hover` lift. ⚠️ **Folder-split history**: before the current strict split, this section held real store/product candid photos from `RAW/` + `images/Interior/` (`images/Interior/` was retired from here earlier and now feeds the Assortment fresh-products slider instead) and, briefly, only the "promo poster"-style photos while clean-shot photos lived in Assortment instead — the client reverted THAT split too, so now it's simply "everything at the Asortyment/ root, no exceptions." (Two even older section structures — a separate "Nasze wnętrze" section, and a fixed `grid-cols-2 md:grid-cols-3` with hand-placed spans — are gone for good; don't resurrect either without being asked.)
6. **Contact** (`#contact`, deep green) — three white `.info-card`s: Address (+ red "Sprawdź dojazd w Google Maps" CTA `#ct-cta`), Opening hours (full day names, `ct-wdays`/`ct-wend`), E-mail + FB/IG buttons; below, the Google Maps iframe (lg: 3/5 width, absolutely filled, same height as its neighbour) next to a white "Leave a Review" card (green `.btn-lift` button `#ct-review-cta` + QR code `images/qr-review.png`, `id="ct-review-*"`)
7. **Footer** — copyright, email, FB + IG icon buttons

## Cloudflare deployment
- Account ID: e8eeb644ca96a2d4cb2a9674ea599e79
- Deploy command: `npx wrangler pages deploy . --project-name pannoczka-market --branch main`
  ⚠️ `deploy .` uploads EVERYTHING in the folder, tracked or not — an untracked scratch file (e.g. a raw 24MB video once sat in images/Videos/) would go public. Prefer deploying a clean export of the pushed commit: `git archive HEAD | tar -x -C "$TMP/deploy"`, then `npx wrangler pages deploy "$TMP/deploy" --project-name pannoczka-market --branch main` (the last deploys did this). Commit every new asset first, or it won't ship.
- Custom domains bound via Cloudflare API (both pannoczka.pl and www.pannoczka.pl are active). A deploy appears on its `*.pages.dev` URL first; the custom domains can lag ~15–20s.
- Auth: the wrangler OAuth login in `~/.wrangler/config/default.toml` has expired, so deploys need `CLOUDFLARE_API_TOKEN` (+ `CLOUDFLARE_ACCOUNT_ID` above), which the client supplies per deploy. Set them inline for that one command (the Bash tool doesn't keep env vars between calls); never write a token to a file or commit it.
- Pages quirks worth knowing when verifying: `/page.html` 308-redirects to `/page` (use `curl -L`); unknown paths fall back to index.html with HTTP 200 (SPA mode), so check the content-type, not just the status, when probing a file that should NOT exist; byte-range requests return 206 on the custom domains (Safari needs that for video) but not on the `*.pages.dev` URL.

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
