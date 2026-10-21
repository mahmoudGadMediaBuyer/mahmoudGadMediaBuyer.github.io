# Mahmoud Gad — Portfolio

Senior Performance Media Buyer. Static site, no build step, no dependencies.

**Live:** https://mahmoudgadmediabuyer.github.io

---

## Editing content

Almost everything is data. You should rarely need to touch the HTML.

| File | What's in it |
|---|---|
| `data-config.js` | Case studies, client logos, services, tools, FAQ |
| `i18n.js` | All English and Arabic copy |
| `index.html` | Page structure, meta tags, analytics slot |
| `style.css` | Design tokens at the top (`:root`) |
| `script.js` | Behaviour — rarely needs changing |

### Common edits

**Add a client logo** — drop a PNG in `assets/logos/`, then add a line to `clients` in `data-config.js`:
```js
{ name: "Brand", logo: "assets/logos/brand.png", bg: "#f6f6f5" }
```
`bg` is the tile colour. `scale: 96` makes a mark fill more of its tile.

**Add a client with several screenshots** — use `proofs` instead of `proof` in `work`
(see "Charity Organization" in `data-config.js`). The card shows a count badge and the
screenshots open side by side; clicking one opens it full size with arrows and ← → keys.
Give a screenshot a name with `{ src: "...", label: "Meta" }`. Tag every platform the client ran
on (`["Meta", "TikTok", ...]`) so each platform filter finds it.

**Edit the FAQ** — `faq` in `data-config.js`; the Arabic sits in `i18n.js`.

**Change Arabic wording** — `i18n.js`, under `ar`.

**Booking calendar** — the contact section shows the Cal.com event named in
`booking.calLink` (`data-config.js`). Hours, length and the Google Meet link are
set in Cal.com itself; remove `calLink` to hide the calendar.

---

## Still to do

- [ ] Install analytics — paste the snippet into the marked slot in `index.html`
- [ ] Refresh `assets/img/og-image.jpg` (the link-preview image) with the current headline

---

## Deploying

GitHub Pages serves `main` from the repository root. Push and it's live.

If a custom domain is added later, update the four absolute URLs in the
`SOCIAL PREVIEW` block of `index.html` — WhatsApp and LinkedIn fetch the preview
image server-side and can't resolve relative paths.
