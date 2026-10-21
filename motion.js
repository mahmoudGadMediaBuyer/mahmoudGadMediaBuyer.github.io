// =========================================================
// Scroll motion — reveals, word-by-word headings, count-ups, hero depth.
//
// Nothing here hides content on its own: every hidden state in style.css
// sits under html.motion, which index.html only sets when the visitor has
// not asked for reduced motion (and removes again if this file never runs).
// Only transform, opacity and clip-path move, so scrolling stays smooth.
// =========================================================
(() => {
  window.__motion = true;

  const root = document.documentElement;
  const enabled = () => root.classList.contains('motion');
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // one entry per kind of thing that animates in; the look lives in style.css
  const REVEAL = [
    '.hero-title', '.hero-sub', '.hero-ctas', '.stat-card', '.marquee',
    '.section .eyebrow', '.section-title', '.section-desc',
    '.tools-title', '.tools-heading', '.case-filters',
    '.case-card', '.service-card', '.process-step', '.loop-stage', '.loop-read', '.insight-slide', '.insight-list > *', '.insight-more',
    '.tag-list', '.tools-grid', '.faq-item', '.contact-info', '.contact-form',
  ].join(',');
  const WORDS = '.hero-title, .section-title, .tools-heading';
  const CASCADE = '.tag-list, .tools-grid';                        // children ripple in
  const COUNT = '.stat-value, .case-stat-value';

  // the hero plays as one sequence on load instead of by scroll order
  const HERO_DELAYS = [
    ['.hero-sub', 380], ['.hero-ctas', 520],
    ['.stat-card', 680, 90], ['.marquee', 1060, 140],
  ];

  // ---------- headings: every word rises out of its own mask ----------
  function splitWords(el) {
    if (el.querySelector('.wi')) return;              // already split for this text
    let n = 0;
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === Node.ELEMENT_NODE) { walk(child); return; }
        if (child.nodeType !== Node.TEXT_NODE || !child.textContent.trim()) return;
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (!part.trim()) { frag.appendChild(document.createTextNode(part)); return; }
          const w = document.createElement('span');
          const wi = document.createElement('span');
          w.className = 'w';
          wi.className = 'wi';
          wi.textContent = part;
          wi.style.setProperty('--wi', n++);
          w.appendChild(wi);
          frag.appendChild(w);
        });
        child.replaceWith(frag);
      });
    };
    walk(el);
    el.classList.add('split');
    paintAccent(el);
  }

  // The accent is gradient text. Once its words are separate boxes each would
  // restart the gradient, so every word is handed its slice of one gradient
  // sized to the whole phrase.
  function paintAccent(scope) {
    $$('.accent', scope).forEach((accent) => {
      const words = $$('.wi', accent);
      if (!words.length) return;
      accent.classList.add('accent-split');
      const box = accent.getBoundingClientRect();
      words.forEach((wi) => {
        const r = wi.parentElement.getBoundingClientRect();   // the mask never moves
        wi.style.backgroundSize = `${box.width}px ${box.height}px`;
        wi.style.backgroundPosition = `${box.left - r.left}px ${box.top - r.top}px`;
      });
    });
  }

  // ---------- numbers count up, then land on the exact original text ----------
  function countUp(el, delay) {
    if (el.dataset.counted) return;
    const text = el.textContent.trim();
    const m = text.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/s);
    if (!m) return;
    el.dataset.counted = '1';
    const [, pre, num, post] = m;
    const target = parseFloat(num.replace(/,/g, ''));
    const dec = (num.split('.')[1] || '').length;
    const fmt = (v) => (num.includes(',')
      ? v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec })
      : v.toFixed(dec));
    el.textContent = pre + fmt(0) + post;
    let start = null;
    const tick = (now) => {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / 1500);
      if (t < 1) {
        const eased = 1 - Math.pow(2, -10 * t);             // fast start, soft landing
        el.textContent = pre + fmt(target * eased) + post;
        requestAnimationFrame(tick);
      } else {
        el.textContent = text;
      }
    };
    setTimeout(() => requestAnimationFrame(tick), delay);
  }

  // ---------- reveal on scroll ----------
  // A language switch rebuilds every card; recounting the ones already on
  // screen from zero reads as a glitch, so right after a switch they don't.
  const bootAt = performance.now();
  let renders = 0;
  let lastSwitch = -Infinity;
  const reveal = (el, delay) => {
    // the hero's staged timing is for the first moments after load; reached
    // later by scrolling, the same pieces should answer straight away
    const staged = el.dataset.md && performance.now() - bootAt < 1800;
    const d = staged ? Number(el.dataset.md) : delay;
    el.style.setProperty('--d', `${d}ms`);
    el.classList.add('m-in');
    if (performance.now() - lastSwitch < 900) return;
    const numbers = el.matches(COUNT) ? [el] : $$(COUNT, el);
    numbers.forEach((n) => countUp(n, d + 250));
  };

  const io = 'IntersectionObserver' in window && new IntersectionObserver((entries) => {
    const rtl = root.dir === 'rtl';
    // things arriving together play in reading order: row by row, then across
    entries
      .filter((e) => e.isIntersecting)
      .map((e) => ({ el: e.target, r: e.boundingClientRect }))
      .sort((a, b) => (Math.round(a.r.top / 24) - Math.round(b.r.top / 24))
        || (rtl ? b.r.left - a.r.left : a.r.left - b.r.left))
      .forEach(({ el }, i) => {
        reveal(el, Math.min(i, 8) * 80);
        io.unobserve(el);
      });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  // Runs after every render: first load, and each language switch, which
  // rebuilds the cards and rewrites the headings.
  function refresh() {
    if (!enabled() || !io) { root.classList.remove('motion'); return; }
    if (renders++ > 0) lastSwitch = performance.now();
    $$(WORDS).forEach(splitWords);
    $$(CASCADE).forEach((list) => [...list.children].forEach((c, i) => c.style.setProperty('--ci', i)));
    HERO_DELAYS.forEach(([sel, base, step = 0]) => {
      $$(sel).forEach((el, i) => { el.dataset.md = base + i * step; });
    });
    $$(REVEAL).forEach((el) => { if (!el.classList.contains('m-in')) io.observe(el); });
  }
  document.addEventListener('site:rendered', refresh);

  // headings whose words already played get re-split with the new language;
  // play those right away rather than leaving them hidden until re-observed
  document.addEventListener('site:rendered', () => {
    $$(WORDS).forEach((el) => { if (el.classList.contains('m-in')) el.style.setProperty('--d', '0ms'); });
  });

  // ---------- filtering replays the cards that remain ----------
  document.getElementById('caseFilters')?.addEventListener('click', (e) => {
    if (!enabled() || !e.target.closest('.filter-chip')) return;
    // script.js applies the filter in its own handler; wait for it
    requestAnimationFrame(() => {
      $$('#workGrid .case-card:not([hidden])').forEach((card, i) => {
        card.classList.remove('m-refilter');
        void card.offsetWidth;                              // restart the animation
        card.style.setProperty('--d', `${Math.min(i, 8) * 50}ms`);
        card.classList.add('m-refilter');
      });
    });
  });

  // ---------- scroll-linked: progress bar, hero depth, drifting glow ----------
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.prepend(bar);

  const hero = document.querySelector('.hero');
  let queued = false;
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      const y = window.scrollY;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty('--sp', max > 0 ? (y / max).toFixed(4) : '0');
      if (hero && enabled()) {
        const p = Math.min(1, Math.max(0, y / hero.offsetHeight));
        hero.style.setProperty('--hp', p.toFixed(4));
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { onScroll(); paintAccent(document); });
  document.fonts?.ready.then(() => paintAccent(document));
  onScroll();
})();
