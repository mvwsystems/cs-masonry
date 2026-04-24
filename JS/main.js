/**
 * C & S Brick, Stucco, and Stone — main.js
 * Nav scroll handler, mobile menu toggle,
 * IntersectionObserver reveals, smooth scroll
 */

(function () {
  'use strict';

  /* =============================================
     NAV SCROLL HANDLER
     ============================================= */
  const nav = document.getElementById('main-nav');

  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run once on load

  /* =============================================
     MOBILE MENU TOGGLE
     ============================================= */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.contains('open');

      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (
        mobileMenu.classList.contains('open') &&
        !nav.contains(e.target)
      ) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* =============================================
     INTERSECTION OBSERVER — .reveal elements
     ============================================= */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
      }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all immediately if IntersectionObserver unavailable
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* =============================================
     SMOOTH SCROLL for anchor links
     ============================================= */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    });
  });

  /* =============================================
     ACTIVE NAV LINK — highlight current page
     ============================================= */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href !== '#' && href.includes(currentPath) && currentPath !== '') {
      link.classList.add('active');
    }
  });

  /* =============================================
     TICKER — ensure seamless loop on resize
     ============================================= */
  const tickerTrack = document.querySelector('.ticker-track');
  if (tickerTrack) {
    // Animation is CSS-driven; JS just pauses on focus for accessibility
    tickerTrack.addEventListener('focusin', function () {
      tickerTrack.style.animationPlayState = 'paused';
    });
    tickerTrack.addEventListener('focusout', function () {
      tickerTrack.style.animationPlayState = 'running';
    });
  }

})();
