// =========================================================
// Background network — drifting dots joined by faint lines, drawn on one
// fixed canvas right after .page-aurora (above the glows, below the page).
// It is a sibling, not a child: the aurora layer drifts with the scroll,
// and the dots have to stay put under the pointer. Dots near the pointer or finger lean toward it and light up in the
// accent colour, with a thread back to the pointer.
//
// Skipped for reduced motion. Pauses while the tab is hidden. Colours follow
// the theme toggle, read each frame from <html data-theme>.
// =========================================================
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const host = document.querySelector('.page-aurora');
  if (!host) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'page-net';
  canvas.setAttribute('aria-hidden', 'true');
  host.after(canvas);
  const ctx = canvas.getContext('2d');

  // rgb triplets; the alphas are per element below
  const THEME = {
    dark:  { link: '139,123,255', dot: '168,172,205', near: '139,123,255', linkA: 0.26, dotA: 0.6 },
    light: { link: '109,94,252',  dot: '96,100,135',  near: '109,94,252',  linkA: 0.24, dotA: 0.5 },
  };
  const LINK = 130;      // px: dots closer than this get a line
  const REACH = 190;     // px: pointer pull radius
  const PULL = 0.04;
  const MAX_SPEED = 1.1;

  let w = 0, h = 0, dots = [], frame = 0;
  const pointer = { x: -9999, y: -9999 };

  function resize() {
    // phones draw it at 1x: thin lines lose almost nothing, and the canvas
    // has a quarter of the pixels to fill every frame
    const dpr = window.innerWidth < 760 ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    const widthChanged = window.innerWidth !== w;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // a phone toolbar sliding away only changes the height: keep the dots
    if (!widthChanged) return;
    // fewer dots on small screens: same look, a quarter of the line checks
    const count = Math.min(w < 760 ? 45 : 100, Math.floor((w * h) / 16000));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.7,
    }));
  }

  function draw() {
    const c = THEME[document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'];
    ctx.clearRect(0, 0, w, h);

    for (const d of dots) {
      const dx = pointer.x - d.x, dy = pointer.y - d.y;
      const dist = Math.hypot(dx, dy);
      if (dist < REACH && dist > 0.001) {
        const f = (1 - dist / REACH) * PULL;
        d.vx += (dx / dist) * f;
        d.vy += (dy / dist) * f;
      }
      const speed = Math.hypot(d.vx, d.vy);
      if (speed > MAX_SPEED) { d.vx *= MAX_SPEED / speed; d.vy *= MAX_SPEED / speed; }
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0 || d.x > w) d.vx *= -1;
      if (d.y < 0 || d.y > h) d.vy *= -1;
    }

    ctx.lineWidth = 1;
    for (let i = 0; i < dots.length; i++) {
      const a = dots[i];
      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        if (Math.abs(dx) > LINK || Math.abs(dy) > LINK) continue;
        const dist = Math.hypot(dx, dy);
        if (dist >= LINK) continue;
        ctx.strokeStyle = `rgba(${c.link},${(1 - dist / LINK) * c.linkA})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      const near = Math.hypot(a.x - pointer.x, a.y - pointer.y);
      if (near < REACH) {
        ctx.strokeStyle = `rgba(${c.near},${(1 - near / REACH) * 0.6})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(pointer.x, pointer.y);
        ctx.stroke();
      }
      ctx.fillStyle = near < REACH ? `rgba(${c.near},0.9)` : `rgba(${c.dot},${c.dotA})`;
      ctx.beginPath();
      ctx.arc(a.x, a.y, near < REACH ? a.r + 0.8 : a.r, 0, Math.PI * 2);
      ctx.fill();
    }

    frame = requestAnimationFrame(draw);
  }

  const aim = (x, y) => { pointer.x = x; pointer.y = y; };
  const release = () => aim(-9999, -9999);

  window.addEventListener('mousemove', (e) => aim(e.clientX, e.clientY), { passive: true });
  document.addEventListener('mouseleave', release);
  // touch events, not pointer events: a scrolling finger cancels its pointer
  // stream, but touchmove keeps firing, so the dots follow the swipe
  window.addEventListener('touchstart', (e) => aim(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  window.addEventListener('touchmove', (e) => aim(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  window.addEventListener('touchend', release, { passive: true });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(frame);
    if (!document.hidden) frame = requestAnimationFrame(draw);
  });

  resize();
  frame = requestAnimationFrame(draw);
})();
