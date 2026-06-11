const pets = [
  {
    nome: "Rex",
    tipo: "dog",
    desc: "Amigável e cheio de energia",
    img: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&q=80"
  },
  {
    nome: "Luna",
    tipo: "cat",
    desc: "Carinhosa e tranquila",
    img: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&q=80"
  },
  {
    nome: "Thor",
    tipo: "dog",
    desc: "Protetor e leal",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80"
  },
  {
    nome: "Mia",
    tipo: "cat",
    desc: "Brincalhona e doce",
    img: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=600&q=80"
  },
  {
    nome: "Bob",
    tipo: "dog",
    desc: "Dócil e adora crianças",
    img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&q=80"
  },
  {
    nome: "Nala",
    tipo: "cat",
    desc: "Independente e elegante",
    img: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&q=80"
  },
  {
    nome: "Max",
    tipo: "dog",
    desc: "Curioso e muito inteligente",
    img: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=600&q=80"
  },
  {
    nome: "Mel",
    tipo: "cat",
    desc: "Adora colo e ronrona muito",
    img: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&q=80"
  },
  {
    nome: "Duke",
    tipo: "dog",
    desc: "Energético e adora passear",
    img: "https://images.unsplash.com/photo-1558929996-da64ba858215?w=600&q=80"
  },
  {
    nome: "Cleo",
    tipo: "cat",
    desc: "Curiosa e muito afetuosa",
    img: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600&q=80"
  },
  {
    nome: "Buddy",
    tipo: "dog",
    desc: "Alegre e companheiro fiel",
    img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&q=80"
  },
  {
    nome: "Lola",
    tipo: "cat",
    desc: "Delicada e muito carinhosa",
    img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600&q=80"
  }
];

const container = document.getElementById("petsContainer");

function render(lista) {
  container.innerHTML = "";
  lista.forEach(p => {
    const tag = p.tipo === "dog" ? "🐶 Cachorro" : "🐱 Gato";
    const idx = pets.indexOf(p);
    container.innerHTML += `
      <div class="card" onclick="abrirModal(${idx})">
        <span class="card-tag">${tag}</span>
        <img src="${p.img}">
        <div class="info">
          <h3>${p.nome}</h3>
          <p>${p.desc}</p>
        </div>
      </div>
    `;
  });
}

function filtrar(tipo, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if (tipo === "all") render(pets);
  else render(pets.filter(p => p.tipo === tipo));
}

function abrirModal(idx) {
  const p = pets[idx];
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalNome").innerText = p.nome;
  document.getElementById("modalDesc").innerText = p.desc;
  document.getElementById("modalImg").src = p.img;
  document.getElementById("modalTag").innerText = p.tipo === 'dog' ? '🐶 Cachorro' : '🐱 Gato';
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function adotar() {
  const nome = document.getElementById("modalNome").innerText;
  const desc = document.getElementById("modalDesc").innerText;
  const img  = document.getElementById("modalImg").src;
  const pet  = pets.find(p => p.nome === nome);
  const tipo = pet ? pet.tipo : "pet";
  const params = new URLSearchParams({ nome, desc, img, tipo });
  window.location.href = `adotar.html?${params}`;
}

function abrirCadastro() {
  document.getElementById("modalCadastro").style.display = "flex";
}

function fecharCadastro() {
  document.getElementById("modalCadastro").style.display = "none";
}

function cadastrarPet() {
  const nome = document.getElementById("cadNome").value.trim();
  const tipo = document.getElementById("cadTipo").value;
  const desc = document.getElementById("cadDesc").value.trim();
  const img = document.getElementById("cadImg").value.trim();

  if (!nome || !desc || !img) return alert("Preencha todos os campos!");

  pets.push({ nome, tipo, desc, img });
  render(pets);
  fecharCadastro();
}


function scrollToPets() {
  document.getElementById("pets").scrollIntoView({ behavior: "smooth" });
}

render(pets);

// ── PARTICLES ──
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5 + 0.3,
  dx: (Math.random() - 0.5) * 0.3,
  dy: (Math.random() - 0.5) * 0.3,
  alpha: Math.random() * 0.5 + 0.1
}));

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 107, 53, ${p.alpha})`;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(255, 107, 53, ${0.08 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}

drawParticles();

// ── CURSOR GLOW ──
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

// ── FADE IN ON SCROLL ──
const fadeEls = document.querySelectorAll('.sobre-inner, .steps-row, .cf-bottom, .depo-card, .contato-inner, .footer-inner');
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// ── USER HEADER ──
function renderUserHeader() {
  const userEl = document.getElementById('headerUser');
  const user = JSON.parse(localStorage.getItem('adotapet_user') || 'null');
  if (!user) {
    userEl.innerHTML = `<a href="login.html" class="btn-login-header">👤 Entrar</a>`;
    return;
  }
  const inicial = user.nome.charAt(0).toUpperCase();
  const primeiroNome = user.nome.split(' ')[0];
  userEl.innerHTML = `
    <div class="user-menu" id="userMenu">
      <button class="user-btn" onclick="toggleDropdown()">
        <div class="user-avatar">${inicial}</div>
        <span>${primeiroNome}</span>
      </button>
      <div class="user-dropdown" id="userDropdown">
        <div style="padding:10px 12px 8px">
          <div style="font-size:0.82rem;font-weight:700;color:var(--text)">${user.nome}</div>
          <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">${user.email}</div>
        </div>
        <div class="dropdown-divider"></div>
        <button class="dropdown-item danger" onclick="sairConta()">🚪 Sair da conta</button>
      </div>
    </div>
  `;
}

function toggleDropdown() {
  document.getElementById('userDropdown').classList.toggle('open');
}

function sairConta() {
  localStorage.removeItem('adotapet_user');
  renderUserHeader();
}

document.addEventListener('click', e => {
  const menu = document.getElementById('userMenu');
  if (menu && !menu.contains(e.target)) {
    const dd = document.getElementById('userDropdown');
    if (dd) dd.classList.remove('open');
  }
});

renderUserHeader();