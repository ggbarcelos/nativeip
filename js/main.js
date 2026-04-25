  // ── Hamburger ──────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // ── Tabs ───────────────────────────────────────────────────
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.tab-content').forEach(c => {
        c.hidden = true;
        c.classList.remove('active');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const target = document.getElementById('tab-' + btn.dataset.tab);
      if (target) { target.hidden = false; target.classList.add('active'); }
    });
  });

  // ── CountUp ────────────────────────────────────────────────
  function countUp(el, target, suffix, duration) {
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // ── IntersectionObserver ───────────────────────────────────
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

  // Stats observer (fires countUp once) — works on any container with .stat-num
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        countUp(el, target, suffix, 1400);
      });
      statsObserver.unobserve(e.target);
    });
  }, { threshold: 0.3 });

  // Observe #stats (index) and .page-hero-visual (sobre)
  document.querySelectorAll('#stats, .page-hero-visual').forEach(el => statsObserver.observe(el));

  // ── Form validation ────────────────────────────────────────
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formError = document.getElementById('formError');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      formError.style.display = 'none';

      const nome     = form.nome.value.trim();
      const email    = form.email.value.trim();
      const whatsapp = form.whatsapp.value.trim();
      const empresa  = form.empresa.value.trim();
      const lgpd     = form.lgpd.checked;

      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nome || !email || !whatsapp || !empresa) {
        formError.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        formError.style.display = 'block';
        return;
      }
      if (!emailRe.test(email)) {
        formError.textContent = 'Por favor, informe um e-mail válido.';
        formError.style.display = 'block';
        return;
      }
      if (!lgpd) {
        formError.textContent = 'Você precisa aceitar os termos para continuar.';
        formError.style.display = 'block';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';
      setTimeout(() => {
        formSuccess.style.display = 'flex';
        form.reset();
        submitBtn.textContent = 'Mensagem Enviada ✓';
      }, 800);
    });
  }
