/* KORD — site interactions (vanilla, minimal) */
(function () {
  'use strict';

  /* --- Mobile nav --- */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
  }

  /* --- Scroll reveals --- */
  function initReveals() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    var root = document.documentElement;
    if (!('IntersectionObserver' in window)) { root.classList.remove('js-anim'); return; }
    // Enable animation, but reveal anything already on-screen in the SAME tick (no flash).
    root.classList.add('js-anim');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    var vh = window.innerHeight || 800;
    // Reveal anything near the top immediately (absolute floor so a short
    // capture viewport never leaves the hero hidden); observe the rest.
    var floor = Math.max(vh * 0.95, 1100);
    els.forEach(function (e) {
      if (e.getBoundingClientRect().top < floor) { e.classList.add('in'); }
      else { io.observe(e); }
    });
    // Safety net: never let content stay hidden.
    setTimeout(function () { els.forEach(function (e) { e.classList.add('in'); }); }, 700);
  }

  /* --- FAQ accordion --- */
  function initFaq() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var q = item.querySelector('.faq-q');
      var a = item.querySelector('.faq-a');
      if (!q || !a) return;
      q.addEventListener('click', function () {
        var open = item.classList.toggle('open');
        q.setAttribute('aria-expanded', open);
        a.style.maxHeight = open ? a.scrollHeight + 'px' : 0;
      });
    });
  }


  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initReveals();
    initFaq();
  });
})();
