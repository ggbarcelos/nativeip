// ── Componentes Loader ────────────────────────────────────
// Carrega navbar e footer - funciona localmente e em servidor

function loadComponents() {
  // Função auxiliar para carregar arquivo
  function loadFile(path) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(`Status ${xhr.status} ao carregar ${path}`));
        }
      };
      xhr.onerror = () => reject(new Error(`Erro ao carregar ${path}`));
      xhr.open('GET', path, true);
      xhr.send();
    });
  }
  
  // Carrega navbar
  loadFile('./components/navbar.html')
    .then(navbarHTML => {
      const body = document.body;
      body.insertAdjacentHTML('afterbegin', navbarHTML);
      initNavbarEvents();
    })
    .catch(error => {
      console.error('Erro ao carregar navbar:', error);
      // Tenta caminho alternativo
      loadFile('../components/navbar.html')
        .then(navbarHTML => {
          const body = document.body;
          body.insertAdjacentHTML('afterbegin', navbarHTML);
          initNavbarEvents();
        })
        .catch(e => console.error('Falha na segunda tentativa:', e));
    });
  
  // Carrega footer
  loadFile('./components/footer.html')
    .then(footerHTML => {
      const main = document.querySelector('main');
      if (main) {
        main.insertAdjacentHTML('afterend', footerHTML);
      }
    })
    .catch(error => {
      console.error('Erro ao carregar footer:', error);
      // Tenta caminho alternativo
      loadFile('../components/footer.html')
        .then(footerHTML => {
          const main = document.querySelector('main');
          if (main) {
            main.insertAdjacentHTML('afterend', footerHTML);
          }
        })
        .catch(e => console.error('Falha na segunda tentativa:', e));
    });
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

  // ── Navbar Link Navigation ──────────────────────────────────
  // Intercepta cliques nos links do navbar para navegar corretamente para index
  const navbarLinks = document.querySelectorAll('.nav-inner a');
  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Se o link contém âncora (seção) e não está em index.html
      if (href && href.includes('#') && !window.location.pathname.includes('index.html')) {
        e.preventDefault();
        // Navega para index.html com a âncora
        const anchor = href.split('#')[1];
        window.location.href = '/index.html#' + anchor;
      }
    });
  });
}


// Executa quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadComponents);
} else {
  loadComponents();
}
