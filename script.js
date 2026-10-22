// =========================================================
// منطق الموقع — بيقرأ البيانات من data-config.js ويعرضها
// مفيش حاجة محتاج تعدّلها هنا في الغالب
// =========================================================

// Corrected designs keep their filenames, so a browser that has seen the old
// file keeps showing it. Every proof URL carries this script's own ?v=, which
// means bumping the version in index.html refreshes the images too.
// (document.currentScript only exists while this file first runs.)
const ASSET_V = document.currentScript
  ? new URL(document.currentScript.src, location.href).searchParams.get('v') || ''
  : '';
const withV = (src) => (ASSET_V && !/^(https?:|data:)/.test(src)
  ? `${src}${src.includes('?') ? '&' : '?'}v=${ASSET_V}`
  : src);

document.addEventListener('DOMContentLoaded', () => {

  // ---------- theme toggle ----------
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  const syncThemeIcon = () => {
    themeToggle.textContent = root.getAttribute('data-theme') === 'light' ? '☀️' : '🌙';
  };
  syncThemeIcon();

  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (next === 'dark') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', next);
    syncThemeIcon();
  });

  // ---------- mobile nav ----------
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  mainNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mainNav.classList.remove('open'))
  );

  // ---------- footer year ----------
  document.getElementById('year').textContent = new Date().getFullYear();

  // ---------- marquee ----------
  const marqueeTrack = document.getElementById('marqueeTrack');
  // One "half" is repeated 3x so it is wider than the viewport, then the whole
  // half is duplicated — the loop wraps on exactly half the track width.
  const platformSet = [...SITE_DATA.marquee, ...SITE_DATA.marquee, ...SITE_DATA.marquee];
  marqueeTrack.innerHTML = [...platformSet, ...platformSet]
    .map(m => `<span class="marquee-item">${m}</span>`).join('');

  // ---------- client logo marquee ----------
  const clientTrack = document.getElementById('clientTrack');
  if (clientTrack && Array.isArray(SITE_DATA.clients)) {
    // 'tile' = each logo on a white card · 'plain' = logo straight on the ground
    const tiled = SITE_DATA.logoStyle !== 'plain';
    // duplicated so the -50% translate loops seamlessly
    const loop = [...SITE_DATA.clients, ...SITE_DATA.clients];
    clientTrack.innerHTML = loop.map((c, i) => {
      const dupe = i >= SITE_DATA.clients.length;
      const img = `<img class="client-logo" src="${c.logo}" alt="${dupe ? '' : c.name}"
           loading="lazy" decoding="async"${dupe ? ' aria-hidden="true"' : ''}>`;
      // bg is derived per brand from the logo's own dominant colour;
      // scale lets an individual mark fill more of its tile
      const style = `background:${c.bg || '#f7f7f5'}` +
                    (c.scale ? `;--s:${c.scale}` : '');
      return tiled ? `<span class="client-tile" style="${style}">${img}</span>` : img;
    }).join('');
  }

  // ---------- drag-scrollable marquees ----------
  // The CSS keyframes still run if this never executes, so the strips are
  // never dead — this upgrades them to a JS loop we can also drag.
  function makeDraggable(track, speed) {
    if (!track) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    track.classList.add('marquee-js');
    track.parentElement.classList.add('marquee-drag');
    track.querySelectorAll('img').forEach(i => (i.draggable = false));

    let half = 0, offset = 0, ready = false;
    const measure = () => {
      const w = track.scrollWidth / 2;      // content is duplicated
      if (!w) return;
      half = w;
      if (!ready) { offset = speed > 0 ? -half : 0; ready = true; }
    };
    measure();
    window.addEventListener('resize', measure);
    track.querySelectorAll('img').forEach(img => {
      if (!img.complete) img.addEventListener('load', measure, { once: true });
    });

    let dragging = false, startX = 0, startOffset = 0;
    let lastX = 0, lastT = 0, velocity = 0, prevFrame = 0;

    track.addEventListener('pointerdown', (e) => {
      dragging = true; velocity = 0;
      startX = lastX = e.clientX;
      startOffset = offset;
      lastT = performance.now();
      try { track.setPointerCapture(e.pointerId); } catch (_) {}
    });

    track.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      offset = startOffset + (e.clientX - startX);
      const now = performance.now();
      const dt = now - lastT;
      if (dt > 0) {
        // clamped: a very fast flick (or a stalled frame) must not produce an
        // absurd velocity that the momentum then coasts on
        const v = (e.clientX - lastX) / dt * 1000;   // px per second
        velocity = Math.max(-2400, Math.min(2400, v));
      }
      lastX = e.clientX; lastT = now;
    });

    const release = (e) => {
      if (!dragging) return;
      dragging = false;
      try { track.releasePointerCapture(e.pointerId); } catch (_) {}
    };
    track.addEventListener('pointerup', release);
    track.addEventListener('pointercancel', release);

    const tick = (now) => {
      if (!ready) measure();
      // seconds since the last frame, so speed is frame-rate independent
      const dt = prevFrame ? Math.min(0.05, (now - prevFrame) / 1000) : 0;
      prevFrame = now;

      if (!dragging) {
        if (Math.abs(velocity) > 4) {
          offset += velocity * dt;     // let the flick coast…
          velocity *= 0.94;
        } else {
          velocity = 0;
          if (!reduced) offset += speed * dt;   // …then hand back to auto-scroll
        }
      }
      if (half > 0) {
        // modulo, not a single add/subtract: a big jump (fast flick, dropped
        // frame, backgrounded tab) can overshoot by more than one loop length
        offset %= half;
        if (offset > 0) offset -= half;
      }
      track.style.transform = `translate3d(${offset}px,0,0)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // px per second · negative drifts left, positive drifts right (mirrors the CSS)
  makeDraggable(marqueeTrack, -70);
  makeDraggable(clientTrack, 78);

  // ---------- language ----------
  const LANGS = ['en', 'ar'];
  let lang = localStorage.getItem('lang');
  if (!LANGS.includes(lang)) lang = (navigator.language || '').startsWith('ar') ? 'ar' : 'en';

  const L = () => I18N[lang];
  const pick = (path) => path.split('.').reduce((o, k) => (o || {})[k], L());
  // t() falls back to the English source string when no translation exists,
  // so a missing entry degrades to English instead of rendering blank.
  const t = (s) => (L().dict && L().dict[s]) || s;

  function applyStaticCopy() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = pick(el.dataset.i18n); if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = pick(el.dataset.i18nHtml); if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const v = pick(el.dataset.i18nPh); if (v != null) el.placeholder = v;
    });
    // icon-only controls carry their name in the label, not in their text
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const v = pick(el.dataset.i18nAria); if (v != null) el.setAttribute('aria-label', v);
    });
    document.title = lang === 'ar'
      ? 'محمود جاد — Senior Performance Media Buyer'
      : 'Mahmoud Gad — Senior Performance Media Buyer';
  }

  // ---------- numbers computed from SITE_DATA.work[].results ----------
  const FX = SITE_DATA.fx || { USD: 1 };
  const toUSD = (v, cur) => v / (FX[cur] || 1);
  const fromUSD = (v, cur) => v * (FX[cur] || 1);
  const compact = (n) => {
    const a = Math.abs(n);
    if (a >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
    if (a >= 1e4) return `${Math.round(n / 1e3)}K`;
    if (a >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
    return Math.round(n).toLocaleString('en-US');
  };
  // hero figures only ever round down, so "+" is always true
  const floorCompact = (n) => {
    if (n >= 1e6) return `${Math.floor(n / 1e5) / 10}M`;
    if (n >= 1e3) return `${Math.floor(n / 1e3)}K`;
    return String(Math.floor(n));
  };
  const fmtRoas = (r) => `${r >= 100 ? Math.round(r) : r >= 10 ? r.toFixed(1) : r.toFixed(2)}x`;
  // one case, optionally limited to one platform, in the case's own currency
  function caseTotals(item, platform) {
    const cur = item.currency || 'USD';
    const rows = (item.results || []).filter(r => !platform || r.platform === platform);
    const sum = (k) => rows.reduce((a, r) => a + fromUSD(toUSD(r[k] || 0, r.currency), cur), 0);
    return { cur, rows: rows.length, spend: sum('spend'), revenue: sum('revenue'), orders: rows.reduce((a, r) => a + (r.orders || 0), 0) };
  }

  // survives renderContent() so a language switch keeps the active filter
  const filterState = { market: 'all', platform: 'all' };


  function applyFilters() {
    const cards = [...document.querySelectorAll('#workGrid .case-card')];
    const count = document.getElementById('filterCount');
    let shown = 0;
    cards.forEach(c => {
      const ok = (filterState.market === 'all' || c.dataset.market === filterState.market)
              && (filterState.platform === 'all' || c.dataset.platform.split('|').includes(filterState.platform));
      c.hidden = !ok;
      if (ok) shown++;
    });
    if (count) count.textContent = pick('filters.count')
      .replace('{n}', shown).replace('{total}', cards.length);
  }

  // ---------- the loop, on its own clock ----------
  // It walks step by step so a visitor sees the cycle without touching
  // anything; hovering or focusing a step takes it over and holds there.
  let loopTimer = null;
  function startLoop(steps) {
    const flow = document.getElementById('systemFlow');
    const note = document.getElementById('systemNote');
    const name = document.getElementById('systemStepName');
    const sweep = document.getElementById('loopSweep');
    const stage = document.getElementById('loopStage');
    if (!flow || !steps.length) return;
    clearInterval(loopTimer);
    const items = [...flow.querySelectorAll('.loop-node')];
    const rtl = document.documentElement.dir === 'rtl';
    const turn = 360 / steps.length;
    let at = 0;
    let spin = 0;                        // keeps counting up so the arc never rewinds
    let held = false;

    const show = (i) => {
      const from = at;
      at = (i + steps.length) % steps.length;
      items.forEach((el, n) => el.classList.toggle('is-active', n === at));
      if (name) name.textContent = t(steps[at].name);
      if (note) note.textContent = t(steps[at].desc || '');
      if (!stage) return;
      // the arc always turns forward, so a jump back to step one still reads
      // as closing the circle rather than rewinding it
      spin += (at - from + steps.length) % steps.length;
      stage.style.setProperty('--at', spin);
      if (sweep) {                       // redraw the sweep from the new step
        sweep.style.animation = 'none';
        void sweep.getBoundingClientRect();
        sweep.style.animation = '';
      }
    };
    // in Arabic the ring runs the other way; the svg is mirrored in CSS, so the
    // sweep keeps counting forward here and comes out turning the right way
    stage?.style.setProperty('--turn', `${turn}deg`);
    const advance = () => { if (!held) show(at + 1); };

    show(0);
    // a visitor who asked for less motion gets the same content, no cycling
    if (document.documentElement.classList.contains('motion')) {
      loopTimer = setInterval(advance, 2600);
    }

    const take = (e) => {
      const btn = e.target.closest('.loop-dot');
      if (!btn) return;
      held = true;
      show(Number(btn.dataset.i));
    };
    flow.addEventListener('pointerover', take);
    flow.addEventListener('focusin', take);
    flow.addEventListener('click', take);
    flow.addEventListener('pointerleave', () => { held = false; });
    flow.addEventListener('focusout', (e) => {
      if (!flow.contains(e.relatedTarget)) held = false;
    });
  }

  function renderContent() {
    // ---------- what I do ----------
    const whatIDoList = document.getElementById('whatIDoList');
    whatIDoList.innerHTML = SITE_DATA.whatIDo.map(s => `<li>${t(s)}</li>`).join('');

    // ---------- work / case studies ----------
    const initials = (name) => name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
    // the ad platforms, as opposed to campaign-type tags like "Search"
    const PLATFORMS = ['Google Ads', 'Meta', 'Snapchat', 'TikTok'];

    // revenue cases get the same fixed set; lead-gen cases keep their own stats
    const cardStats = (item) => {
      const tt = caseTotals(item);
      if (!tt.revenue) return item.stats || [];
      // approximate cases (figures from memory of reports) say so with "~"
      const ap = item.approx ? '~' : '';
      const out = [
        { label: 'Spend', value: `${ap}${compact(tt.spend)} ${tt.cur}` },
        { label: item.revenueLabel || 'Revenue', value: `${ap}${compact(tt.revenue)} ${tt.cur}` },
        { label: 'ROAS', value: item.approx ? `~${(tt.revenue / tt.spend).toFixed(1)}x` : fmtRoas(tt.revenue / tt.spend) },
      ];
      if (tt.orders) out.push({ label: item.ordersLabel || 'Orders', value: compact(tt.orders) });
      return out;
    };

    // ---------- hero stats ----------
    const hs = SITE_DATA.heroStats || {};
    const allRows = SITE_DATA.work.flatMap(w => w.results || []);
    const totalSpend = hs.spendOverrideUSD || allRows.reduce((a, r) => a + toUSD(r.spend || 0, r.currency), 0);
    const totalOrders = hs.ordersOverride || allRows.reduce((a, r) => a + (r.orders || 0), 0);
    const setStat = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setStat('statSpend', `$${floorCompact(totalSpend)}+`);
    setStat('statOrders', `${floorCompact(totalOrders)}+`);
    if (hs.peakDailyBudgetUSD) setStat('statDaily', `$${floorCompact(hs.peakDailyBudgetUSD)}`);
    if (hs.peakCampaignsPerDay) setStat('statCampaigns', `${hs.peakCampaignsPerDay}+`);

    const workGrid = document.getElementById('workGrid');
    workGrid.innerHTML = SITE_DATA.work.map((item, i) => {
      // `proof` is explicit so the screenshot filename never has to mirror the
      // logo filename (and never leaks a client name into the public path).
      // A client can carry several screenshots (`proofs`); they open as a gallery.
      const proofs = item.proofs || [item.proof];
      return `
      <article class="case-card" data-index="${i}" tabindex="0"
               data-market="${item.place.split('·')[0].trim()}"
               data-platform="${item.tags.filter(tag => PLATFORMS.includes(tag)).join('|')}">
        <div class="case-card-head">
          <div class="case-card-logo${item.logo ? '' : ' logo-missing'}" data-fallback="${initials(t(item.title))}">
            ${item.logo ? `<img src="${item.logo}" alt="" loading="lazy"
                 onerror="this.closest('.case-card-logo').classList.add('logo-missing'); this.remove();">` : ''}
          </div>
          <div>
            <h3 class="case-card-title">${t(item.title)}</h3>
            <span class="case-card-place">${item.place.split('·').map(p => t(p.trim())).join(' · ')}</span>
          </div>
        </div>
        <div class="case-card-stats${cardStats(item).length > 3 ? ' has-4' : ''}">
          ${cardStats(item).map(s => `
            <div>
              <div class="case-stat-label">${t(s.label)}</div>
              <div class="case-stat-value">${s.value}</div>
            </div>
          `).join('')}
        </div>
        <div class="case-card-tags">
          ${item.tags.map(tag => `<span>${t(tag)}</span>`).join('')}
        </div>
        <button type="button" class="case-card-proof-btn btn-cta">${pick('work.proofBtn')}${proofs.length > 1 ? `<span class="proof-count">${proofs.length}</span>` : ''}</button>
      </article>
    `;
    }).join('');


    // ---------- case study filters ----------
    // 18 cards in one flat grid gave a visitor no way to find what applies to
    // them. Two dimensions, AND-combined, no library.
    const filterBar = document.getElementById('caseFilters');
    if (filterBar) {
      const cards = [...workGrid.querySelectorAll('.case-card')];
      // platform holds every platform a client ran on, pipe-separated
      const uniq = (k) => [...new Set(cards.flatMap(c => (c.dataset[k] || '').split('|')).filter(Boolean))];
      const byPlatformOrder = (a, b) => PLATFORMS.indexOf(a) - PLATFORMS.indexOf(b);

      const group = (key, label, values) => `
        <div class="filter-group" role="group" aria-label="${label}">
          <span class="filter-label">${label}</span>
          <button type="button" class="filter-chip${filterState[key] === 'all' ? ' is-on' : ''}" data-key="${key}" data-val="all" aria-pressed="${filterState[key] === 'all'}">${pick('filters.all')}</button>
          ${values.map(v => `<button type="button" class="filter-chip${filterState[key] === v ? ' is-on' : ''}" data-key="${key}" data-val="${v}" aria-pressed="${filterState[key] === v}">${t(v)}</button>`).join('')}
        </div>`;

      filterBar.innerHTML =
        group('market', pick('filters.market'), uniq('market')) +
        group('platform', pick('filters.platform'), uniq('platform').sort(byPlatformOrder)) +
        `<p class="filter-count" id="filterCount" role="status" aria-live="polite"></p>`;

      // Bound once, but every lookup happens at call time. renderContent()
      // replaces these nodes on a language switch, so a handler closing over
      // the first render's cards would end up pointing at detached elements.
      if (!filterBar.dataset.bound) {
        filterBar.dataset.bound = '1';
        filterBar.addEventListener('click', (e) => {
          const chip = e.target.closest('.filter-chip');
          if (!chip) return;
          const { key, val } = chip.dataset;
          filterState[key] = val;
          filterBar.querySelectorAll(`.filter-chip[data-key="${key}"]`).forEach(b => {
            const on = b.dataset.val === val;
            b.classList.toggle('is-on', on);
            b.setAttribute('aria-pressed', String(on));
          });
          applyFilters();
        });
      }

      applyFilters();
    }

    // ---------- services ----------
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = SITE_DATA.services.map(s => `
      <div class="service-card">
        <div class="service-icon">${s.icon}</div>
        <h3 class="service-title">${t(s.title)}</h3>
        <p class="service-desc">${t(s.desc)}</p>
        ${(s.points || []).length ? `<ul class="service-points">${
          s.points.map(pt => `<li>${t(pt)}</li>`).join('')}</ul>` : ''}
      </div>
    `).join('');

    // ---------- how I work ----------
    const processGrid = document.getElementById('processGrid');
    if (processGrid) {
      processGrid.innerHTML = (SITE_DATA.howIWork || []).map((step, i) => `
        <li class="process-step">
          <span class="process-num">${String(i + 1).padStart(2, '0')}</span>
          <h3 class="process-title">${t(step.title)}</h3>
          <p class="process-desc">${t(step.desc)}</p>
        </li>
      `).join('');
    }

    // ---------- the loop the tools serve ----------
    const systemFlow = document.getElementById('systemFlow');
    if (systemFlow) {
      const steps = (SITE_DATA.systemFlow || [])
        .map(step => (typeof step === 'string' ? { name: step } : step));
      // the five steps sit on a ring: the arc sweeping between two of them is
      // the account moving from one to the next, and it never reaches an end
      const rtl = document.documentElement.dir === 'rtl';
      const turn = 360 / steps.length;
      systemFlow.innerHTML = steps.map((step, i) => `
        <li class="loop-node" style="--a:${(rtl ? -1 : 1) * i * turn}deg">
          <button type="button" class="loop-dot" data-i="${i}" aria-describedby="systemNote">
            <span class="loop-num">${String(i + 1).padStart(2, '0')}</span>
            <span class="loop-name">${t(step.name)}</span>
          </button>
        </li>`).join('');
      startLoop(steps);
    }

    // ---------- CV ----------
    // no file named in the config means no section at all, rather than a
    // download button that leads to a 404
    const cvCard = document.getElementById('cvCard');
    const cvBtn = document.getElementById('cvBtn');
    const cv = SITE_DATA.cv || {};
    if (cvCard && cvBtn) {
      cvCard.hidden = !cv.file;
      if (cv.file) {
        cvBtn.href = cv.file;
        cvBtn.setAttribute('download', '');
        const desc = cvCard.querySelector('.cv-desc');
        if (desc && cv.updated) desc.textContent = `${pick('cv.desc')} · ${t(cv.updated)}`;
      }
    }

    // ---------- skills ----------
    // the tools section used to repeat the About chips; it shows the stack now
    const skillsList = document.getElementById('skillsList');
    if (skillsList) skillsList.innerHTML = SITE_DATA.skills.map(s => `<li>${t(s)}</li>`).join('');

    // ---------- tools ----------
    const toolsGrid = document.getElementById('toolsGrid');
    // tools are grouped: a media buyer's stack reads as a system, not a list
    toolsGrid.innerHTML = SITE_DATA.tools.map(group => (group.items ? `
      <div class="tool-group">
        <h4 class="tool-group-title">${t(group.group)}</h4>
        <div class="tool-group-chips">
          ${group.items.map(name => `<span class="tool-chip">${name}</span>`).join('')}
        </div>
      </div>` : `<span class="tool-chip">${typeof group === 'string' ? group : group.name}</span>`
    )).join('');


    // ---------- insights (LinkedIn posts) ----------
    // Embeds go in a horizontal snap rail; posts written in this site's own
    // design stay in the editorial list below it. A post can be either.
    const insightRail = document.getElementById('insightRail');
    const insightList = document.getElementById('insightList');
    const insightMore = document.getElementById('insightMore');

    if (insightList && insightRail) {
      const all = (SITE_DATA.insights || []).filter(p => p.featured !== false);
      const embeds = all.filter(p => p.embed);
      const written = all.filter(p => !p.embed).slice(0, 4);

      // ---- rail of LinkedIn embeds ----
      insightRail.innerHTML = embeds.map((p) => {
        const src = p.embed.startsWith('http')
          ? p.embed
          : `https://www.linkedin.com/embed/feed/update/${p.embed}`;
        // LinkedIn's suggested height varies per post; the card clips to a
        // uniform height so the row reads evenly, and tall posts fade out.
        const h = p.height || 560;
        // Opened straight from disk (file://) LinkedIn refuses to render the
        // embed, so show a link to the post instead of an empty grey frame.
        if (location.protocol === 'file:') {
          const urn = p.embed.startsWith('http') ? '' : p.embed;
          const href = urn ? `https://www.linkedin.com/feed/update/${urn}/` : p.embed;
          return `
          <a class="insight-slide insight-offline" href="${href}" target="_blank" rel="noopener noreferrer">
            <span class="insight-offline-logo" aria-hidden="true">in</span>
            <span class="insight-offline-text">${pick('insights.offline')}</span>
            <span class="insight-offline-cta">${pick('insights.read')}</span>
          </a>`;
        }
        return `
          <div class="insight-slide${h > 620 ? ' is-clipped' : ''}">
            <iframe src="${src}" title="${(p.title || 'LinkedIn post').replace(/"/g, '&quot;')}"
                    height="${h}" frameborder="0" allowfullscreen loading="lazy"></iframe>
          </div>`;
      }).join('');
      insightRail.hidden = !embeds.length;
      document.getElementById('insightNav').hidden = embeds.length < 2;

      // ---- editorial list ----
      insightList.innerHTML = written.map((p, i) => {
        const loc = (lang === 'ar' && p.ar) ? p.ar : p;
        const date = p.date
          ? new Date(p.date).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB',
              { year: 'numeric', month: 'short' })
          : '';
        const meta = [date, loc.category || p.category].filter(Boolean).join(' · ');
        const img = p.image
          ? `<span class="insight-thumb"><img src="${p.image}" alt="" loading="lazy" decoding="async"></span>`
          : '';
        const inner = `
          <span class="insight-index">${String(i + 1).padStart(2, '0')}</span>
          ${img}
          <span class="insight-body">
            <span class="insight-title">${loc.title || ''}</span>
            ${loc.excerpt ? `<span class="insight-excerpt">${loc.excerpt}</span>` : ''}
            ${loc.content ? `<span class="insight-content">${loc.content}</span>` : ''}
            ${meta ? `<span class="insight-meta">${meta}</span>` : ''}
          </span>
          ${p.url ? `<span class="insight-cta">${pick('insights.read')}</span>` : ''}`;
        return p.url
          ? `<a class="insight-item" href="${p.url}" target="_blank" rel="noopener noreferrer">${inner}</a>`
          : `<div class="insight-item is-static">${inner}</div>`;
      }).join('');
      insightList.hidden = !written.length;

      if (!all.length) {
        insightList.hidden = false;
        insightList.innerHTML = `<p class="insight-empty">${pick('insights.empty')}</p>`;
      }
      if (insightMore) insightMore.hidden = !all.length;
    }

    // ---------- FAQ ----------
    // <details>/<summary> is natively accessible: keyboard operable, announced
    // as expandable, and it still works with JavaScript disabled.
    const faqList = document.getElementById('faqList');
    if (faqList && Array.isArray(SITE_DATA.faq)) {
      faqList.innerHTML = SITE_DATA.faq.map((item) => {
        const pending = /^\[ANSWER/.test(item.a);
        const body = pending
          ? `<span class="faq-todo">${item.a}</span>`
          : t(item.a);
        return `
          <details class="faq-item${pending ? ' is-pending' : ''}">
            <summary class="faq-q">${t(item.q)}</summary>
            <div class="faq-a">${body}</div>
          </details>`;
      }).join('');

      // one open at a time — keeps the section short and scannable.
      // Guarded: renderContent() re-runs on language switch and faqList
      // persists, so an unguarded bind would stack a listener each time.
      if (!faqList.dataset.bound) {
      faqList.dataset.bound = '1';
      faqList.addEventListener('toggle', (e) => {
        const el = e.target;
        if (el.tagName !== 'DETAILS' || !el.open) return;
        faqList.querySelectorAll('details[open]').forEach(d => { if (d !== el) d.open = false; });
      }, true);
      }
    }


  }

  // ---------- case study proof lightbox ----------
  // Several screenshots open as a grid first; picking one opens the viewer,
  // which pages through them. A single screenshot skips the grid.
  const lightbox = document.getElementById('proofLightbox');
  const lightboxInner = lightbox.querySelector('.proof-lightbox-inner');
  const lightboxImg = document.getElementById('proofLightboxImg');
  const lightboxTitle = document.getElementById('proofLightboxTitle');
  const lightboxClose = document.getElementById('proofLightboxClose');
  const lightboxBack = document.getElementById('proofBack');
  const lightboxNav = document.getElementById('proofNav');
  const lightboxCounter = document.getElementById('proofCounter');
  const lightboxGrid = document.getElementById('proofGrid');
  const lightboxViewer = document.getElementById('proofViewer');
  let proofList = [];
  let proofIndex = 0;
  let proofTitle = '';
  let proofItem = null;

  // ----- zoom -----
  // Target values are set by gestures; a rAF loop eases the rendered values
  // toward them, which is what makes pan and zoom feel smooth rather than
  // steppy. Mouse: click to zoom, the image then follows the pointer.
  // Touch: double-tap / pinch to zoom, drag to pan, swipe to change image.
  const stage = document.getElementById('proofStage');
  const zoomLevel = document.getElementById('proofZoomLevel');
  const zoomBar = lightbox.querySelector('.proof-zoom');
  const ZMIN = 1, ZMAX = 4, ZSTEP = 1.6, ZTOGGLE = 2.5;
  const Z = { s: 1, tx: 0, ty: 0, ts: 1, ttx: 0, tty: 0, raf: 0, last: 0 };
  const motionOff = window.matchMedia('(prefers-reduced-motion: reduce)');

  // A zoomed image is only as sharp as the bitmap the browser decoded it
  // into, and browsers decode to the size the image is laid out at. Fitted to
  // a phone that is about 330px wide, so zooming to 370% used to stretch a
  // 330px bitmap. `Q` is how much of the current zoom has been handed to
  // layout instead of to the transform: once a zoom settles, the image is
  // re-laid-out at that size and re-decoded, and the transform drops back to
  // 1. All the maths below stays in fitted units, which is what `base` holds.
  let Q = 1;
  let base = { w: 0, h: 0 };
  const measureBase = () => {
    Q = 1;
    // hand the fit back to the stylesheet, then read what it decided
    stage.style.height = '';
    lightboxImg.style.width = '';
    lightboxImg.style.height = '';
    lightboxImg.style.maxWidth = '';
    lightboxImg.style.maxHeight = '';
    base = { w: lightboxImg.offsetWidth, h: lightboxImg.offsetHeight };
    // the stage takes its height from the picture, and the picture is about to
    // grow — hold the height it has now so the dialog doesn't jump on zoom
    if (base.h) stage.style.height = `${stage.clientHeight}px`;
  };
  const bake = () => {
    if (!base.w || Math.abs(Z.s - Q) < 0.002) return;
    // the stage centres the image, so growing it moves its box; note where it
    // is on screen first and translate it back there afterwards
    const before = geo();
    const visX = before.x0 + Z.tx;
    const visY = before.y0 + Z.ty;
    Q = Z.s;
    // the stylesheet's max-width is what fits the image; past that it is in
    // the way, and left on it would squash the picture out of proportion
    lightboxImg.style.maxWidth = 'none';
    lightboxImg.style.maxHeight = 'none';
    lightboxImg.style.width = `${base.w * Q}px`;
    lightboxImg.style.height = `${base.h * Q}px`;
    const after = geo();
    Z.tx = Z.ttx = visX - after.x0;
    Z.ty = Z.tty = visY - after.y0;
  };
  const geo = () => ({
    x0: lightboxImg.offsetLeft, y0: lightboxImg.offsetTop,
    // in fitted units: what the transform scales, not what is laid out
    w: base.w || lightboxImg.offsetWidth,
    h: base.h || lightboxImg.offsetHeight,
    sw: stage.clientWidth, sh: stage.clientHeight,
  });
  const toStage = (cx, cy) => {
    const r = stage.getBoundingClientRect();
    return { x: cx - r.left, y: cy - r.top };
  };
  // smaller than the stage: stay centred; bigger: never show a gap at an edge
  const clampAxis = (t, sc, o, len, S) => {
    const size = len * sc;
    if (size <= S) return (S - size) / 2 - o;
    return Math.min(-o, Math.max(S - size - o, t));
  };
  const clampTargets = () => {
    const g = geo();
    Z.ttx = clampAxis(Z.ttx, Z.ts, g.x0, g.w, g.sw);
    Z.tty = clampAxis(Z.tty, Z.ts, g.y0, g.h, g.sh);
  };
  const applyZoom = () => {
    // A 2D transform on purpose. translate3d pins the image to a composited
    // layer, and a composited layer keeps the bitmap it was rasterised at —
    // the one drawn at the image's fitted size. On a phone that fitted size
    // is about 330px, so zooming to 370% stretched a 330px bitmap and the
    // numbers turned to mush while the same zoom stayed sharp on a desktop.
    // Without the 3D hint the browser re-draws from the decoded image at
    // whatever scale it ends on.
    lightboxImg.style.transform = `translate(${Z.tx}px, ${Z.ty}px) scale(${Z.s / Q})`;
    zoomLevel.textContent = `${Math.round(Z.s * 100)}%`;
  };
  const syncZoomUi = () => {
    const zoomed = Z.ts > 1.01;
    stage.classList.toggle('is-zoomed', zoomed);
    lightboxViewer.classList.toggle('is-zoomed', zoomed);
    zoomBar.querySelector('[data-zoom="out"]').disabled = Z.ts <= ZMIN + 0.001;
    zoomBar.querySelector('[data-zoom="in"]').disabled = Z.ts >= ZMAX - 0.001;
  };
  const frame = (now) => {
    const dt = Math.min(64, now - (Z.last || now));
    Z.last = now;
    const k = motionOff.matches ? 1 : 1 - Math.pow(1 - 0.2, dt / 16.67);
    Z.s += (Z.ts - Z.s) * k;
    Z.tx += (Z.ttx - Z.tx) * k;
    Z.ty += (Z.tty - Z.ty) * k;
    const done = Math.abs(Z.ts - Z.s) < 0.001 && Math.abs(Z.ttx - Z.tx) < 0.3 && Math.abs(Z.tty - Z.ty) < 0.3;
    if (done) { Z.s = Z.ts; Z.tx = Z.ttx; Z.ty = Z.tty; }
    applyZoom();
    if (done) {
      Z.raf = 0; Z.last = 0;
      // dropping the layer hint lets the browser re-rasterise at the new scale,
      // so zoomed numbers come out sharp instead of an upscaled blur
      lightboxImg.style.willChange = 'auto';
      bake();
      applyZoom();
      return;
    }
    Z.raf = requestAnimationFrame(frame);
  };
  const kick = () => {
    lightboxImg.style.willChange = 'transform';
    if (!Z.raf) Z.raf = requestAnimationFrame(frame);
  };
  const resetZoom = (instant) => {
    Z.ts = 1; Z.ttx = 0; Z.tty = 0;
    if (instant) {
      cancelAnimationFrame(Z.raf); Z.raf = 0; Z.last = 0;
      Z.s = 1; Z.tx = 0; Z.ty = 0;
      lightboxImg.style.willChange = 'auto';
      measureBase();
      clampTargets();
      Z.tx = Z.ttx; Z.ty = Z.tty;
      applyZoom();
    } else kick();
    syncZoomUi();
  };
  // keep the image point under (px, py) where it is while the scale changes
  const zoomAt = (sc, px, py, immediate) => {
    sc = Math.min(ZMAX, Math.max(ZMIN, sc));
    const g = geo();
    const cs = immediate ? Z.s : Z.ts, cx = immediate ? Z.tx : Z.ttx, cy = immediate ? Z.ty : Z.tty;
    const u = (px - g.x0 - cx) / cs, v = (py - g.y0 - cy) / cs;
    Z.ts = sc; Z.ttx = px - g.x0 - u * sc; Z.tty = py - g.y0 - v * sc;
    clampTargets();
    if (immediate) { Z.s = Z.ts; Z.tx = Z.ttx; Z.ty = Z.tty; applyZoom(); } else kick();
    syncZoomUi();
  };
  // mouse: the pointer's position across the stage picks what's in view
  const panToPointer = (clientX, clientY) => {
    const g = geo(), p = toStage(clientX, clientY);
    const f = (val, S) => Math.min(1, Math.max(0, (val / S - 0.12) / 0.76));
    const W = g.w * Z.ts, H = g.h * Z.ts;
    Z.ttx = W > g.sw ? -(W - g.sw) * f(p.x, g.sw) - g.x0 : (g.sw - W) / 2 - g.x0;
    Z.tty = H > g.sh ? -(H - g.sh) * f(p.y, g.sh) - g.y0 : (g.sh - H) / 2 - g.y0;
  };
  const stepZoom = (dir) => {
    const g = geo();
    zoomAt(Z.ts * (dir > 0 ? ZSTEP : 1 / ZSTEP), g.sw / 2, g.sh / 2);
  };

  zoomBar.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-zoom]');
    if (!btn) return;
    if (btn.dataset.zoom === 'in') stepZoom(1);
    else if (btn.dataset.zoom === 'out') stepZoom(-1);
    else resetZoom();
  });

  const pointers = new Map();
  let gesture = null;
  let lastTap = { t: 0, x: 0, y: 0 };

  stage.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    try { stage.setPointerCapture(e.pointerId); } catch (_) { /* pointer already gone */ }
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pts = [...pointers.values()];
    if (pts.length === 1) {
      gesture = { type: 'pan', sx: e.clientX, sy: e.clientY, tx: Z.ttx, ty: Z.tty, moved: false, mouse: e.pointerType === 'mouse' };
    } else if (pts.length === 2) {
      gesture = { type: 'pinch', d: Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1, s: Z.s };
    }
  });
  stage.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'mouse' && !pointers.size) {
      if (Z.ts > 1.01) { panToPointer(e.clientX, e.clientY); kick(); }
      return;
    }
    if (!pointers.has(e.pointerId) || !gesture) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (gesture.type === 'pan') {
      const dx = e.clientX - gesture.sx, dy = e.clientY - gesture.sy;
      if (Math.hypot(dx, dy) > 6) gesture.moved = true;
      if (gesture.mouse) {
        if (Z.ts > 1.01) { panToPointer(e.clientX, e.clientY); kick(); }
      } else if (Z.ts > 1.01) {
        Z.ttx = gesture.tx + dx; Z.tty = gesture.ty + dy;
        clampTargets();
        Z.tx = Z.ttx; Z.ty = Z.tty; applyZoom();
      }
    } else if (gesture.type === 'pinch' && pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const mid = toStage((a.x + b.x) / 2, (a.y + b.y) / 2);
      zoomAt(gesture.s * Math.hypot(a.x - b.x, a.y - b.y) / gesture.d, mid.x, mid.y, true);
    }
  });
  const endPointer = (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.delete(e.pointerId);
    const g = gesture;
    if (pointers.size) {
      // lifted one finger of a pinch: carry on panning with the other
      const [p] = [...pointers.values()];
      gesture = { type: 'pan', sx: p.x, sy: p.y, tx: Z.ttx, ty: Z.tty, moved: true, mouse: false };
      return;
    }
    gesture = null;
    if (!g || g.type !== 'pan' || e.type === 'pointercancel') { syncZoomUi(); return; }
    const dx = e.clientX - g.sx, dy = e.clientY - g.sy;
    if (!g.moved) {
      if (g.mouse) {
        if (Z.ts > 1.01) resetZoom();
        else { Z.ts = ZTOGGLE; panToPointer(e.clientX, e.clientY); kick(); syncZoomUi(); }
        return;
      }
      const now = performance.now();
      if (now - lastTap.t < 300 && Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < 30) {
        lastTap.t = 0;
        const p = toStage(e.clientX, e.clientY);
        if (Z.ts > 1.01) resetZoom(); else zoomAt(ZTOGGLE, p.x, p.y);
      } else {
        lastTap = { t: now, x: e.clientX, y: e.clientY };
      }
      return;
    }
    // unzoomed horizontal swipe pages through, in reading direction
    if (!g.mouse && Z.ts <= 1.01 && proofList.length > 1 && Math.abs(dx) > 50 && Math.abs(dx) > 1.5 * Math.abs(dy)) {
      const rtl = document.documentElement.dir === 'rtl';
      showProof(proofIndex + ((dx < 0) !== rtl ? 1 : -1));
    }
  };
  stage.addEventListener('pointerup', endPointer);
  stage.addEventListener('pointercancel', endPointer);
  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    // trackpad pinch arrives as ctrl+wheel with small deltas
    const factor = Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0025));
    if (e.ctrlKey) {
      const p = toStage(e.clientX, e.clientY);
      zoomAt(Z.ts * factor, p.x, p.y);
    } else {
      Z.ts = Math.min(ZMAX, Math.max(ZMIN, Z.ts * factor));
      panToPointer(e.clientX, e.clientY);
      kick(); syncZoomUi();
    }
  }, { passive: false });
  window.addEventListener('resize', () => { if (lightbox.classList.contains('open')) resetZoom(true); });

  const setProofImage = (src) => {
    resetZoom(true);
    if (lightboxImg.getAttribute('src') === src) return;
    const reveal = () => {
      if (lightboxImg.getAttribute('src') === src) lightboxImg.classList.remove('is-loading');
    };
    lightboxImg.classList.add('is-loading');
    // the next picture has its own fitted size, so measure it on arrival
    lightboxImg.addEventListener('load', () => { resetZoom(true); }, { once: true });
    lightboxImg.addEventListener('load', reveal, { once: true });
    lightboxImg.addEventListener('error', reveal, { once: true });
    lightboxImg.src = src;
  };

  const inViewer = () => !lightboxViewer.hidden;

  // Anything still marked [STORY: …] is a prompt in data-config.js, not content
  const written = (v) => typeof v === 'string' && v.trim() && !/^\[STORY:/.test(v.trim());

  // The case opens as a story — challenge, what changed, strategy, results —
  // with the screenshots underneath as proof. Empty parts are left out, so a
  // case with no story written yet still opens straight onto its screenshots.
  const storyHTML = (item) => {
    const st = item.story || {};
    const changes = (st.changes || []).filter(written);
    const strategy = (st.strategy || []).filter(r => written(r.role));
    const rows = item.results || [];
    const tt = caseTotals(item);
    const block = (key, body) => `<section class="story-block"><h3>${pick(`caseStudy.${key}`)}</h3>${body}</section>`;
    let html = '';
    // a fuller story: one headline, the numbers that matter, then the work in stages
    if (written(st.meta)) html += `<p class="story-meta">${t(st.meta)}</p>`;
    if (written(st.headline)) html += `<p class="story-headline">${t(st.headline)}</p>`;
    const keys = (st.keyNumbers || []).filter(k => written(k.value));
    if (keys.length) html += `<ul class="story-keys">${keys
      .map(k => `<li><b>${k.value}</b><span>${t(k.label)}</span></li>`).join('')}</ul>`;
    const paras = (v) => [].concat(v || []).filter(written).map(x => `<p>${t(x)}</p>`).join('');
    if (Array.isArray(st.challenge) ? st.challenge.some(written) : written(st.challenge)) {
      html += block('challenge', paras(st.challenge));
    }
    (st.sections || []).forEach(sec => {
      const items = (sec.items || []).filter(it => written(typeof it === 'string' ? it : it.text));
      if (!items.length) return;
      html += `<section class="story-block"><h3>${t(sec.title)}</h3>${written(sec.intro) ? `<p class="story-intro">${t(sec.intro)}</p>` : ''}<ul class="story-list">${items
        .map(it => (typeof it === 'string'
          ? `<li>${t(it)}</li>`
          : `<li><strong>${t(it.lead)}</strong> ${t(it.text)}</li>`)).join('')}</ul></section>`;
    });
    if (Array.isArray(st.outcome) ? st.outcome.some(written) : written(st.outcome)) {
      html += block('results', paras(st.outcome));
    }
    const credits = (st.credits || []).filter(c => written(c.value));
    if (credits.length) html += `<dl class="story-credits">${credits
      .map(c => `<div><dt>${t(c.label)}</dt><dd>${t(c.value)}</dd></div>`).join('')}</dl>`;
    if (changes.length) html += block('changes', `<ul class="story-list">${changes.map(c => `<li>${t(c)}</li>`).join('')}</ul>`);
    if (strategy.length) html += block('strategy', `<ul class="story-strategy">${strategy
      .map(r => `<li><span class="story-plat">${r.platform}</span><span class="story-role">${t(r.role)}</span></li>`).join('')}</ul>`);
    // a story that quotes its own source of truth can leave the platform table out
    if (rows.length && tt.revenue && st.table !== false) {
      const money = (v) => `${compact(v)} ${tt.cur}`;
      const cell = (r, k) => (r[k] ? money(fromUSD(toUSD(r[k], r.currency), tt.cur)) : '—');
      // narrow screens stack each row into label/value pairs, so the columns
      // carry their own headings rather than scrolling out of sight
      const heads = [pick('caseStudy.platform'), pick('caseStudy.spend'), pick('caseStudy.revenue'), 'ROAS', pick('caseStudy.orders')];
      const row = (cells, cls = '') => `<tr${cls}>${cells
        .map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`;
      html += block('results', `<div class="story-table-wrap"><table class="story-table">
        <thead><tr>${heads.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${rows.map(r => row([t(r.as || r.platform), cell(r, 'spend'), cell(r, 'revenue'),
          r.revenue ? fmtRoas(r.revenue / r.spend) : '—', r.orders ? compact(r.orders) : '—'])).join('')}
        ${row([pick('caseStudy.total'), money(tt.spend), money(tt.revenue),
          fmtRoas(tt.revenue / tt.spend), tt.orders ? compact(tt.orders) : '—'], ' class="story-total"')}</tbody></table></div>`);
    }
    return html ? `${html}<h3 class="story-proof-title">${pick('caseStudy.proof')}</h3>` : '';
  };

  const showGrid = () => {
    resetZoom(true);
    lightboxInner.classList.add('is-grid');
    lightboxGrid.hidden = false;
    lightboxViewer.hidden = true;
    lightboxNav.hidden = true;
    lightboxBack.hidden = true;
    lightboxTitle.textContent = proofTitle;
    lightboxGrid.innerHTML = (proofItem ? storyHTML(proofItem) : '') + proofList.map((p, i) => `
      <button type="button" class="proof-thumb" data-i="${i}">
        <img src="${p.src}" alt="" loading="lazy" decoding="async">
        <span>${p.label ? t(p.label) : i + 1}</span>
      </button>`).join('');
    lightboxGrid.scrollTop = 0;
  };

  const showProof = (i) => {
    proofIndex = (i + proofList.length) % proofList.length;
    const p = proofList[proofIndex];
    setProofImage(p.src);
    lightboxTitle.textContent = p.label ? `${proofTitle} · ${t(p.label)}` : proofTitle;
    lightboxCounter.textContent = `${proofIndex + 1} / ${proofList.length}`;
    // warm the next one so the arrow feels instant
    if (proofList.length > 1) new Image().src = proofList[(proofIndex + 1) % proofList.length].src;
  };

  const showViewer = (i) => {
    lightboxInner.classList.remove('is-grid');
    lightboxGrid.hidden = true;
    lightboxViewer.hidden = false;
    lightboxNav.hidden = proofList.length < 2;
    lightboxBack.hidden = proofList.length < 2;
    showProof(i);
  };

  const openLightbox = (card) => {
    const item = SITE_DATA.work[Number(card.dataset.index)];
    proofItem = item;
    // entries are a path, or { src, label } when the screenshot needs a name
    proofList = (item.proofs || [item.proof])
      .map(p => (typeof p === 'string' ? { src: p } : p))
      .map(p => ({ ...p, src: withV(p.src) }));
    proofTitle = t(item.title);
    trackEvent('case_open', { client: item.title });
    if (proofList.length > 1) showGrid(); else showViewer(0);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  };
  const closeLightbox = () => {
    resetZoom(true);
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  workGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.case-card');
    if (card) openLightbox(card);
  });
  workGrid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.case-card');
      if (card) { e.preventDefault(); openLightbox(card); }
    }
  });
  lightboxClose.addEventListener('click', closeLightbox);
  // a language switch rebuilds the cards; an open case still holds the old
  // language's text, so it closes rather than sitting there half-translated
  document.addEventListener('site:rendered', () => {
    if (lightbox.classList.contains('open')) closeLightbox();
  });
  lightboxGrid.addEventListener('click', (e) => {
    const thumb = e.target.closest('.proof-thumb');
    if (thumb) showViewer(Number(thumb.dataset.i));
  });
  lightboxBack.addEventListener('click', () => {
    const from = proofIndex;
    showGrid();
    lightboxGrid.querySelector(`[data-i="${from}"]`)?.focus();
  });
  lightboxNav.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-dir]');
    if (btn) showProof(proofIndex + Number(btn.dataset.dir));
  });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') {
      if (inViewer() && Z.ts > 1.01) { resetZoom(); return; }
      // one level at a time: viewer → grid → closed
      if (inViewer() && proofList.length > 1) lightboxBack.click(); else closeLightbox();
      return;
    }
    if (!inViewer()) return;
    if (e.key === '+' || e.key === '=') { stepZoom(1); return; }
    if (e.key === '-' || e.key === '_') { stepZoom(-1); return; }
    if (e.key === '0') { resetZoom(); return; }
    if (proofList.length < 2) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    // "next" is the reading direction: right in English, left in Arabic
    const forward = document.documentElement.dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    showProof(proofIndex + (e.key === forward ? 1 : -1));
  });



  // ---------- insights rail arrows ----------
  // Drag-to-scroll is impossible here: each card is a cross-origin iframe that
  // captures the pointer. Native scrolling + buttons is the only reliable way.
  const railNav = document.getElementById('insightNav');
  if (railNav && !railNav.dataset.bound) {
    railNav.dataset.bound = '1';
    railNav.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-dir]');
      if (!btn) return;
      const rail = document.getElementById('insightRail');
      const card = rail.querySelector('.insight-slide');
      if (!card) return;
      const step = card.getBoundingClientRect().width + 20;
      const rtl = document.documentElement.dir === 'rtl';
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      rail.scrollBy({
        left: step * Number(btn.dataset.dir) * (rtl ? -1 : 1),
        behavior: reduced ? 'auto' : 'smooth',
      });
    });
  }

  // ---------- apply + switch ----------
  function setLang(next) {
    lang = next;
    localStorage.setItem('lang', lang);
    applyStaticCopy();
    renderContent();
    // motion.js re-splits headings and watches the fresh cards
    document.dispatchEvent(new CustomEvent('site:rendered'));
    langToggle.textContent = lang === 'ar' ? 'EN' : 'ع';
    langToggle.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  }

  const langToggle = document.getElementById('langToggle');
  langToggle.addEventListener('click', () => setLang(lang === 'ar' ? 'en' : 'ar'));

  setLang(lang);

  // ---------- analytics helper ----------
  // GA4 and PostHog get the event with its details; Clarity gets the name, so its
  // recordings can be filtered to "visitors who booked" and the like. Neither
  // exists on your own devices or local previews (see the head of index.html).
  function trackEvent(name, params) {
    params = params || {};
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
    if (typeof window.clarity === 'function') window.clarity('event', name);
    if (window.posthog && typeof window.posthog.capture === 'function') window.posthog.capture(name, params);
  }
  window.trackEvent = trackEvent;

  // the conversions that actually matter on this page
  document.querySelectorAll('a[href^="https://wa.me"]').forEach(a =>
    a.addEventListener('click', () => trackEvent('whatsapp_click', { location: a.closest('header') ? 'header' : a.closest('.float-cta') ? 'floating_cta' : 'body' })));
  document.querySelectorAll('a[href^="tel:"]').forEach(a =>
    a.addEventListener('click', () => trackEvent('phone_click')));
  document.querySelectorAll('a[href^="mailto:"]').forEach(a =>
    a.addEventListener('click', () => trackEvent('email_click')));
  document.querySelectorAll('a[href*="linkedin.com"]').forEach(a =>
    a.addEventListener('click', () => trackEvent('linkedin_click')));
  const cvLink = document.getElementById('cvBtn');
  if (cvLink) cvLink.addEventListener('click', () => trackEvent('cv_download'));
  // runs after the toggle's own handler, so lang is already the new one
  langToggle.addEventListener('click', () => trackEvent('language_switch', { language: lang }));

  // ---------- floating CTA ----------
  // Shows once the hero is out of view, says something that fits the section
  // being read, shrinks to its button while the visitor scrolls down, and
  // gets out of the way near the contact form, the footer or an open gallery.
  // Dismissing hides it for the rest of the visit.
  const cta = document.getElementById('floatCta');
  if (cta) {
    const ctaText = document.getElementById('floatCtaText');
    const heroEl = document.querySelector('.hero');
    const contactEl = document.getElementById('contact');
    const footerEl = document.querySelector('.site-footer');
    const lightboxEl = document.getElementById('proofLightbox');
    // page order, so the last one scrolled past is the one being read;
    // sections without their own line fall back to the default
    const sections = ['clients', 'work', 'about', 'services', 'process', 'tools', 'insights', 'faq']
      .map(id => document.getElementById(id)).filter(Boolean);
    let dismissed = false;
    try { dismissed = sessionStorage.getItem('ctaDismissed') === '1'; } catch (_) {}
    let lastY = window.scrollY, idle = 0, currentKey = '';
    cta.hidden = false;

    const update = () => {
      const vh = window.innerHeight;
      const pastHero = heroEl.getBoundingClientRect().bottom < vh * 0.35;
      const nearEnd = contactEl.getBoundingClientRect().top < vh * 0.9
        || footerEl.getBoundingClientRect().top < vh;
      const show = !dismissed && pastHero && !nearEnd && !lightboxEl.classList.contains('open');
      cta.classList.toggle('is-shown', show);
      // the section whose top most recently crossed the upper third
      const active = sections.filter(sec => sec.getBoundingClientRect().top < vh * 0.4).pop();
      const key = active ? active.id : 'default';
      if (key !== currentKey) {
        currentKey = key;
        const msg = pick(`cta.${key}`) || pick('cta.default');
        cta.classList.add('is-swapping');
        setTimeout(() => { ctaText.textContent = msg; cta.classList.remove('is-swapping'); }, 180);
      }
    };
    let queued = false;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > lastY + 6) cta.classList.add('is-compact');      // reading on: stay small
      else if (y < lastY - 6) cta.classList.remove('is-compact');
      lastY = y;
      clearTimeout(idle);
      idle = setTimeout(() => cta.classList.remove('is-compact'), 900);   // paused: say the line
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { queued = false; update(); });
    }, { passive: true });
    window.addEventListener('resize', update);
    document.addEventListener('site:rendered', () => { currentKey = ''; update(); });
    new MutationObserver(update).observe(lightboxEl, { attributes: true, attributeFilter: ['class'] });
    document.getElementById('floatCtaClose').addEventListener('click', () => {
      dismissed = true;
      try { sessionStorage.setItem('ctaDismissed', '1'); } catch (_) {}
      update();
      trackEvent('floating_cta_dismiss');
    });
    cta.querySelector('.float-cta-btn').addEventListener('click', () => trackEvent('floating_cta_click', { section: currentKey }));
    update();
  }

  // ---------- back to top ----------
  // It appears once there is enough page behind you to be worth skipping, and
  // the ring around it fills as you read — same --sp the progress bar uses.
  const toTop = document.getElementById('toTop');
  if (toTop) {
    const still = window.matchMedia('(prefers-reduced-motion: reduce)');
    toTop.hidden = false;
    let queued = false;
    const sync = () => {
      queued = false;
      toTop.classList.toggle('is-shown', window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', () => {
      if (!queued) { queued = true; requestAnimationFrame(sync); }
    }, { passive: true });
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: still.matches ? 'auto' : 'smooth' });
      trackEvent('back_to_top');
    });
    sync();
  }

});
