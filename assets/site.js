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

  /* --- Waitlist form (placeholder handler) ---
     TODO: wire to a real endpoint. Two easy options:
       1. Netlify Forms — add `data-netlify="true"` + a hidden `form-name` field
          to the <form> and remove the e.preventDefault() below.
       2. Formspree — set the form's action to https://formspree.io/f/XXXX
          and method="POST", then remove preventDefault().
     For now we just simulate success client-side.                          */
  function initWaitlist() {
    document.querySelectorAll('.waitlist-form').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); // remove when wiring a real backend
        var input = form.querySelector('input[type="email"]');
        if (input && !input.checkValidity()) { input.reportValidity(); return; }
        form.classList.add('is-done');
        var ok = form.querySelector('.waitlist-success');
        if (ok) ok.classList.add('is-shown');
        // console.log('waitlist signup →', input ? input.value : '(no email)');
      });
    });
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

  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initReveals();
    initWaitlist();
    initFaq();
    initYear();
  });
})();
