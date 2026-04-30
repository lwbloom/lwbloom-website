/* =====================================================
   Life & Work Bloom — scripts.js
   ===================================================== */

'use strict';

/* ---------- Hamburger Menu ---------- */
(function () {
  const hamburger = document.getElementById('navHamburger');
  const navMenu   = document.getElementById('navMenu');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navMenu.querySelectorAll('.nav-link, .nav-cta').forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'メニューを開く');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'メニューを開く');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });
}());

/* ---------- Fade-in on Scroll (Intersection Observer) ---------- */
(function () {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -32px 0px'
  });

  elements.forEach(function (el) {
    observer.observe(el);
  });
}());

/* ---------- FAQ Accordion ---------- */
(function () {
  const triggers = document.querySelectorAll('.faq-trigger');
  if (!triggers.length) return;

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const answerId = trigger.getAttribute('aria-controls');
      const answer   = document.getElementById(answerId);
      if (!answer) return;

      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      triggers.forEach(function (t) {
        const aId = t.getAttribute('aria-controls');
        const a   = document.getElementById(aId);
        t.setAttribute('aria-expanded', 'false');
        if (a) a.hidden = true;
      });

      if (!isExpanded) {
        trigger.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });
}());

/* ---------- Smooth Scroll for anchor links ---------- */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const headerH = document.querySelector('.site-header')
        ? document.querySelector('.site-header').offsetHeight
        : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
}());

/* ---------- Header scroll shadow ---------- */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 16) {
      header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.12)';
    } else {
      header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.10)';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}());

/* ---------- Blog Category Filter ---------- */
(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.blog-card[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');

      const cat = btn.dataset.filter;
      cards.forEach(function (card) {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}());
