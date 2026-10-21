// =========================================================
// Phone carousels — the case studies and the services.
//
// The CSS does the scrolling and the snapping; this only reports where the
// track is: which card is centred, how far along the rail you are, and how
// much each card should step back. Everything is read from element rects, so
// it behaves the same in Arabic, where scrollLeft counts the other way.
// =========================================================
(() => {
  const phone = window.matchMedia('(max-width: 760px)');
  const still = window.matchMedia('(prefers-reduced-motion: reduce)');
  const swipes = [...document.querySelectorAll('[data-swipe]')];
  if (!swipes.length) return;

  const wire = (swipe) => {
    const track = swipe.querySelector('.swipe-track');
    const thumb = swipe.querySelector('.swipe-thumb');
    const at = swipe.querySelector('.swipe-at');
    const of = swipe.querySelector('.swipe-of');
    const arrows = [...swipe.querySelectorAll('.swipe-arrow')];
    if (!track) return;
    let index = 0;

    let queued = false;
    const measure = () => {
      queued = false;
      const cards = [...track.children].filter((c) => !c.hidden);
      if (!cards.length) return;
      const box = track.getBoundingClientRect();
      const mid = box.left + box.width / 2;
      const reach = box.width * 0.62;          // how far away a card fully fades

      let nearest = 0;
      let best = Infinity;
      cards.forEach((card, i) => {
        const r = card.getBoundingClientRect();
        const gap = r.left + r.width / 2 - mid;          // signed: which side it is on
        const off = Math.abs(gap);
        if (off < best) { best = off; nearest = i; }
        if (still.matches) { card.style.setProperty('--f', 1); card.style.setProperty('--s', 0); return; }
        card.style.setProperty('--f', Math.max(0, 1 - off / reach).toFixed(3));
        card.style.setProperty('--s', Math.max(-1, Math.min(1, gap / reach)).toFixed(3));
      });
      index = nearest;
      arrows.forEach((b) => {
        const d = Number(b.dataset.dir);
        b.disabled = d < 0 ? nearest === 0 : nearest === cards.length - 1;
      });

      if (of) of.textContent = cards.length;
      if (at) at.textContent = nearest + 1;
      if (thumb) {
        const w = 100 / cards.length;
        thumb.style.width = `${w}%`;
        // the rail fills in reading order, so in Arabic it runs right to left
        const dir = document.documentElement.dir === 'rtl' ? -1 : 1;
        thumb.style.setProperty('--x', `${dir * nearest * 100}%`);
      }
    };
    const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(measure); } };

    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // only a real sideways move counts as "they found it" — a finger that
    // happens to land on a card while scrolling the page is not an answer
    track.addEventListener('scroll', () => swipe.classList.add('is-touched'), { once: true, passive: true });

    const page = (dir) => {
      const cards = [...track.children].filter((c) => !c.hidden);
      const next = cards[Math.max(0, Math.min(cards.length - 1, index + dir))];
      if (!next) return;
      swipe.classList.add('is-touched');
      next.scrollIntoView({ behavior: still.matches ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
    };
    arrows.forEach((b) => b.addEventListener('click', () => page(Number(b.dataset.dir))));
    measure();

    // One nudge the first time the strip comes into view. It runs on the
    // cards' transform, not on the scroll position: a small scroll would be
    // pulled straight back by the mandatory snap and nothing would show.
    if (!still.matches && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || !phone.matches) return;
          io.disconnect();
          // twice: once on arrival, once a few seconds later for anyone who
          // was still reading the heading the first time
          const nudge = () => {
            if (swipe.classList.contains('is-touched')) return;
            track.classList.add('is-nudging');
            setTimeout(() => track.classList.remove('is-nudging'), 1350);
          };
          setTimeout(nudge, 420);
          setTimeout(nudge, 4200);
        });
      }, { threshold: 0.35 });
      io.observe(track);
    }

    return measure;
  };

  const remeasure = swipes.map(wire).filter(Boolean);
  // filtering and the language switch both rebuild the cards
  document.addEventListener('site:rendered', () => remeasure.forEach((fn) => fn()));
  document.getElementById('caseFilters')?.addEventListener('click', () => {
    requestAnimationFrame(() => remeasure.forEach((fn) => fn()));
  });
})();
