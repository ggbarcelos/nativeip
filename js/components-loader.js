// ── Componentes Loader ────────────────────────────────────
// Carrega navbar e footer - funciona localmente e em servidor

function loadComponents() {
  // Função auxiliar para carregar arquivo com múltiplos caminhos
  function loadFile(paths) {
    if (!Array.isArray(paths)) {
      paths = [paths];
    }
    
    return new Promise((resolve, reject) => {
      function tryLoad(index) {
        if (index >= paths.length) {
          reject(new Error(`Nenhum caminho funcionou para: ${paths.join(', ')}`));
          return;
        }
        
        const path = paths[index];
        const xhr = new XMLHttpRequest();
        
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText);
          } else {
            tryLoad(index + 1);
          }
        };
        
        xhr.onerror = () => {
          tryLoad(index + 1);
        };
        
        xhr.open('GET', path, true);
        xhr.send();
      }
      
      tryLoad(0);
    });
  }
  
  // Carrega navbar com múltiplos caminhos possíveis
  loadFile(['./components/navbar.html', '../components/navbar.html'])
    .then(navbarHTML => {
      const body = document.body;
      body.insertAdjacentHTML('afterbegin', navbarHTML);
      initNavbarEvents();
    })
    .catch(error => {
      console.warn('Aviso: Não foi possível carregar navbar:', error.message);
    });
  
  // Carrega footer com múltiplos caminhos possíveis
  loadFile(['./components/footer.html', '../components/footer.html'])
    .then(footerHTML => {
      const main = document.querySelector('main');
      if (main) {
        main.insertAdjacentHTML('afterend', footerHTML);
      }
    })
    .catch(error => {
      console.warn('Aviso: Não foi possível carregar footer:', error.message);
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
      
      // Se o link contém âncora e não está em index.html
      if (href && href.startsWith('#') && !window.location.pathname.includes('index.html') && !window.location.pathname.endsWith('/')) {
        e.preventDefault();
        // Navega para index.html com a âncora usando caminho relativo
        window.location.href = './index.html' + href;
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
