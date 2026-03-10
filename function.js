// Iniciar AOS
AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
});

// ── 2. Datos de los servicios ofrecidos (actualiza dinamicamente) ──
const servicesData = [
    {
        imag: 'Img/frontend-card.jpg',
        title: 'Desarrollo Web Moderno',
        description: 'Creamos aplicaciones web escalables, rápidas y accesibles con las tecnologías más actuales del ecosistema frontend y backend.',
        tag: 'Frontend / Backend',
    },
    {
        imag: 'Img/ia-aplicada-card.jpg',
        title: 'Inteligencia Artificial Aplicada',
        description: 'Integramos modelos de IA y machine learning en tus procesos para automatizar, predecir y optimizar con datos reales.',
        tag: 'IA & ML',
    },
    {
        imag: 'Img/ciberseguridad-card.jpg',
        title: 'Ciberseguridad Joven',
        description: 'Auditamos, protegemos y fortalecemos tu infraestructura digital frente a amenazas emergentes y vectores de ataque modernos.',
        tag: 'Security',
    },
    {
        imag: 'Img/blockchain-card.jpg',
        title: 'Blockchain & Web3',
        description: 'Desarrollamos contratos inteligentes, dApps y soluciones descentralizadas adaptadas a las necesidades de tu negocio.',
        tag: 'Web3',
    },
    {
        imag: 'Img/cloud-devops-card.jpg',
        title: 'Cloud & DevOps',
        description: 'Diseñamos y gestionamos infraestructuras cloud resilientes con pipelines CI/CD ágiles y observabilidad total.',
        tag: 'Cloud',
    },
    {
        imag: 'Img/data-analys-card.jpg',
        title: 'Data Analytics',
        description: 'Convertimos tus datos en decisiones estratégicas con dashboards en tiempo real, ETL robusto y modelos predictivos.',
        tag: 'Analytics',
    },
    {
        imag: 'Img/app-card.jpg',
        title: 'Apps Móviles',
        description: 'Diseño y desarrollo de aplicaciones nativas y multiplataforma con experiencias de usuario memorables.',
        tag: 'Mobile',
    },
    {
        imag: 'Img/ux-design-card.jpg',
        title: 'UX / UI Design',
        description: 'Creamos interfaces centradas en el usuario: investigación, prototipos, sistemas de diseño y validación continua.',
        tag: 'Design',
    },
];

    function renderServices() {
    const grid = document.getElementById('services-grid');
    grid.innerHTML = '';
    servicesData.forEach((s, i) => {
    const delay = 100 + (i % 4) * 100;
    const card = document.createElement('article');
    card.className = 'service-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', delay);
    const isEmoji = !s.imag.includes('.');
    card.innerHTML = `
        <div class="service-card-media">${isEmoji
            ? `<span class="service-card-emoji">${s.imag}</span>`
            : `<img src="${s.imag}" alt="${s.title}" class="service-card-img">`
        }</div>
        <div class="service-card-body">
          <span class="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-500 mb-2">${s.tag}</span>
          <h3 class="text-white font-bold text-lg mb-3" style="font-family:Syne,sans-serif">${s.title}</h3>
          <p class="text-slate-400 text-sm leading-relaxed">${s.description}</p>
        </div>
      `;
    grid.appendChild(card);
});
    // Reinicia AOS
    AOS.refresh();
}
// ── 3. Datos miembros de equipo ──
const teamData = [
    { emoji: '👩‍💻', name: 'Ana García', role: 'Frontend Lead', desc: 'Experta en React y diseño de sistemas. 8 años transformando ideas en interfaces.', color: '#00c9d4' },
    { emoji: '🤖', name: 'Carlos Ruiz', role: 'AI Specialist', desc: 'PhD en Machine Learning. Lidera nuestros proyectos de inteligencia artificial.', color: '#ff6b35' },
    { emoji: '👩‍🎨', name: 'Elena Kim', role: 'UX/UI Designer', desc: 'Diseñadora con foco en accesibilidad y experiencias digitales inolvidables.', color: '#00c9d4' },
    { emoji: '🔐', name: 'Marcos Pérez', role: 'Security Engineer', desc: 'Especialista en ciberseguridad ofensiva y defensiva. Bug bounty hunter certificado.', color: '#ff6b35' },
    { emoji: '⛓️', name: 'Sara Blanco', role: 'Blockchain Dev', desc: 'Desarrolladora Solidity con experiencia en DeFi, NFTs y protocolos Layer 2.', color: '#00c9d4' },
    { emoji: '☁️', name: 'David Torres', role: 'Cloud Architect', desc: 'Arquitecto AWS y GCP. Diseña infraestructuras que escalan sin fricciones.', color: '#ff6b35' },
    { emoji: '📱', name: 'Laura Jiménez', role: 'Mobile Lead', desc: 'Flutter & React Native. Sus apps suman más de 2M de descargas en las tiendas.', color: '#00c9d4' },
    { emoji: '📊', name: 'Pablo Romero', role: 'Data Engineer', desc: 'Transforma datos caóticos en pipelines robustos y dashboards accionables.', color: '#ff6b35' },
];

function renderTeam() {
    const grid = document.getElementById('team-grid');
    grid.innerHTML = '';
    teamData.forEach((m, i) => {
        const delay = 100 + (i % 4) * 100;
        const card = document.createElement('article');
        card.className = 'team-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', delay);
        card.innerHTML = `
        <div class="avatar" style="background:linear-gradient(135deg,${m.color},${m.color === '#00c9d4' ? '#ff6b35' : '#00c9d4'})">${m.emoji}</div>
        <h3 class="text-white font-bold text-lg mb-1" style="font-family:Syne,sans-serif">${m.name}</h3>
        <span class="inline-block text-xs font-semibold tracking-widest uppercase mb-3" style="color:${m.color}">${m.role}</span>
        <p class="text-slate-400 te xt-smleading-relaxed">${m.desc}</p>
      `;
        grid.appendChild(card);
    });
    AOS.refresh();
}

// ── Contadores Animados con Anime.js ──
function initContadores() {
    const contadores = document.querySelectorAll('.contador-animado');

    //El intersectionObserver sirve para que cuando se haga el scroll y el elemento sea visible, se ejecute la animación del contador
    const observer = new IntersectionObserver((entradas, obs) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                const elemento = entrada.target;
                const valorFinal = parseInt(elemento.getAttribute('data-valor'))
                const obj = { valor: 0 };

                anime({
                    targets: obj,
                    valor: valorFinal,
                    round: 1, //Para evitar que nos muestre numero decimales, redondea al numero entero mas cercano
                    easing: 'easeOutExpo', //Efecto de salida rapido pero cuando esta apunto de llegar al numero se frena suavemente
                    duration: 2500, //2.5 segundos
                    update: function () {
                        elemento.innerHTML = obj.valor;
                    }
                });
                obs.unobserve(elemento); //Solo se anima una vez, luego se deja de observar el elemento
            }
        });
    }, { threshold: 0.5 }); //Se activa cuando la pantalla esta a la mitad

    contadores.forEach(contador => {
        observer.observe(contador);
    });
}

// ── Levitación de etiquetas flotantes en el Hero con Anime.js ──
function initLevitacion() {
    anime({
        targets: '.etiqueta-flotante',
        translateY: ['-8px  ', '8px'], //Sube y baja 8px
        loop: true, //Hace que la animación se repita infinitamente
        direction: 'alternate', //Hace que la animación se reproduzca en ambos sentidos (sube y baja)
        easing: 'easeInOutSine', //Efecto de movimiento suave al subir y bajar
        duration: 1000, //3 segundos para completar un ciclo completo (sube y baja)
        delay: anime.stagger(400) //Desincroniza las etiqueta para que no se muevan al mismo tiempo
    });
}

renderServices();
renderTeam();
initContadores();
initLevitacion();
