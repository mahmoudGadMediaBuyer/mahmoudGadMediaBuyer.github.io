// =========================================================
// Book a call — the Cal.com booking calendar, inline in the contact section.
//
// The embed script is only fetched once the section is close to the screen,
// so it costs nothing to visitors who never scroll that far. It follows the
// site's theme toggle. The booking link lives in data-config.js (booking).
// =========================================================
(() => {
  const host = document.getElementById('calEmbed');
  const link = (typeof SITE_DATA !== 'undefined' && SITE_DATA.booking && SITE_DATA.booking.calLink) || '';
  if (!host || !link) return;

  const NS = 'book';
  const theme = () => (document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  // Cal.com's own loader: queues calls until embed.js arrives
  function loadCal() {
    (function (C, A, L) {
      const p = (a, ar) => { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    Cal('init', NS, { origin: 'https://app.cal.com' });
    Cal.ns[NS]('inline', {
      elementOrSelector: '#calEmbed',
      calLink: link,
      config: { layout: 'month_view', theme: theme() },
    });
    Cal.ns[NS]('ui', {
      theme: theme(),
      // the title, length and Meet note sit in the column beside it
      hideEventTypeDetails: true,
      layout: 'month_view',
      cssVarsPerTheme: {
        dark: { 'cal-brand': '#8b7bff' },
        light: { 'cal-brand': '#6d5efc' },
      },
    });

    // the conversion that matters most: a confirmed booking (script.js owns
    // trackEvent). Cal fires both names on some versions, hence the guard.
    let booked = false;
    const onBooked = () => {
      if (booked || typeof window.trackEvent !== 'function') return;
      booked = true;
      window.trackEvent('book_call', { event_type: link });
    };
    Cal.ns[NS]('on', { action: 'bookingSuccessfulV2', callback: onBooked });
    Cal.ns[NS]('on', { action: 'bookingSuccessful', callback: onBooked });

    // keep the calendar on the site's theme when the visitor flips it
    new MutationObserver(() => Cal.ns[NS]('ui', { theme: theme() }))
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    io.disconnect();
    loadCal();
  }, { rootMargin: '600px 0px' });
  io.observe(host);
})();
