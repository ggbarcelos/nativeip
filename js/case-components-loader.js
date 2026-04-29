// ── Case Pages Components Loader ────────────────────────────────
// Carrega navbar e footer dinamicamente via fetch

console.log('📍 Script case-components-loader.js INICIADO');
console.log('📊 readyState inicial:', document.readyState);

async function loadCaseComponents() {
  console.log('🚀 loadCaseComponents() iniciada');
  console.log('📊 Novo readyState:', document.readyState);
  console.log('📊 document.body existe:', !!document.body);
  console.log('📊 document.documentElement:', !!document.documentElement);
  
  try {
    console.log('📦 Tentando buscar navbar...');
    const navResponse = await fetch('components/navbar.html');
    console.log('📥 Resposta navbar:', navResponse.status, navResponse.statusText);
    
    if (!navResponse.ok) {
      console.error('❌ Navbar não OK:', navResponse.status);
      return;
    }
    
    const navHTML = await navResponse.text();
    console.log('✅ Navbar HTML recebido:', navHTML.length, 'bytes');
    console.log('📝 Navbar preview:', navHTML.substring(0, 100));
    
    // Tenta inserir no body
    console.log('🔧 Inserindo navbar no body...');
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    console.log('✅ Navbar inserido com sucesso!');
    console.log('🔍 Body agora tem navbar?', document.querySelector('.navbar') ? 'SIM' : 'NÃO');

    // Carrega footer
    console.log('📦 Tentando buscar footer...');
    const main = document.querySelector('main');
    console.log('🔍 main elemento encontrado:', !!main);
    
    if (main) {
      const footerResponse = await fetch('components/footer-case.html');
      console.log('📥 Resposta footer:', footerResponse.status);
      
      if (!footerResponse.ok) {
        console.error('❌ Footer não OK:', footerResponse.status);
        return;
      }
      
      const footerHTML = await footerResponse.text();
      console.log('✅ Footer HTML recebido:', footerHTML.length, 'bytes');
      main.insertAdjacentHTML('afterend', footerHTML);
      console.log('✅ Footer inserido com sucesso!');
    }

    // Inicializa eventos
    console.log('⚙️ Inicializando eventos...');
    initCaseNavbarEvents();
    console.log('✅ Todos os componentes carregados!');
    
  } catch (error) {
    console.error('❌ ERRO:', error);
    console.error('Stack:', error.stack);
  }
}

function initCaseNavbarEvents() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  console.log('🔍 Navbar encontrado:', !!navbar);
  console.log('🔍 Hamburger encontrado:', !!hamburger);
  console.log('🔍 NavLinks encontrado:', !!navLinks);
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }
}

// Executa assim que possível
if (document.readyState === 'loading') {
  console.log('⏳ DOM ainda carregando, aguardando DOMContentLoaded...');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 DOMContentLoaded disparado!');
    loadCaseComponents();
  });
} else {
  console.log('⚡ DOM já pronto, executando imediatamente...');
  loadCaseComponents();
}



