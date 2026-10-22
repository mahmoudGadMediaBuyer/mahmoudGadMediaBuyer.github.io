// =========================================================
// Voice note — Mahmoud's own recording, the story behind the screenshots.
//
// It starts the first time a visitor opens a case (Arabic site only; the
// recording is Arabic, so the English site shows it paused with a play
// button). It keeps going if the case is closed: a small chip with his photo
// stays in the corner to pause it. It starts on its own once per visit; after
// that, opening a case (even after a reload) brings the chip back paused, and
// play picks up where it stopped. The file is fetched only when it first
// plays. File and language live in data-config.js (voice).
// =========================================================
(() => {
  const cfg = (typeof SITE_DATA !== 'undefined' && SITE_DATA.voice) || {};
  if (!cfg.file) return;

  const COPY = {
    ar: { name: 'محمود جاد', sub: 'رسالة صوتية', play: 'تشغيل الرسالة الصوتية', pause: 'إيقاف الرسالة الصوتية', close: 'إخفاء' },
    en: { name: 'Mahmoud Gad', sub: 'Voice note · Arabic', play: 'Play voice note', pause: 'Pause voice note', close: 'Hide' },
  };
  const lang = () => (document.documentElement.lang === 'ar' ? 'ar' : 'en');
  const store = {
    get: (k) => { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) {} },
  };
  const track = (name, params) => { if (typeof window.trackEvent === 'function') window.trackEvent(name, params); };

  const audio = new Audio();
  audio.preload = 'none';

  const chip = document.createElement('div');
  chip.className = 'voice-chip';
  chip.setAttribute('role', 'region');
  chip.innerHTML = `
    <button type="button" class="voice-chip-main">
      <span class="voice-chip-face" aria-hidden="true">
        <img src="assets/img/mahmoud-avatar.webp" alt="" width="40" height="40">
        <span class="voice-chip-state"><i></i><i></i><i></i></span>
      </span>
      <span class="voice-chip-text">
        <span class="voice-chip-name"></span>
        <span class="voice-chip-sub"></span>
      </span>
    </button>
    <button type="button" class="voice-chip-close"><span aria-hidden="true">×</span></button>`;
  document.body.appendChild(chip);
  const mainBtn = chip.querySelector('.voice-chip-main');
  const closeBtn = chip.querySelector('.voice-chip-close');

  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  function paint() {
    const c = COPY[lang()];
    chip.querySelector('.voice-chip-name').textContent = c.name;
    const left = audio.duration && !audio.paused ? ` · ${fmt(audio.duration - audio.currentTime)}` : '';
    chip.querySelector('.voice-chip-sub').textContent = c.sub + left;
    mainBtn.setAttribute('aria-label', audio.paused ? c.play : c.pause);
    closeBtn.setAttribute('aria-label', c.close);
    chip.setAttribute('aria-label', c.name);
    chip.classList.toggle('is-playing', !audio.paused);
    chip.style.setProperty('--vp', audio.duration ? audio.currentTime / audio.duration : 0);
  }

  const show = () => { chip.classList.add('is-shown'); paint(); };
  const hide = () => chip.classList.remove('is-shown');

  // where it stopped, kept for the visit so a reload can pick it up again
  const saveAt = () => { if (audio.currentTime) store.set('mg_voice_at', String(audio.ended ? 0 : audio.currentTime)); };

  function play(auto) {
    if (!audio.src) {
      const at = parseFloat(store.get('mg_voice_at')) || 0;
      audio.src = at > 1 ? `${cfg.file}#t=${at.toFixed(1)}` : cfg.file;
    }
    // called straight from the visitor's click, so Safari lets it start
    const p = audio.play();
    if (p && p.catch) p.catch(() => paint());
    store.set('mg_voice_started', '1');
    track('voice_play', { auto: auto ? 1 : 0 });
    show();
  }

  audio.addEventListener('play', paint);
  audio.addEventListener('pause', () => { saveAt(); paint(); });
  // a reload mid-sentence fires no pause, so save on the way out too
  window.addEventListener('pagehide', saveAt);
  audio.addEventListener('timeupdate', paint);
  audio.addEventListener('ended', () => {
    track('voice_complete');
    store.set('mg_voice_at', '0');
    paint();
    setTimeout(() => { if (audio.paused) hide(); }, 2500);
  });

  mainBtn.addEventListener('click', () => {
    if (audio.paused) {
      if (audio.ended) audio.currentTime = 0;
      play(false);
    } else {
      audio.pause();
      track('voice_pause', { at: Math.round(audio.currentTime) });
    }
  });
  closeBtn.addEventListener('click', () => {
    if (!audio.paused) track('voice_pause', { at: Math.round(audio.currentTime) });
    audio.pause();
    hide();
  });

  // script.js fires this from the click that opens a case
  document.addEventListener('case:open', () => {
    if (!audio.paused) return;
    // already heard or stopped this visit, or a language the visitor may not
    // speak: offer it, don't start it
    if (store.get('mg_voice_started') || (cfg.language && lang() !== cfg.language)) {
      store.set('mg_voice_started', '1');
      show();
      return;
    }
    play(true);
  });

  new MutationObserver(paint).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();
