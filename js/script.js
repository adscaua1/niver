/* =====================================================================
   CONFIG — EDITE AQUI para personalizar a página com a sua história.
   Nenhuma outra parte do arquivo precisa ser tocada para personalizar.
   ===================================================================== */
const CONFIG = {
    // Nome que aparece na tela de abertura e nas mensagens
    nomeDela: "Meu Amor",
    nomeDele: "Seu Nome",

    // Data e hora em que vocês começaram a namorar (usada no contador)
    // Formato: "AAAA-MM-DDTHH:MM:SS"
    dataInicio: "2020-06-15T20:00:00",

    // Frase digitada em efeito máquina de escrever no topo (título + subtítulo)
    heroTitulo: "Feliz Aniversário, meu amor",
    heroTexto: "Hoje o mundo comemora o dia em que você nasceu. Eu comemoro todos os dias em que você existe.",

    // Linha do tempo — adicione quantos itens quiser
    timeline: [
        { data: "15 de junho de 2020", icone: "💌", titulo: "O começo", texto: "O dia em que nossas histórias decidiram virar uma só." },
        { data: "outubro de 2020", icone: "🌆", titulo: "Primeiro encontro", texto: "Conversamos por horas e o tempo, sem pedir licença, simplesmente desapareceu." },
        { data: "2021", icone: "🏡", titulo: "Novos planos", texto: "Começamos a sonhar juntos, sem medo de dizer em voz alta o que queríamos construir." },
        { data: "2023", icone: "💍", titulo: "O pedido", texto: "Ajoelhei, o coração disparado, e você disse sim antes mesmo de eu terminar a pergunta." },
        { data: "hoje", icone: "🎂", titulo: "Este momento", texto: "E aqui estamos, comemorando mais um ano da pessoa mais incrível que eu conheço." }
    ],

    // Galeria de fotos. Troque `foto` por um caminho de imagem real (ex: "fotos/praia.jpg")
    // Deixe `foto: null` para manter o quadro decorativo com emoji enquanto não há foto.
    galeria: [
        { foto: null, legenda: "aquele dia na praia", emoji: "🌊" },
        { foto: null, legenda: "nosso primeiro jantar", emoji: "🍝" },
        { foto: null, legenda: "a viagem inesquecível", emoji: "✈️" },
        { foto: null, legenda: "risadas sem motivo", emoji: "😂" },
        { foto: null, legenda: "o dia do pedido", emoji: "💍" },
        { foto: null, legenda: "só nós dois", emoji: "🌅" }
    ],

    // Cartinhas interativas
    cartas: [
        { titulo: "Se você está com saudade", corpo: "Feche os olhos. Estou logo ali, no lugar mais quentinho do seu peito. Sempre estive." },
        { titulo: "Se o dia está difícil", corpo: "Respira. Você já superou cada dia difícil até hoje, com uma força que eu admiro profundamente. Este também vai passar — e eu estou com você." },
        { titulo: "Se você só quer sorrir", corpo: "Lembra daquela vez que rimos tanto que doeu o rosto? Eu guardo esse som como um dos meus favoritos no mundo." }
    ],

    // Motivos escondidos nos balões (um por balão; se houver menos motivos que balões, eles se repetem)
    motivosBaloes: [
        "seu jeito de rir com o corpo inteiro",
        "a forma como você cuida de quem ama",
        "sua coragem de sonhar grande",
        "o jeitinho que você faz café de manhã",
        "sua paciência comigo nos meus piores dias",
        "como você faz qualquer lugar parecer casa",
        "sua sinceridade, mesmo quando dói",
        "o brilho no seu olhar quando fala do que ama"
    ],

    // Perguntas do quiz do casal
    quiz: [
        {
            pergunta: "Onde foi o nosso primeiro encontro de verdade?",
            opcoes: ["No cinema", "Naquele café pertinho de casa", "Na praia", "Numa festa de amigos"],
            correta: 1,
            certo: "Isso! Aquele café nunca mais foi só um café.",
            errado: "Quase! Mas foi naquele café pertinho de casa."
        },
        {
            pergunta: "Qual é a nossa comida favorita para pedir juntos?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida mexicana"],
            correta: 0,
            certo: "Pizza sempre vence, né? 🍕",
            errado: "Quase! A resposta certa é pizza."
        },
        {
            pergunta: "Qual filme a gente já assistiu mais de 5 vezes juntos?",
            opcoes: ["Um filme de terror", "Uma comédia romântica", "Um desenho animado", "Um documentário"],
            correta: 1,
            certo: "Exatamente, e você sempre chora no final.",
            errado: "Quase! Foi aquela comédia romântica que a gente ama."
        },
        {
            pergunta: "O que eu mais falo que amo em você?",
            opcoes: ["Sua inteligência", "Seu sorriso", "Seu coração generoso", "Todas as anteriores"],
            correta: 3,
            certo: "Isso mesmo — é impossível escolher só uma coisa.",
            errado: "Quase! A resposta certa é: todas as anteriores."
        }
    ],

    // Mensagens escondidas nas folhas da árvore do amor
    folhas: [
        "Você é o meu lugar favorito no mundo.",
        "Cada dia ao seu lado é um dia que eu escolheria de novo.",
        "Obrigado por existir do jeito que você é.",
        "Você me faz querer ser uma pessoa melhor.",
        "Seu abraço é o meu porto seguro.",
        "Amo construir uma vida com você, um dia de cada vez.",
        "Você é a resposta para perguntas que eu nem sabia que tinha.",
        "Com você, até o comum vira especial."
    ],

    // Motivos revelados nas estrelas do céu (o elemento-assinatura da página)
    estrelas: [
        "porque você é gentil até quando ninguém está olhando",
        "porque seu abraço resolve o que palavras não conseguem",
        "porque você acredita em mim mais do que eu mesmo",
        "porque seu sorriso é o meu comercial favorito de bom dia",
        "porque você transforma qualquer lugar em lar",
        "porque você me escuta de verdade",
        "porque sua força é silenciosa e enorme",
        "porque você celebra minhas conquistas como se fossem suas",
        "porque você é a pessoa mais leal que eu conheço",
        "porque com você o futuro parece um lugar bom para se estar",
        "porque você me ama do jeito que eu sou",
        "porque simplesmente: é você. sempre foi."
    ],

    // Mensagem final
    finalTexto: "Não existe presente maior do que poder dividir a vida com você. Obrigado por cada risada, cada silêncio confortável, cada recomeço e cada 'vem cá' depois de um dia difícil. Que este novo ano de vida seja tão bonito quanto você faz o meu ser todos os dias.",
    finalAssinatura: "Com todo o meu amor, hoje e sempre.",
    rodapeFrase: "o amor não se mede em dias, mas em quantas vezes o coração sorri"
};

/* =====================================================================
   UTILITÁRIOS
   ===================================================================== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const aleatorio = (min, max) => Math.random() * (max - min) + min;
const prefereMenosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function salvarLocal(chave, valor) {
    try { localStorage.setItem(chave, JSON.stringify(valor)); } catch (e) { /* localStorage indisponível */ }
}
function lerLocal(chave, padrao) {
    try {
        const v = localStorage.getItem(chave);
        return v ? JSON.parse(v) : padrao;
    } catch (e) { return padrao; }
}

/* =====================================================================
   PREENCHIMENTO DE TEXTOS A PARTIR DO CONFIG
   ===================================================================== */
function preencherTextosEstaticos() {
    $('#abertura-nome').textContent = CONFIG.nomeDela;
    $('#final-texto').textContent = CONFIG.finalTexto;
    $('#final-assinatura').textContent = CONFIG.finalAssinatura;
    $('#rodape-frase').textContent = CONFIG.rodapeFrase;
}

/* =====================================================================
   CANVAS DE FUNDO: ESTRELAS + PARTÍCULAS AMBIENTES
   ===================================================================== */
const BgCanvas = (() => {
    const canvas = $('#bg-canvas');
    const ctx = canvas.getContext('2d');
    let w, h, estrelas = [], particulas = [];

    function redimensionar() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = document.documentElement.scrollHeight;
    }

    function iniciar() {
        redimensionar();
        const qtdEstrelas = window.innerWidth < 600 ? 60 : 130;
        const qtdParticulas = window.innerWidth < 600 ? 18 : 35;

        estrelas = Array.from({ length: qtdEstrelas }, () => ({
            x: Math.random() * w, y: Math.random() * h,
            r: aleatorio(0.6, 1.8), fase: Math.random() * Math.PI * 2, vel: aleatorio(0.01, 0.03)
        }));
        particulas = Array.from({ length: qtdParticulas }, criarParticula);

        requestAnimationFrame(desenhar);
        window.addEventListener('resize', redimensionar);
    }

    function criarParticula() {
        return {
            x: Math.random() * w, y: Math.random() * h,
            r: aleatorio(1.5, 3.5), vy: aleatorio(0.15, 0.4), vx: aleatorio(-0.15, 0.15),
            op: aleatorio(0.2, 0.55)
        };
    }

    function desenhar(t) {
        ctx.clearRect(0, 0, w, h);
        // estrelas cintilantes
        estrelas.forEach(s => {
            const brilho = 0.4 + Math.sin(t * s.vel + s.fase) * 0.35;
            ctx.beginPath();
            ctx.fillStyle = `rgba(212,175,55,${Math.max(0, brilho)})`;
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
        });
        // partículas suaves (poeira rosa/dourada subindo)
        particulas.forEach(p => {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255,182,206,${p.op})`;
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.y -= p.vy; p.x += p.vx;
            if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        });
        requestAnimationFrame(desenhar);
    }

    return { iniciar, atualizarAltura: redimensionar };
})();

/* =====================================================================
   CHUVA DE CORAÇÕES E PÉTALAS (elementos DOM caindo pela tela)
   ===================================================================== */
function chuvaDeAmor(qtd = 26, duracaoMs = 6500) {
    const simbolos = ['💗', '💖', '🌸', '🌹', '💕', '🌺'];
    for (let i = 0; i < qtd; i++) {
        setTimeout(() => {
            const el = document.createElement('span');
            el.className = 'item-chuva';
            el.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
            el.style.left = Math.random() * 100 + 'vw';
            el.style.setProperty('--drift', (aleatorio(-60, 60)) + 'px');
            el.style.setProperty('--giro', (aleatorio(180, 540)) + 'deg');
            el.style.fontSize = aleatorio(14, 26) + 'px';
            el.style.animationDuration = aleatorio(4, 7) + 's';
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 8000);
        }, (i / qtd) * duracaoMs);
    }
}

/* =====================================================================
   TELA DE ABERTURA
   ===================================================================== */
function iniciarAbertura() {
    const tela = $('#tela-abertura');
    const btn = $('#btn-abrir');
    const principal = $('#conteudo-principal');
    const musicBtn = $('#music-toggle');

    btn.addEventListener('click', () => {
        tela.classList.add('saindo');
        principal.classList.remove('hidden');
        musicBtn.classList.remove('hidden');
        BgCanvas.atualizarAltura();
        setTimeout(() => {
            tela.style.display = 'none';
            iniciarMaquinaDeEscrever();
            inicializarObservadorDeRevelo();
            chuvaDeAmor(14, 3000);
        }, 950);
    }, { once: true });
}

/* =====================================================================
   EFEITO MÁQUINA DE ESCREVER
   ===================================================================== */
function iniciarMaquinaDeEscrever() {
    const elTitulo = $('#typewriter-titulo');
    const elTexto = $('#typewriter-texto');

    function digitar(el, texto, velocidade, aoTerminar) {
        let i = 0;
        (function passo() {
            if (i <= texto.length) {
                el.textContent = texto.slice(0, i);
                i++;
                setTimeout(passo, velocidade);
            } else if (aoTerminar) aoTerminar();
        })();
    }

    digitar(elTitulo, CONFIG.heroTitulo, 55, () => {
        digitar(elTexto, CONFIG.heroTexto, 28);
    });
}

/* =====================================================================
   REVELO DE SEÇÕES AO ROLAR (IntersectionObserver)
   ===================================================================== */
function inicializarObservadorDeRevelo() {
    const alvos = $$('.reveal, .timeline-item');
    const obs = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                obs.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15 });
    alvos.forEach(el => obs.observe(el));
}

/* =====================================================================
   BARRA DE PROGRESSO DE SCROLL
   ===================================================================== */
function iniciarBarraDeScroll() {
    const barra = $('#scroll-progress-bar');
    window.addEventListener('scroll', () => {
        const altura = document.documentElement.scrollHeight - window.innerHeight;
        const progresso = altura > 0 ? (window.scrollY / altura) * 100 : 0;
        barra.style.width = progresso + '%';
    }, { passive: true });
}

/* =====================================================================
   MÚSICA — BOTÃO PLAY/PAUSE
   ===================================================================== */
function iniciarMusica() {
    const audio = $('#bg-audio');
    const btn = $('#music-toggle');
    btn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(() => { /* navegador pode bloquear autoplay sem interação — ok, pois isso já é um clique */ });
            btn.classList.add('tocando');
            btn.querySelector('.music-icon').textContent = '❚❚';
        } else {
            audio.pause();
            btn.classList.remove('tocando');
            btn.querySelector('.music-icon').textContent = '♪';
        }
    });
}

/* =====================================================================
   CONTADOR DE TEMPO JUNTOS
   ===================================================================== */
function iniciarContador() {
    const CONFIG = {
    dataInicio: new Date(2023, 5, 9) // mês 5 = junho (em JavaScript os meses começam em 0)
};
    const inicio = new Date(CONFIG.dataInicio).getTime();
    const dias = $('#cont-dias'), horas = $('#cont-horas'), min = $('#cont-minutos'), seg = $('#cont-segundos');

    function atualizar() {
        const diff = Math.max(0, Date.now() - inicio);
        const s = Math.floor(diff / 1000);
        dias.textContent = Math.floor(s / 86400);
        horas.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, '0');
        min.textContent = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
        seg.textContent = String(s % 60).padStart(2, '0');
    }
    atualizar();
    setInterval(atualizar, 1000);
}

/* =====================================================================
   TIMELINE
   ===================================================================== */
function renderizarTimeline() {
    const lista = $('#timeline-lista');
    lista.innerHTML = CONFIG.timeline.map(item => `
    <div class="timeline-item reveal">
      <span class="timeline-ponto"></span>
      <div class="timeline-card">
        <span class="timeline-icone">${item.icone}</span>
        <p class="timeline-data">${item.data}</p>
        <h3 class="timeline-titulo">${item.titulo}</h3>
        <p class="timeline-texto">${item.texto}</p>
      </div>
    </div>
  `).join('');
}

/* =====================================================================
   GALERIA + LIGHTBOX
   ===================================================================== */
function renderizarGaleria() {
    const grid = $('#galeria-grid');
    grid.innerHTML = CONFIG.galeria.map((foto, i) => `
    <figure class="polaroid reveal" style="--rot:${(i % 2 === 0 ? -1 : 1) * aleatorio(2, 5).toFixed(1)}deg" data-index="${i}">
      <div class="polaroid-foto">${foto.foto ? `<img src="${foto.foto}" alt="${foto.legenda}">` : foto.emoji}</div>
      <figcaption class="polaroid-legenda">${foto.legenda}</figcaption>
    </figure>
  `).join('');

    const lightbox = $('#lightbox');
    const lbFoto = $('#lightbox-foto');
    const lbLegenda = $('#lightbox-legenda');

    $$('.polaroid', grid).forEach(card => {
        card.addEventListener('click', () => {
            const item = CONFIG.galeria[card.dataset.index];
            lbFoto.innerHTML = item.foto ? `<img src="${item.foto}" alt="${item.legenda}">` : item.emoji;
            lbLegenda.textContent = item.legenda;
            lightbox.classList.add('ativo');
        });
    });

    $('#lightbox-fechar').addEventListener('click', () => lightbox.classList.remove('ativo'));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('ativo'); });
}

/* =====================================================================
   CARTINHAS INTERATIVAS
   ===================================================================== */
function renderizarCartas() {
    const grid = $('#cartas-grid');
    grid.innerHTML = CONFIG.cartas.map((carta, i) => `
    <div class="envelope reveal" data-index="${i}" role="button" tabindex="0" aria-label="Abrir cartinha">
      <div class="envelope-corpo"></div>
      <div class="envelope-tampa"></div>
      <div class="envelope-selo">♥</div>
      <p class="envelope-titulo">${carta.titulo}</p>
      <div class="carta-papel">${carta.corpo}</div>
    </div>
  `).join('');

    $$('.envelope', grid).forEach(env => {
        const abrir = () => env.classList.toggle('aberto');
        env.addEventListener('click', abrir);
        env.addEventListener('keypress', (e) => { if (e.key === 'Enter') abrir(); });
    });
}

/* =====================================================================
   BALÕES PARA ESTOURAR
   ===================================================================== */
function iniciarBaloes() {
    const palco = $('#baloes-palco');
    const progressoEl = $('#baloes-progresso');
    const cores = ['#e0668c', '#d4af37', '#8f1237', '#f3d987', '#b3184a'];
    const totalBaloes = 10;
    let estourados = 0;

    progressoEl.textContent = `0 de ${totalBaloes} estourados`;

    function criarBalao(i) {
        const balao = document.createElement('div');
        balao.className = 'balao';
        const cor = cores[i % cores.length];
        balao.style.background = `radial-gradient(circle at 30% 30%, ${cor}, ${cor}dd)`;
        balao.style.left = aleatorio(4, 90) + '%';
        balao.style.setProperty('--sway', aleatorio(-10, 10) + 'deg');
        const duracao = aleatorio(7, 12);
        balao.style.animationDuration = duracao + 's';
        balao.dataset.motivo = CONFIG.motivosBaloes[i % CONFIG.motivosBaloes.length];

        balao.addEventListener('click', () => estourar(balao));
        balao.addEventListener('animationend', (e) => {
            if (e.animationName !== 'estourar' && balao.isConnected) balao.remove();
        });
        palco.appendChild(balao);
    }

    function estourar(balao) {
        if (balao.classList.contains('estourando')) return;
        balao.classList.add('estourando');
        estourados++;
        progressoEl.textContent = `${estourados} de ${totalBaloes} estourados`;
        mostrarDicaFlutuante(balao, balao.dataset.motivo);
        setTimeout(() => balao.remove(), 350);
        if (estourados >= totalBaloes) {
            setTimeout(() => { progressoEl.textContent = 'Todos os balões estourados! 🎉 ' + progressoEl.textContent; }, 400);
        }
    }

    function mostrarDicaFlutuante(balao, texto) {
        const rect = balao.getBoundingClientRect();
        const dica = document.createElement('div');
        dica.className = 'folha-balao ativo';
        dica.style.left = Math.min(window.innerWidth - 260, Math.max(10, rect.left - 60)) + 'px';
        dica.style.top = Math.max(10, rect.top - 20 + window.scrollY - window.scrollY) + 'px';
        dica.style.position = 'fixed';
        dica.innerHTML = `<p>💗 ${texto}</p>`;
        document.body.appendChild(dica);
        setTimeout(() => { dica.classList.remove('ativo'); setTimeout(() => dica.remove(), 300); }, 1800);
    }

    for (let i = 0; i < totalBaloes; i++) {
        setTimeout(() => criarBalao(i), i * 900);
    }
    // Continua repondo balões esporadicamente para manter a seção viva
    setInterval(() => {
        if ($$('.balao', palco).length < 4) criarBalao(Math.floor(Math.random() * totalBaloes));
    }, 3500);
}

/* =====================================================================
   QUIZ DO CASAL (com progresso salvo em localStorage)
   ===================================================================== */
function iniciarQuiz() {
    const perguntas = CONFIG.quiz;
    let atual = lerLocal('quiz_atual', 0);
    let acertos = lerLocal('quiz_acertos', 0);
    if (atual >= perguntas.length) { atual = 0; acertos = 0; }

    const elPergunta = $('#quiz-pergunta');
    const elOpcoes = $('#quiz-opcoes');
    const elContador = $('#quiz-contador');
    const elBarra = $('#quiz-progresso-barra');
    const elFeedback = $('#quiz-feedback');
    const card = $('#quiz-card');
    const resultado = $('#quiz-resultado');

    function renderPergunta() {
        const p = perguntas[atual];
        elContador.textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;
        elBarra.style.width = (atual / perguntas.length) * 100 + '%';
        elPergunta.textContent = p.pergunta;
        elFeedback.textContent = '';
        elOpcoes.innerHTML = p.opcoes.map((op, i) => `<button class="quiz-opcao" data-i="${i}">${op}</button>`).join('');

        $$('.quiz-opcao', elOpcoes).forEach(btn => {
            btn.addEventListener('click', () => responder(btn, p));
        });
    }

    function responder(btn, p) {
        const i = Number(btn.dataset.i);
        $$('.quiz-opcao', elOpcoes).forEach(b => b.classList.add('desabilitada'));
        if (i === p.correta) {
            btn.classList.add('certa');
            elFeedback.textContent = p.certo;
            acertos++;
        } else {
            btn.classList.add('errada');
            $$('.quiz-opcao', elOpcoes)[p.correta].classList.add('certa');
            elFeedback.textContent = p.errado;
        }
        salvarLocal('quiz_acertos', acertos);

        setTimeout(() => {
            atual++;
            salvarLocal('quiz_atual', atual);
            if (atual < perguntas.length) {
                renderPergunta();
            } else {
                mostrarResultado();
            }
        }, 1500);
    }

    function mostrarResultado() {
        card.classList.add('hidden');
        resultado.classList.remove('hidden');
        const pct = Math.round((acertos / perguntas.length) * 100);
        $('#quiz-resultado-titulo').textContent = pct === 100 ? 'Perfeito! Você me conhece de cor 💞' : 'Muito bem!';
        $('#quiz-resultado-texto').textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas (${pct}%).`;
    }

    $('#quiz-reiniciar').addEventListener('click', () => {
        atual = 0; acertos = 0;
        salvarLocal('quiz_atual', 0); salvarLocal('quiz_acertos', 0);
        resultado.classList.add('hidden');
        card.classList.remove('hidden');
        renderPergunta();
    });

    renderPergunta();
}

/* =====================================================================
   MINI JOGO: ENCONTRE OS CORAÇÕES ESCONDIDOS (recorde salvo em localStorage)
   ===================================================================== */
function iniciarJogoCoracoes() {
    const palco = $('#jogo-palco');
    const elEncontrados = $('#jogo-encontrados');
    const elTotal = $('#jogo-total');
    const elTotalTexto = $('#jogo-total-texto');
    const elRecorde = $('#jogo-recorde');
    const total = 8;
    let encontrados = 0;
    let inicioMs = null;

    elTotal.textContent = total;
    elTotalTexto.textContent = total;
    const recordeAtual = lerLocal('jogo_recorde_segundos', null);
    elRecorde.textContent = recordeAtual ? recordeAtual.toFixed(1) + 's' : '--';

    function montar() {
        palco.innerHTML = '';
        encontrados = 0;
        inicioMs = null;
        elEncontrados.textContent = '0';
        const ocupadas = [];

        for (let i = 0; i < total; i++) {
            const coracao = document.createElement('span');
            coracao.className = 'jogo-coracao';
            coracao.textContent = '💗';
            let top, left, tentativa = 0;
            do {
                top = aleatorio(5, 88); left = aleatorio(3, 92); tentativa++;
            } while (tentativa < 12 && ocupadas.some(p => Math.abs(p.top - top) < 10 && Math.abs(p.left - left) < 10));
            ocupadas.push({ top, left });
            coracao.style.top = top + '%';
            coracao.style.left = left + '%';
            coracao.style.animationDelay = aleatorio(0, 2) + 's';
            coracao.style.transform = `rotate(${aleatorio(-20, 20)}deg)`;

            coracao.addEventListener('click', () => {
                if (coracao.classList.contains('achado')) return;
                if (inicioMs === null) inicioMs = Date.now();
                coracao.classList.add('achado');
                encontrados++;
                elEncontrados.textContent = encontrados;
                if (encontrados === total) finalizar();
            });
            palco.appendChild(coracao);
        }
    }

    function finalizar() {
        const segundos = (Date.now() - inicioMs) / 1000;
        const recorde = lerLocal('jogo_recorde_segundos', null);
        if (!recorde || segundos < recorde) {
            salvarLocal('jogo_recorde_segundos', segundos);
            elRecorde.textContent = segundos.toFixed(1) + 's (novo recorde!)';
        }
        setTimeout(() => chuvaDeAmor(16, 2500), 200);
    }

    $('#jogo-reiniciar').addEventListener('click', montar);
    montar();
}

/* =====================================================================
   ÁRVORE DO AMOR
   ===================================================================== */
function iniciarArvore() {
    const container = $('#arvore-folhas');
    const posicoes = [
        { top: '18%', left: '30%' }, { top: '14%', left: '52%' }, { top: '28%', left: '20%' },
        { top: '24%', left: '68%' }, { top: '38%', left: '38%' }, { top: '34%', left: '58%' },
        { top: '10%', left: '40%' }, { top: '46%', left: '48%' }
    ];

    const balaoTexto = document.createElement('div');
    balaoTexto.className = 'folha-balao';
    balaoTexto.innerHTML = `<p id="folha-balao-texto"></p><button id="folha-balao-fechar">fechar</button>`;
    document.body.appendChild(balaoTexto);
    const textoEl = $('#folha-balao-texto', balaoTexto);
    $('#folha-balao-fechar', balaoTexto).addEventListener('click', () => balaoTexto.classList.remove('ativo'));

    CONFIG.folhas.forEach((msg, i) => {
        const pos = posicoes[i % posicoes.length];
        const folha = document.createElement('div');
        folha.className = 'folha';
        folha.style.top = pos.top;
        folha.style.left = pos.left;
        folha.style.animationDelay = aleatorio(0, 2) + 's';
        folha.setAttribute('role', 'button');
        folha.setAttribute('tabindex', '0');
        folha.setAttribute('aria-label', 'Ler mensagem da folha');

        const abrir = (e) => {
            textoEl.textContent = msg;
            const rect = folha.getBoundingClientRect();
            balaoTexto.style.left = Math.min(window.innerWidth - 280, Math.max(10, rect.left - 100)) + 'px';
            balaoTexto.style.top = (rect.top + window.scrollY - 10) + 'px';
            balaoTexto.classList.add('ativo');
        };
        folha.addEventListener('click', abrir);
        folha.addEventListener('keypress', (e) => { if (e.key === 'Enter') abrir(e); });
        container.appendChild(folha);
    });
}

/* =====================================================================
   CÉU ESTRELADO — CONSTELAÇÃO DE MOTIVOS (elemento-assinatura)
   ===================================================================== */
function iniciarCeu() {
    const palco = $('#ceu-palco');
    const canvasLinhas = $('#ceu-linhas');
    const ctx = canvasLinhas.getContext('2d');
    const progressoEl = $('#ceu-progresso');
    const revelacao = $('#ceu-revelacao');
    const revelacaoTexto = $('#ceu-revelacao-texto');
    const total = CONFIG.estrelas.length;
    const posicoesDescobertas = [];
    let descobertas = 0;

    progressoEl.textContent = `0 de ${total} estrelas descobertas`;

    function redimensionarCanvas() {
        canvasLinhas.width = palco.clientWidth;
        canvasLinhas.height = palco.clientHeight;
        desenharLinhas();
    }

    function desenharLinhas() {
        ctx.clearRect(0, 0, canvasLinhas.width, canvasLinhas.height);
        if (posicoesDescobertas.length < 2) return;
        ctx.strokeStyle = 'rgba(243,217,135,0.45)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        posicoesDescobertas.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();
    }

    // gera posições espalhadas, evitando aglomerar
    const posicoes = [];
    for (let i = 0; i < total; i++) {
        posicoes.push({ top: aleatorio(4, 88), left: aleatorio(3, 94) });
    }

    posicoes.forEach((pos, i) => {
        const estrela = document.createElement('button');
        estrela.className = 'estrela';
        estrela.style.top = pos.top + '%';
        estrela.style.left = pos.left + '%';
        estrela.style.animationDelay = aleatorio(0, 2) + 's';
        estrela.setAttribute('aria-label', 'Descobrir motivo');

        estrela.addEventListener('click', () => {
            if (estrela.classList.contains('descoberta')) {
                revelacaoTexto.textContent = CONFIG.estrelas[i];
                revelacao.classList.remove('hidden');
                return;
            }
            estrela.classList.add('descoberta');
            descobertas++;
            progressoEl.textContent = `${descobertas} de ${total} estrelas descobertas`;
            revelacaoTexto.textContent = CONFIG.estrelas[i];
            revelacao.classList.remove('hidden');

            const rect = estrela.getBoundingClientRect();
            const palcoRect = palco.getBoundingClientRect();
            posicoesDescobertas.push({ x: rect.left - palcoRect.left + rect.width / 2, y: rect.top - palcoRect.top + rect.height / 2 });
            desenharLinhas();

            if (descobertas === total) {
                setTimeout(() => chuvaDeAmor(18, 3000), 300);
            }
        });
        palco.appendChild(estrela);
    });

    window.addEventListener('resize', redimensionarCanvas);
    // aguarda o layout assentar antes de medir o palco
    setTimeout(redimensionarCanvas, 300);
}

/* =====================================================================
   CAIXA DE PRESENTE + CONFETE (canvas, sem bibliotecas externas)
   ===================================================================== */
function iniciarPresente() {
    const caixa = $('#presente-caixa');
    const dica = $('#presente-dica');
    let aberto = false;

    function abrir() {
        if (aberto) return;
        aberto = true;
        caixa.classList.add('aberta');
        dica.textContent = 'feliz aniversário, meu amor 💛';
        ConfeteCanvas.explodir();
    }
    caixa.addEventListener('click', abrir);
    caixa.addEventListener('keypress', (e) => { if (e.key === 'Enter') abrir(); });
}

const ConfeteCanvas = (() => {
    const canvas = $('#confete-canvas');
    const ctx = canvas.getContext('2d');
    let particulas = [];
    let animando = false;

    function redimensionar() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', redimensionar);
    redimensionar();

    const cores = ['#e0668c', '#d4af37', '#8f1237', '#f3d987', '#ffffff', '#b3184a'];

    function explodir() {
        const originX = window.innerWidth / 2;
        const originY = window.innerHeight / 2;
        const qtd = window.innerWidth < 600 ? 90 : 160;
        for (let i = 0; i < qtd; i++) {
            const angulo = Math.random() * Math.PI * 2;
            const velocidade = aleatorio(4, 13);
            particulas.push({
                x: originX, y: originY,
                vx: Math.cos(angulo) * velocidade,
                vy: Math.sin(angulo) * velocidade - 3,
                cor: cores[Math.floor(Math.random() * cores.length)],
                tam: aleatorio(4, 9),
                rot: Math.random() * Math.PI,
                vrot: aleatorio(-0.2, 0.2),
                vida: 0, vidaMax: aleatorio(70, 130)
            });
        }
        if (!animando) { animando = true; requestAnimationFrame(loop); }
    }

    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particulas.forEach(p => {
            p.vy += 0.18; // gravidade
            p.x += p.vx; p.y += p.vy; p.rot += p.vrot; p.vida++;
            const opacidade = Math.max(0, 1 - p.vida / p.vidaMax);
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.globalAlpha = opacidade;
            ctx.fillStyle = p.cor;
            ctx.fillRect(-p.tam / 2, -p.tam / 4, p.tam, p.tam / 2);
            ctx.restore();
        });
        particulas = particulas.filter(p => p.vida < p.vidaMax && p.y < canvas.height + 40);
        if (particulas.length > 0) {
            requestAnimationFrame(loop);
        } else {
            animando = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    return { explodir };
})();

/* =====================================================================
   BOTÃO DE CHUVA DE CORAÇÕES NA SEÇÃO FINAL
   ===================================================================== */
function iniciarBotaoChuva() {
    $('#btn-chuva').addEventListener('click', () => chuvaDeAmor(30, 5000));
}

/* =====================================================================
   INICIALIZAÇÃO GERAL
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    preencherTextosEstaticos();
    BgCanvas.iniciar();
    iniciarBarraDeScroll();
    iniciarMusica();
    iniciarAbertura();

    iniciarContador();
    renderizarTimeline();
    renderizarGaleria();
    renderizarCartas();
    iniciarBaloes();
    iniciarQuiz();
    iniciarJogoCoracoes();
    iniciarArvore();
    iniciarCeu();
    iniciarPresente();
    iniciarBotaoChuva();

    // reajusta a altura do canvas de fundo após todo o conteúdo montar
    setTimeout(() => BgCanvas.atualizarAltura(), 500);
});