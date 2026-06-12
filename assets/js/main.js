/* ===================================================
   MUBASHAR HUSSAIN — WEAVING EXPERT PORTFOLIO
   Main JavaScript
   =================================================== */

(function() {
  'use strict';

  /* ---- PAGE LOADER ---- */
  window.addEventListener('load', function() {
    setTimeout(function() {
      const loader = document.getElementById('pageLoader');
      if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 600);
      }
    }, 1200);
  });

  /* ---- THEME TOGGLE ---- */
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  document.querySelectorAll('.theme-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  });

  function updateThemeIcon(theme) {
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  /* ---- NAVIGATION ---- */
  const nav = document.getElementById('mainNav');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    updateActiveNav();
    handleScrollTop();
  });

  // Mobile menu
  const menuBtn = document.getElementById('navMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('open');
      menuBtn.textContent = mobileNav.classList.contains('open') ? '✕' : '☰';
    });

    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        menuBtn.textContent = '☰';
      });
    });
  }

  // Active nav highlight
  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
    let current = '';

    sections.forEach(function(section) {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  /* ---- SCROLL TO TOP ---- */
  const scrollTopBtn = document.getElementById('scrollTop');

  function handleScrollTop() {
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- SMOOTH SCROLL ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ---- SKILL TABS ---- */
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillPanels = document.querySelectorAll('.skill-panel');

  skillTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      const target = this.dataset.tab;

      skillTabs.forEach(t => t.classList.remove('active'));
      skillPanels.forEach(p => p.classList.remove('active'));

      this.classList.add('active');
      const panel = document.getElementById('panel-' + target);
      if (panel) {
        panel.classList.add('active');
        // Animate skill bars in the panel
        animateSkillBars(panel);
      }
    });
  });

  function animateSkillBars(container) {
    container.querySelectorAll('.skill-bar-fill').forEach(function(bar) {
      const width = bar.dataset.width;
      bar.style.width = '0';
      requestAnimationFrame(function() {
        setTimeout(function() {
          bar.style.width = width + '%';
        }, 50);
      });
    });
  }

  /* ---- INTERSECTION OBSERVER ---- */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // If it contains skill bars, animate them
        if (entry.target.classList.contains('skill-panel')) {
          animateSkillBars(entry.target);
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  document.querySelectorAll(
    '.timeline-item, .project-card, .cert-card, .service-card, .tech-item, .skill-panel.active'
  ).forEach(function(el) {
    observer.observe(el);
  });

  // Animate visible skill bars on page load
  setTimeout(function() {
    const activePanel = document.querySelector('.skill-panel.active');
    if (activePanel) animateSkillBars(activePanel);
  }, 400);

  /* ---- TIMELINE EXPAND ---- */
  document.querySelectorAll('.timeline-card').forEach(function(card) {
    card.addEventListener('click', function() {
      const wasExpanded = this.classList.contains('expanded');
      // Collapse all
      document.querySelectorAll('.timeline-card').forEach(c => c.classList.remove('expanded'));
      // Toggle clicked
      if (!wasExpanded) this.classList.add('expanded');
    });
  });

  /* ---- COUNTER ANIMATION ---- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(function(el) {
    counterObserver.observe(el);
  });

  /* ---- CONTACT FORM ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const btn = this.querySelector('.btn-form-submit');
      const originalText = btn.innerHTML;

      btn.innerHTML = '⏳ Sending...';
      btn.disabled = true;

      // Simulate send (replace with Formspree or EmailJS in production)
      setTimeout(function() {
        contactForm.style.display = 'none';
        const successMsg = document.getElementById('formSuccess');
        if (successMsg) successMsg.classList.add('visible');

        setTimeout(function() {
          contactForm.reset();
          contactForm.style.display = 'block';
          if (successMsg) successMsg.classList.remove('visible');
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 4000);
      }, 1500);
    });
  }

  /* ---- SCROLL REVEAL for generic elements ---- */
  const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.about-highlight, .about-stat-card, .cert-badge').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    revealObserver.observe(el);
  });

})();
