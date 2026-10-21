// =========================================================
// Clients globe — every logo sits on a sphere that turns on
// its own and can be dragged. Click it and the sphere opens:
// the same logos fly out into a square grid, side by side,
// so every client is in view at once. Click again (or the
// button underneath) and they fold back onto the sphere.
//
// The plain list in the markup stays for screen readers and
// for the case where this file never runs.
// =========================================================
(() => {
  const stage = document.getElementById('globe');
  const list = document.getElementById('clientsGrid');
  const caption = document.getElementById('globeCaption');
  const toggle = document.getElementById('globeToggle');
  const data = (typeof SITE_DATA !== 'undefined' && Array.isArray(SITE_DATA.clients)) ? SITE_DATA.clients : [];
  if (!stage || !list || !data.length) return;

  // one logo per brand: the list carries a brand twice where it has two marks
  const seen = new Set();
  const clients = data.filter((c) => {
    if (c.name === 'Client') return true;          // unnamed marks are kept, unlabelled
    if (seen.has(c.name)) return false;
    seen.add(c.name);
    return true;
  });
  const named = (c) => c.name && c.name !== 'Client';
  const isKey = (c) => Boolean(c.key);

  // key clients are read first by screen readers too
  list.innerHTML = [...clients.filter(isKey), ...clients.filter((c) => !isKey(c))]
    .filter(named).map((c) => `<li>${c.name}</li>`).join('');

  // Key clients take the sphere's middle band, where a turning globe shows
  // the most: the slots nearest the equator, which the golden-angle spiral
  // also spreads all the way round. Everyone else fills the rest in order.
  {
    const n = clients.length;
    const byBand = [...Array(n).keys()].sort((a, b) => Math.abs(a - (n - 1) / 2) - Math.abs(b - (n - 1) / 2));
    const keys = clients.filter(isKey), rest = clients.filter((c) => !isKey(c));
    const slots = new Array(n);
    keys.forEach((c, k) => { slots[byBand[k]] = c; });
    let r = 0;
    for (let i = 0; i < n; i++) if (!slots[i]) slots[i] = rest[r++];
    clients.splice(0, n, ...slots);
  }

  const N = clients.length;
  // in the square, key clients come first
  const gridOrder = [...clients.keys()].sort((a, b) => (isKey(clients[b]) - isKey(clients[a])) || a - b);
  const gridPos = new Array(N);
  gridOrder.forEach((ci, g) => { gridPos[ci] = g; });
  const COLS = Math.ceil(Math.sqrt(N));            // as square as the count allows
  const ROWS = Math.ceil(N / COLS);
  // evenly spread points: a golden-angle spiral from pole to pole
  const pts = clients.map((_, i) => {
    const y = 1 - ((i + 0.5) / N) * 2;
    const r = Math.sqrt(1 - y * y);
    const th = i * 2.399963229728653;
    return { x: Math.cos(th) * r, y, z: Math.sin(th) * r };
  });
  const tiles = clients.map((c, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'globe-tile' + (isKey(c) ? ' is-key' : '');
    b.tabIndex = -1;
    b.style.background = c.bg || '#f7f7f5';
    b.dataset.i = i;
    b.innerHTML = `<img src="${c.logo}" alt="" draggable="false" decoding="async">`;
    stage.appendChild(b);
    return b;
  });

  const still = window.matchMedia('(prefers-reduced-motion: reduce)');
  const label = (k) => {
    const ar = document.documentElement.lang === 'ar';
    return { open: ar ? 'اضغط على الكرة لعرض كل العملاء' : 'Click the globe to see every client',
             close: ar ? 'رجوع إلى الكرة' : 'Back to the globe' }[k];
  };
  let yaw = 0.6, pitch = -0.28, vyaw = 0, vpitch = 0;
  let dragging = false, hovering = false, visible = false, running = false;
  let open = false, m = 0;                         // m: 0 on the sphere, 1 in the grid
  let front = -1, picked = -1;

  const say = (text, key = false) => {
    if (!caption || caption.textContent === text) return;
    caption.textContent = text;
    caption.classList.toggle('is-key', key);
    caption.classList.remove('is-in');
    void caption.offsetWidth;                      // restart the little rise
    caption.classList.add('is-in');
  };
  const ease = (q) => (q < 0.5 ? 4 * q * q * q : 1 - Math.pow(-2 * q + 2, 3) / 2);

  const draw = () => {
    const size = stage.clientWidth;
    const tile = tiles[0].offsetWidth;
    const R = size / 2 - tile * 0.52;
    const cell = size / COLS;
    const gs = (cell * 0.86) / tile;               // a tile's scale once it is in the grid
    const top = (size - ROWS * cell) / 2;
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    stage.style.setProperty('--open', m.toFixed(3));
    let best = -2, bestI = -1;
    for (let i = 0; i < N; i++) {
      const p = pts[i];
      const x = p.x * cy + p.z * sy;
      const z0 = -p.x * sy + p.z * cy;
      const y = p.y * cp - z0 * sp;
      const z = p.y * sp + z0 * cp;
      const d = (z + 1) / 2;                       // 0 at the back, 1 at the front
      // the caption names a key client whenever one is facing forward
      const score = z + (isKey(clients[i]) ? 0.6 : 0);
      if (score > best && named(clients[i])) { best = score; bestI = i; }
      // where it sits on the sphere…
      const sx = size / 2 + x * R - tile / 2, syy = size / 2 + y * R - tile / 2;
      const k = isKey(clients[i]);
      const ss = (0.46 + 0.62 * d) * (k ? 1.24 : 1), so = k ? 0.4 + 0.6 * d : 0.16 + 0.84 * d * d;
      // …and where it sits in the grid (a short last row is centred)
      const g = gridPos[i];
      const row = Math.floor(g / COLS), col = g % COLS;
      const inRow = row === ROWS - 1 ? N - row * COLS : COLS;
      const gx = (size - inRow * cell) / 2 + col * cell + (cell - tile) / 2;
      const gy = top + row * cell + (cell - tile) / 2;
      // each tile leaves a touch after the one before it
      const q = ease(Math.max(0, Math.min(1, m * 1.5 - (i / N) * 0.5)));
      const el = tiles[i];
      el.style.transform = `translate3d(${(sx + (gx - sx) * q).toFixed(1)}px,${(syy + (gy - syy) * q).toFixed(1)}px,0) scale(${(ss + (gs - ss) * q).toFixed(3)})`;
      el.style.opacity = (so + (1 - so) * q).toFixed(3);
      el.style.zIndex = q > 0.5 ? (i === picked ? 200 : 100) : Math.round(d * 100) + (k ? 20 : 0);
      el.classList.toggle('is-back', !open && z < -0.05);
    }
    if (!open && bestI !== front) {
      front = bestI;
      if (front >= 0) say(clients[front].name, isKey(clients[front]));
    }
    tiles.forEach((t, i) => t.classList.toggle('is-front', open ? i === picked : i === front));
  };

  let last = 0;
  const tick = (now) => {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now;
    const goal = open ? 1 : 0;
    if (m !== goal) m = still.matches ? goal : Math.max(0, Math.min(1, m + (open ? 1 : -1) * dt / 0.9));
    if (!dragging && !open) {
      yaw += vyaw * dt; pitch += vpitch * dt;
      vyaw *= Math.pow(0.05, dt); vpitch *= Math.pow(0.02, dt);   // a flick coasts, then settles
      if (!hovering && !still.matches) yaw += 0.22 * dt;
      pitch += (-0.28 - pitch) * Math.min(1, dt * 0.6);
      pitch = Math.max(-0.9, Math.min(0.9, pitch));
    }
    draw();
    requestAnimationFrame(tick);
  };
  const start = () => { if (!running && visible) { running = true; last = performance.now(); requestAnimationFrame(tick); } };
  const stop = () => { running = false; };

  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      visible ? start() : stop();
    }, { threshold: 0.05 }).observe(stage);
  } else { visible = true; start(); }
  window.addEventListener('resize', draw);

  const setOpen = (v) => {
    open = v; picked = -1; front = -1;
    stage.classList.toggle('is-open', open);
    if (toggle) { toggle.textContent = label(open ? 'close' : 'open'); toggle.setAttribute('aria-expanded', String(open)); }
    if (open) say('');
  };

  // ---------- dragging (only the sphere turns) ----------
  let px = 0, py = 0, moved = 0, pid = null;
  stage.addEventListener('pointerdown', (e) => {
    moved = 0; px = e.clientX; py = e.clientY; pid = e.pointerId;
    if (open) return;
    dragging = true; vyaw = vpitch = 0;
    stage.classList.add('is-dragging');
  });
  window.addEventListener('pointermove', (e) => {
    if (e.pointerId !== pid) return;
    const dx = e.clientX - px, dy = e.clientY - py;
    px = e.clientX; py = e.clientY;
    moved += Math.abs(dx) + Math.abs(dy);
    if (!dragging) return;
    const k = 2.2 / stage.clientWidth;
    yaw += dx * k; pitch = Math.max(-0.9, Math.min(0.9, pitch + dy * k));
    vyaw = dx * k * 60; vpitch = dy * k * 60;
  }, { passive: true });
  const release = (e) => {
    if (e && e.pointerId !== pid) return;
    dragging = false;
    stage.classList.remove('is-dragging');
  };
  window.addEventListener('pointerup', release);
  window.addEventListener('pointercancel', release);
  stage.addEventListener('pointerenter', () => { hovering = true; });
  stage.addEventListener('pointerleave', () => { hovering = false; if (open && picked < 0) say(''); });

  // a click that was not a drag opens the sphere; in the grid a logo names
  // itself, and a click on the space between them folds it back
  stage.addEventListener('click', (e) => {
    if (moved > 6) return;
    if (!open) { setOpen(true); return; }
    const t = e.target.closest('.globe-tile');
    if (!t) { setOpen(false); return; }
    picked = +t.dataset.i;
    say(named(clients[picked]) ? clients[picked].name : '', isKey(clients[picked]));
  });
  stage.addEventListener('pointerover', (e) => {
    if (!open) return;
    const t = e.target.closest('.globe-tile');
    if (t && named(clients[+t.dataset.i])) say(clients[+t.dataset.i].name, isKey(clients[+t.dataset.i]));
  });
  if (toggle) toggle.addEventListener('click', () => setOpen(!open));
  document.addEventListener('site:rendered', () => { if (toggle) toggle.textContent = label(open ? 'close' : 'open'); });

  document.documentElement.classList.add('has-globe');
  stage.hidden = false;
  if (caption) caption.hidden = false;
  if (toggle) toggle.hidden = false;
  setOpen(false);
  draw();
})();
