// ── Componentes Loader ────────────────────────────────────
// Injeta navbar e footer de forma síncrona (funciona com file:// e servidores)

function loadComponents() {
  // Navbar HTML
  const navbarHTML = `<!-- Top bar -->
<div class="nav-top-bar">
  <div class="top-bar-left">
    <a href="tel:08008003013">
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:middle;margin-right:4px"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      0800 800 3013
    </a>
    <a href="mailto:comercial@nativeip.com.br">
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:middle;margin-right:4px"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      comercial@nativeip.com.br
    </a>
  </div>
  <div class="top-bar-social">
    <a href="https://www.linkedin.com/company/nativeip" target="_blank" rel="noopener" aria-label="LinkedIn">
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    </a>
    <a href="https://www.facebook.com/nativeip" target="_blank" rel="noopener" aria-label="Facebook">
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    </a>
  </div>
</div>

<!-- Navbar -->
<header class="navbar">
  <div class="container">
    <nav class="nav-inner" aria-label="Navegação principal">
      <a href="index.html" class="nav-logo">
        <img src="img/Native.png" alt="NativeIP" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span>NativeIP</span>
      </a>
      <ul class="nav-links" id="navLinks" role="list">
        <li><a href="sobre.html">Sobre</a></li>
        <li><a href="#solucoes">Soluções</a></li>
        <li><a href="#integracoes">Integrações</a></li>
        
        <li><a href="parceiro.html">Seja Parceiro</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <div class="nav-cta" id="navCta">
      </div>
      <button class="nav-hamburger" id="hamburger" aria-label="Abrir menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
</header>`;

  // Footer HTML
  const footerHTML = `<!-- ── Footer ────────────────────────────────────────────── -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="img/logotipo-native.png" alt="NativeIP" style="height:44px;margin-bottom:16px;filter:brightness(0) invert(1)">
        <p>Comunicação inteligente que impulsiona negócios. Especialistas em provedores de internet há mais de 8 anos.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/nativeip" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>

          <a href="https://www.facebook.com/nativeip" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Soluções</h4>
        <ul>
          <li><a href="infinity-isp.html">Infinity ISP</a></li>
          <li><a href="pabx-virtual.html">PABX Virtual</a></li>
          <li><a href="call-center.html">Call Center</a></li>
          <li><a href="discador-automatico.html">Discador Automático</a></li>
          <li><a href="modulo-cobranca.html">Módulo de Cobrança</a></li>
          <li><a href="integracoes.html">Integrações</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Empresa</h4>
        <ul>
          <li><a href="sobre.html">Sobre a Native</a></li>
          <li><a href="conteudos.html">Conteúdos</a></li>
          <li><a href="cases-de-sucesso.html">Cases de Sucesso</a></li>
          <li><a href="parceiro.html">Seja Parceiro</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>©NativeIP 2025 | Todos os Direitos Reservados</span>
      <div class="footer-bottom-links">
        <a href="https://nativeip.com.br/privacy/" target="_blank" rel="noopener">Política de Privacidade</a>
        <a href="https://nativeip.com.br/politica-de-cookies/" target="_blank" rel="noopener">Cookies</a>
        <a href="https://nativeip.com.br/politica-de-cordialidade/" target="_blank" rel="noopener">Cordialidade</a>
        <a href="https://nativeip.com.br/termo-uso-website/" target="_blank" rel="noopener">Termos de Uso</a>
        <a href="https://www.actatechlaw.com.br/canalnative" target="_blank" rel="noopener">Canal de Ética</a>
      </div>
    </div>
  </div>
</footer>

<!-- Footer Developed By -->
<footer class="footer-developed-section">
  <div class="container">
    <div class="developed-content">
      <span>Desenvolvido por</span>
      <a href="https://glauberbarcelos.com.br" target="_blank" rel="noopener" class="developed-link">
        <img src="img/logo.png" alt="Glauber Barcelos" class="developed-logo">
      </a>
    </div>
  </div>
</footer>`;

  // Injeta navbar no início do body
  const body = document.body;
  body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Injeta footer após main
  const main = document.querySelector('main');
  if (main) {
    main.insertAdjacentHTML('afterend', footerHTML);
  }

  // Inicializa eventos
  initNavbarEvents();
}

function initNavbarEvents() {
  // ── Navbar Scroll Shadow ────────────────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, false);
  }

  // ── Hamburger ──────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }
}

// Executa quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadComponents);
} else {
  loadComponents();
}
