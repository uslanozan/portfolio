// ==========================================
// 1. MATRIX RAIN BACKGROUND
// ==========================================
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブプ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charArray = matrixChars.split('');

const fontSize = 14;
let columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

const draw = () => {
    // Hafif iz bırakma efekti için şeffaf siyah
    ctx.fillStyle = 'rgba(3, 3, 3, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];

        // Senin özel renk paletin: Koyu turkuaz ve Neon Cyan
        const isCyan = Math.random() > 0.98;
        ctx.fillStyle = isCyan ? '#00f3ff' : '#0F3836'; 

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
};

// Matrix Başlat
setInterval(draw, 35);

// Pencere boyutu değişirse düzelt
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const newColumns = canvas.width / fontSize;
    for (let x = drops.length; x < newColumns; x++) {
        drops[x] = 1;
    }
    columns = newColumns;
});


// ==========================================
// 2. LANGUAGE DICTIONARY (SÖZLÜK)
// ==========================================
const translations = {
    tr: {
        subtitle: "Bilgisayar Mühendisi | <span class='accent-text'>Uygulama Geliştirme</span> | <span class='accent-text'>Mikroservis</span> | <span class='accent-text'>Yapay Zeka Entegrasyonu</span>",
        bio_text: "Eski CTI Analisti, şimdinin Bilgisayar Mühendisi, geleceğin <span class='highlight'>Yazılım Mimarı</span>. Kodlama odak noktam ve güvenliğe önem veriyorum. Kendi projelerimi geliştirirken <span class='highlight'>Irotech Ar-Ge</span>'de çalışıyorum.",

        // Logs
        log_irotech: "<span class='highlight'>Irotech Ar-Ge</span> (Muğla). Yazılım Geliştirici. 3+ Yıl aktif Ar-Ge ve yazılım geliştirme deneyimi.",
        log_sagel: "Sagel AI - Yazılım Mühendisi Stajyeri (Remote).",
        log_sca: "Sca Social - Proje Yönetimi Stajyeri (Remote).",
        log_threatmon: "<span class='highlight'>ThreatMon</span> - Siber Tehdit Analisti (CTI). Uçtan uca istihbarat platformu deneyimi.",
        log_getsoft: "GETSoftware - Veritabanı Stajyeri (Hybrid).",
        
        // Projects
        proj_bitsafe_desc: "Ağ trafiği izleme, raporlama ve ML tabanlı risk analizi yapan tam kapsamlı güvenlik mimarisi.",
        proj_gollama_desc: "Yapay zeka ajanlarını (agents) yöneten, görev dağılımı yapan Go tabanlı LLM orkestratörü.",
        proj_kamikaze_desc: "Domainler için subdomain keşfi yapan, IP ve HTTP yanıtlarını analiz eden Recon aracı.",
        proj_ecomarket_desc: "BTK Hackathon 2025 için yaptığım e-ticaret ve sürdürülebilir çevreci, LLM destekli Flutter mobil uygulaması.",
        proj_smartroute_desc: "Leaflet haritası üzerinde Dijkstra algoritması kullanarak en kısa yolu bulan navigasyon aracı.",
        proj_minima_desc: "Kız arkadaşım için yaptığım kişiselleştirilmiş not alma uygulaması ❤️❤️.",
        proj_dejaview_desc: "Etiketlenmemiş haber metinlerini sınıflandıran ve veri keşfi için hiyerarşik kümeleme (clustering) yapan ML projesi.",
        proj_sdn_desc: "Mininet ve Ryu kullanılarak SDN ortamında DASH video akışı ve yük dengeleme (load balancing) simülasyonu.",

        archive_view_all: "GitHub'daki tüm repoları gör"
    },

    en: {
        subtitle: "Computer Engineer | <span class='accent-text'>Application Development</span> | <span class='accent-text'>Microservice</span> | <span class='accent-text'>AI Integration</span>",
        bio_text: "Ex-CTI Analyst, current Computer Engineer, future <span class='highlight'>Software Architect</span>. Focused on coding with a priority on security. Working at <span class='highlight'>Irotech R&D</span> while building my own projects.",

        // Logs
        log_irotech: "<span class='highlight'>Irotech R&D</span> (Muğla). Software Developer. 3+ Years of active R&D and software development experience.",
        log_sagel: "Sagel AI - Software Engineer Intern (Remote).",
        log_sca: "Sca Social - Project Management Intern (Remote).",
        log_threatmon: "<span class='highlight'>ThreatMon</span> - Cyber Threat Analyst (CTI). End-to-End Intelligence Platform.",
        log_getsoft: "GETSoftware - Database Intern (Hybrid).",

        // Projects
        proj_bitsafe_desc: "Comprehensive security architecture for network monitoring, reporting, and ML-based risk analysis.",
        proj_gollama_desc: "Go-based LLM orchestrator that manages multiple AI agents and handles task delegation.",
        proj_kamikaze_desc: "Recon tool for subdomain discovery, IP resolution, and HTTP response analysis.",
        proj_ecomarket_desc: "My e-commerce and sustainable, LLM-supported Flutter mobile application that I developed for the BTK Hackathon 2025.",
        proj_smartroute_desc: "Shortest path finder on Leaflet maps using Dijkstra's algorithm.",
        proj_minima_desc: "A personalized note-taking app I developed for my girlfriend ❤️❤️.",
        proj_dejaview_desc: "ML project that classifies unlabeled news texts and performs hierarchical clustering for data discovery.",
        proj_sdn_desc: "DASH video streaming and load balancing implementation in an SDN environment using Mininet and Ryu controller.",

        archive_view_all: "Check all repositories on GitHub"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    const data = translations[lang];
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (data[key]) {
            el.innerHTML = data[key];
        }
    });
}

// Varsayılan dil TR
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('tr');
});


// ==========================================
// 3. FOOTER TYPING EFFECT (DÖNGÜSEL MESAJLAR)
// ==========================================
const footerText = document.getElementById('terminal-text');
const messages = [
    "analyzing_network_traffic...",
    "training_ai_model...",
    "updating_dependencies...",
    "visitor_detected...",
    "waiting_for_input..."
];

let msgIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentMsg = messages[msgIndex];

    if (isDeleting) {
        footerText.innerHTML = `visitor@ozan-server:~$ ${currentMsg.substring(0, charIndex)}<span class="blinking-cursor">|</span>`;
        charIndex--;
        typeSpeed = 50;
    } else {
        footerText.innerHTML = `visitor@ozan-server:~$ ${currentMsg.substring(0, charIndex)}<span class="blinking-cursor">|</span>`;
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentMsg.length + 1) {
        isDeleting = true;
        typeSpeed = 2000; // Mesaj bitince bekle
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

document.addEventListener('DOMContentLoaded', typeWriter);


// ==========================================
// 4. DECRYPT EMAIL EFFECT
// ==========================================
const emailDisplay = document.getElementById('emailDisplay');
const lockIcon = document.querySelector('.lock-icon');
const realEmail = "uslanozan@gmail.com"; 
const decryptChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

function decryptEmail() {
    let iterations = 0;
    const interval = setInterval(() => {
        emailDisplay.innerText = realEmail
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return realEmail[index];
                }
                return decryptChars[Math.floor(Math.random() * decryptChars.length)];
            })
            .join("");

        if (iterations >= realEmail.length) {
            clearInterval(interval);
            lockIcon.innerHTML = '<i class="fas fa-lock-open"></i> ACCESS_GRANTED';
            lockIcon.classList.add('unlocked');
            emailDisplay.style.borderColor = '#00f3ff';
            emailDisplay.style.color = '#00f3ff';
        }

        iterations += 1 / 3;
    }, 30);
}


// ==========================================
// 5. GLITCH TITLE (BAŞLIK EFEKTİ)
// ==========================================
const glitchText = document.querySelector('.glitch');
if(glitchText) {
    setInterval(() => {
        glitchText.classList.toggle('glitch-active');
        setTimeout(() => {
            glitchText.classList.remove('glitch-active');
        }, 200 + Math.random() * 400);
    }, 3000);
}