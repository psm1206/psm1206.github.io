(function () {
  // Highlight the current section in the top navigation.
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var targets = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && targets.length) {
    var setActive = function (id) {
      links.forEach(function (a) {
        var on = a.getAttribute('href') === '#' + id;
        a.classList.toggle('is-active', on);
        if (on) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -60% 0px', threshold: 0 });
    targets.forEach(function (t) { spy.observe(t); });
  }
})();

(function () {
  // Fade elements in as they scroll into view.
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  var items = document.querySelectorAll(
    '.hero__photo, .hero__text, .section h2, .group, .pub, .cols > div, .rows'
  );
  if (!items.length) return;

  var io = new IntersectionObserver(function (entries) {
    var shown = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      // Stagger items that appear in the same batch.
      entry.target.style.transitionDelay = Math.min(shown, 4) * 70 + 'ms';
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
      shown += 1;
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  Array.prototype.forEach.call(items, function (el) {
    el.classList.add('reveal');
    io.observe(el);
  });
})();
