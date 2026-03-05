const codes = [
  { platform: "1XBET", code: "DMV", percent: "200%", icon: "target" },
  { platform: "MELBET", code: "Manboy", percent: "200%", icon: "zap" },
  { platform: "BETWINNER", code: "DMV", percent: "200%", icon: "trophy" },
  { platform: "1WIN", code: "DMV", percent: "200%", icon: "rocket" },
  { platform: "888STARZ", code: "DMV", percent: "200%", icon: "star" },
  { platform: "MOSTBET", code: "DMV", percent: "200%", icon: "trending-up" }
];

const creator = {
  nom: "FO TCHINDA DORIEN",
  prenom: "Vanith",
  tel: "+237 6 99 55 08 24",
  email: "fotchinda04@gmail.com"
};

// --- CORE FUNCTIONS ---

function init() {
  renderCodes();
  renderCreator();
  lucide.createIcons();
  
  // Simulation de chargement
  setTimeout(() => {
    const loader = document.getElementById('preloader');
    loader.classList.add('opacity-0');
    setTimeout(() => loader.style.display = 'none', 700);
    startScrollReveal();
  }, 1200);
}

function renderCodes() {
  const grid = document.getElementById('codes-grid');
  grid.innerHTML = codes.map((item, index) => `
                <div class="code-card reveal bg-white p-10 rounded-[3.5rem] flex flex-col h-full" style="transition-delay: ${index * 100}ms">
                    <div class="flex items-center justify-between mb-8">
                        <div class="w-14 h-14 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center">
                            <i data-lucide="${item.icon}" class="w-6 h-6"></i>
                        </div>
                        <span class="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">Actif</span>
                    </div>
                    <h3 class="font-display text-3xl mb-2 text-slate-800">${item.platform}</h3>
                    <div class="mb-10">
                        <span class="text-5xl font-display text-violet-600">${item.percent}</span>
                        <p class="text-slate-400 font-semibold text-xs mt-1 tracking-widest uppercase">De Bonus Dépôt</p>
                    </div>
                    <div class="mt-auto pt-8 border-t border-slate-50">
                        <p class="text-[10px] font-bold text-slate-300 uppercase mb-4 tracking-widest">Utiliser le code</p>
                        <button onclick="handleCopy('${item.code}')" class="w-full flex items-center justify-between px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-violet-300 transition-all group/btn">
                            <span class="font-mono text-xl font-bold text-slate-700 tracking-wider">${item.code}</span>
                            <i data-lucide="copy" class="w-5 h-5 text-slate-300 group-hover/btn:text-violet-600 transition-colors"></i>
                        </button>
                    </div>
                </div>
            `).join('');
}

function renderCreator() {
  document.getElementById('creator-name').innerText = `${creator.prenom} ${creator.nom}`;
  const contactContainer = document.getElementById('creator-contact');
  
  const info = [
    { icon: 'phone-call', value: creator.tel, label: 'Direct Line' },
    { icon: 'at-sign', value: creator.email, label: 'Email Pro' }
  ];
  
  contactContainer.innerHTML = info.map(i => `
                <div class="flex items-center gap-5 p-5 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div class="w-12 h-12 bg-violet-600 rounded-2xl flex items-center justify-center text-white">
                        <i data-lucide="${i.icon}" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <p class="text-[10px] font-black text-violet-400 uppercase tracking-widest">${i.label}</p>
                        <p class="text-white font-medium">${i.value}</p>
                    </div>
                </div>
            `).join('');
}

function handleCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  
  const toast = document.getElementById('toast');
  toast.classList.add('opacity-100', 'translate-y-0', 'copy-success');
  toast.classList.remove('opacity-0', 'translate-y-10');
  
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0', 'copy-success');
    toast.classList.add('opacity-0', 'translate-y-10');
  }, 3000);
}

function startScrollReveal() {
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Navbar effect on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.classList.add('py-2');
    nav.querySelector('.glass-nav').classList.add('shadow-xl', 'bg-white/90');
  } else {
    nav.classList.remove('py-2');
    nav.querySelector('.glass-nav').classList.remove('shadow-xl', 'bg-white/90');
  }
});

window.onload = init;