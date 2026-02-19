// ==================== //
// CAROUSEL DE MARCAS   //
// ==================== //

const marcas = [
  "abre-chicco__preview.png",
  "alyne__preview.png",
  "aromatica__preview.png",
  "baruel__preview.png",
  "belliz__preview.png",
  "blowtex__preview.png",
  "cadiveu__preview.png",
  "ccm__preview.png",
  "cheirinho-de-bebe__preview.png",
  "cia__preview.png",
  "clin-off__preview.png",
  "condor__preview.png",
  "corpo-dourado__preview.png",
  "cotto__preview.png",
  "dailus__preview.png",
  "dana__preview.png",
  "depi__preview.png",
  "dermattive__preview.png",
  "duracell__preview.png",
  "duty__preview.png",
  "dux__preview.png",
  "ekopure__preview.png",
  "ems__preview.png",
  "essity__preview-1__preview.png",
  "evergreen__preview.png",
  "farmax__02__preview.png",
  "fattore__preview.png",
  "fixed__preview.png",
  "forever__preview.png",
  "gota__preview.png",
  "grupobticario__preview.png",
  "havaianas__preview.png",
  "kimberly__preview.png",
  "kraft__preview.png",
  "labotrat__preview.png",
  "leite-rosa__preview.png",
  "logo-camil-2024__preview.png",
  "logo-danone-2024__preview.png",
  "lola__preview.png",
  "marata__preview.png",
  "marcia__preview.png",
  "m-dias__preview.png",
  "memphis__preview.png",
  "merheje__preview.png",
  "mili__preview.png",
  "niely__preview.png",
  "nivea__preview.png",
  "novica__preview.png",
  "pg__02__preview.png",
  "phebo__preview.png",
  "salon-line__preview.png",
  "sinter__preview.png",
  "sococo__preview.png",
  "unicharm__preview.png",
  "wenova__preview.jpg",
  "widi__preview.png",
  "yama__preview.png",
];

function getAltFromFilename(filename) {
  return filename
    .replace(/__preview.*\.(png|jpg)$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function loadCarouselLogos() {
  const carouselTrack = document.getElementById("carouselTrack");
  if (!carouselTrack) return;

  const logoClass =
    "carousel-logo h-10 w-auto min-w-[80px] object-contain opacity-60 hover:opacity-100 transition-all duration-300 shrink-0 md:h-12 lg:h-14";

  // Adiciona logos originais + duplicados para loop infinito
  const allLogos = [...marcas, ...marcas];

  allLogos.forEach((filename) => {
    const img = document.createElement("img");
    img.src = `assets/marcas/${filename}`;
    img.alt = getAltFromFilename(filename);
    img.className = logoClass;
    img.loading = "lazy";
    carouselTrack.appendChild(img);
  });
}

loadCarouselLogos();

// ==================== //
// CONTROLES DO VÍDEO   //
// ==================== //

const heroVideo = document.getElementById("heroVideo");
const btnPlayPause = document.getElementById("btnPlayPause");
const btnMute = document.getElementById("btnMute");
const iconPause = document.getElementById("iconPause");
const iconPlay = document.getElementById("iconPlay");
const iconMuted = document.getElementById("iconMuted");
const iconSound = document.getElementById("iconSound");

btnPlayPause?.addEventListener("click", () => {
  if (heroVideo.paused) {
    heroVideo.play();
    iconPause.classList.remove("hidden");
    iconPlay.classList.add("hidden");

    // GTM dataLayer: Track video play
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "video_play",
      video_name: "Video Institucional Braveo",
      video_action: "play",
    });
  } else {
    heroVideo.pause();
    iconPause.classList.add("hidden");
    iconPlay.classList.remove("hidden");
  }
});

btnMute?.addEventListener("click", () => {
  heroVideo.muted = !heroVideo.muted;
  iconMuted.classList.toggle("hidden");
  iconSound.classList.toggle("hidden");

  // GTM dataLayer: Track unmute (engajamento forte)
  if (!heroVideo.muted) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "video_unmute",
      video_name: "Video Institucional Braveo",
      video_action: "unmute",
    });
  }
});

const tl = gsap.timeline();

// Overlay aparece deslizando de cima para baixo
tl.from(".header-overlay", {
  yPercent: -100,
  duration: 0.8,
  delay: 0.3,
  ease: "power3.out",
})
  // Logo aparece de baixo para cima
  .from(".header-logo", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power2.out",
  })
  // Título aparece linha por linha
  .from(".header-title span", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    stagger: 0.12,
    ease: "power2.out",
  })
  // Subtítulo aparece com fade
  .from(
    ".header-subtitle",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.2",
  )
  // CTA button aparece com bounce
  .fromTo(
    ".cta-button",
    {
      opacity: 0,
      yPercent: 50,
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    "-=0.1",
  );

// Registra ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animação da seção Contexto
gsap.from("#contexto h2", {
  scrollTrigger: {
    trigger: "#contexto",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
});

gsap.from("#contexto p", {
  scrollTrigger: {
    trigger: "#contexto",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.15,
});

// Animação da seção Solução
gsap.from("#solucao > div > p:first-child", {
  scrollTrigger: {
    trigger: "#solucao",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
});

gsap.from(".about-title", {
  scrollTrigger: {
    trigger: "#solucao",
    start: "top 75%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.1,
});

gsap.from(".about-text", {
  scrollTrigger: {
    trigger: "#solucao",
    start: "top 75%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.2,
});

gsap.from(".about-number-item", {
  scrollTrigger: {
    trigger: ".about-numbers",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.5,
  stagger: 0.15,
});

// Animação da seção Clientes
gsap.from(".clients-title", {
  scrollTrigger: {
    trigger: ".clients",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
});

// Animação da seção Estrutura
gsap.from(".structure-title", {
  scrollTrigger: {
    trigger: ".structure",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
});

gsap.from(".structure-slider", {
  scrollTrigger: {
    trigger: ".structure-slider",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.7,
});

// Animação da seção Nossas Empresas
gsap.from(".companies-title", {
  scrollTrigger: {
    trigger: ".companies",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
});

gsap.fromTo(
  ".company-card",
  {
    opacity: 0,
    y: 50,
  },
  {
    scrollTrigger: {
      trigger: ".companies-grid",
      start: "top 85%",
    },
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out",
    clearProps: "transform",
  },
);

// Animação da seção Benefícios
gsap.from("#beneficios h2", {
  scrollTrigger: {
    trigger: "#beneficios",
    start: "top 80%",
    onEnter: () => {
      // GTM dataLayer: ViewContent quando usuário chega na seção de benefícios
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "view_content",
        content_name: "Seção Benefícios",
        content_category: "Landing Page Engagement",
      });
    },
    once: true,
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
});

// Zig-zag lateral nos itens de benefício
document.querySelectorAll("#beneficios .space-y-0 > div").forEach((el) => {
  if (el.classList.contains("h-px")) return;
  const fromRight = el.className.includes("ml-auto");
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 88%",
    },
    opacity: 0,
    x: fromRight ? 80 : -80,
    duration: 0.7,
    ease: "power2.out",
  });
});

// Animação da seção Contato (mobile)
gsap.from(".contact-title", {
  scrollTrigger: {
    trigger: ".contact-header",
    start: "top 95%",
    once: true,
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
});

gsap.from(".contact-subtitle", {
  scrollTrigger: {
    trigger: ".contact-header",
    start: "top 95%",
    once: true,
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 0.15,
});

gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.7,
});

// ==================== //
// SLIDER ESTRUTURA     //
// ==================== //

const sliderTrack = document.getElementById("sliderTrack");
const sliderPrev = document.getElementById("sliderPrev");
const sliderNext = document.getElementById("sliderNext");
const sliderDots = document.getElementById("sliderDots");
const dots = sliderDots?.querySelectorAll(".slider-dot");

let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slider-slide").length;

function updateSlider() {
  if (!sliderTrack) return;

  // Move o slider
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Atualiza os dots
  dots?.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.remove("bg-white/30");
      dot.classList.add("bg-white", "w-6");
    } else {
      dot.classList.remove("bg-white", "w-6");
      dot.classList.add("bg-white/30");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Event listeners
sliderNext?.addEventListener("click", nextSlide);
sliderPrev?.addEventListener("click", prevSlide);

// Dots navigation
dots?.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentSlide = parseInt(dot.dataset.index);
    updateSlider();
  });
});

// Inicializa o slider
updateSlider();

// Auto-play opcional (descomente se quiser)
// setInterval(nextSlide, 5000);

// ==================== //
// FORMULÁRIO CONTATO   //
// ==================== //

const contactForm = document.getElementById("contactForm");
const contactFormMobile = document.getElementById("contactFormMobile");
const phoneInput = document.getElementById("phone");
const phoneInputMobile = document.getElementById("phone-mobile");
const cpfCnpjInput = document.getElementById("cpfcnpj");
const cpfCnpjInputMobile = document.getElementById("cpfcnpj-mobile");

// Máscara de telefone brasileiro
function maskPhone(value) {
  value = value.replace(/\D/g, "");
  value = value.substring(0, 11);

  if (value.length > 10) {
    // Celular: (00) 00000-0000
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else if (value.length > 6) {
    // Fixo: (00) 0000-0000
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
  } else if (value.length > 0) {
    value = value.replace(/^(\d{0,2})$/, "($1");
  }

  return value;
}

// Máscara de CPF ou CNPJ
function maskCpfCnpj(value) {
  value = value.replace(/\D/g, "");

  if (value.length <= 11) {
    // CPF: 000.000.000-00
    value = value.substring(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    // CNPJ: 00.000.000/0001-00
    value = value.substring(0, 14);
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
  }

  return value;
}

// Validação de CPF
function isValidCpf(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i);
  let digit = (sum * 10) % 11;
  if (digit === 10) digit = 0;
  if (digit !== parseInt(cpf[9])) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i);
  digit = (sum * 10) % 11;
  if (digit === 10) digit = 0;
  if (digit !== parseInt(cpf[10])) return false;

  return true;
}

// Validação de CNPJ
function isValidCnpj(cnpj) {
  cnpj = cnpj.replace(/\D/g, "");
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  let sum = 0;
  for (let i = 0; i < 12; i++) sum += parseInt(cnpj[i]) * weights1[i];
  let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (digit !== parseInt(cnpj[12])) return false;

  sum = 0;
  for (let i = 0; i < 13; i++) sum += parseInt(cnpj[i]) * weights2[i];
  digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (digit !== parseInt(cnpj[13])) return false;

  return true;
}

// Event listeners para máscaras
phoneInput?.addEventListener("input", (e) => {
  e.target.value = maskPhone(e.target.value);
});
phoneInputMobile?.addEventListener("input", (e) => {
  e.target.value = maskPhone(e.target.value);
});

cpfCnpjInput?.addEventListener("input", (e) => {
  e.target.value = maskCpfCnpj(e.target.value);
});
cpfCnpjInputMobile?.addEventListener("input", (e) => {
  e.target.value = maskCpfCnpj(e.target.value);
});

// Handler de submit compartilhado
function handleFormSubmit(form, nameId, phoneEl, cpfCnpjEl) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById(nameId).value.trim();
    const phone = phoneEl.value.replace(/\D/g, "");
    const cpfCnpj = cpfCnpjEl.value.replace(/\D/g, "");
    const state = form.querySelector('input[name="state"]:checked')?.value;

    // Validações
    if (name.length < 3) {
      alert("Por favor, digite seu nome completo.");
      return;
    }

    if (phone.length < 10) {
      alert("Por favor, digite um telefone válido.");
      return;
    }

    if (cpfCnpj.length === 11 && !isValidCpf(cpfCnpj)) {
      alert("CPF inválido. Por favor, verifique.");
      return;
    }

    if (cpfCnpj.length === 14 && !isValidCnpj(cpfCnpj)) {
      alert("CNPJ inválido. Por favor, verifique.");
      return;
    }

    if (cpfCnpj.length !== 11 && cpfCnpj.length !== 14) {
      alert("Por favor, digite um CPF ou CNPJ válido.");
      return;
    }

    if (!state) {
      alert("Por favor, selecione seu estado.");
      return;
    }

    const tipoDocumento = cpfCnpj.length === 11 ? "cpf" : "cnpj";

    // GTM dataLayer: Evento quando clica no botão Enviar (antes de processar)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "initiate_checkout",
      content_name: "Formulário de Contato",
      content_category: "Lead Form",
      lead_type: tipoDocumento === "cnpj" ? "B2B" : "B2C",
      state: state,
    });

    const ENDPOINT = "https://script.google.com/macros/s/AKfycbzeyI62xPEwHIxI3wfc9yT6jaFTY8l2EMSH2tJ5JkBnkNEJj5DKE-EAEP2euVKc2hBB4Q/exec";

    const NUMERO_MARANHAO = "+558695331294";
    const NUMERO_PIAUI = "+558694271798";

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;

    try {
      await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          nome: name,
          telefone: phone,
          documento: cpfCnpj,
          tipoDocumento,
          estado: state,
        }),
      });

      // GTM dataLayer: LEAD - Evento principal quando formulário é enviado com sucesso
      window.dataLayer.push({
        event: "generate_lead",
        content_name: "Formulário Braveo",
        content_category: "B2B Lead",
        lead_status: "completed",
        lead_type: tipoDocumento === "cnpj" ? "B2B" : "B2C",
        state: state,
        form_name: "contact_form",
        lead_source: "landing_page",
      });

      submitBtn.textContent = "✓ Enviado!";
      form.reset();

      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      const whatsappNumber =
        state.toLowerCase() === "ma" ? NUMERO_MARANHAO : NUMERO_PIAUI;
      const mensagem = encodeURIComponent(
        "Olá! Venho do site e gostaria de mais informações sobre a BRAVEO.",
      );

      // GTM dataLayer: Track WhatsApp click
      window.dataLayer.push({
        event: "whatsapp_click",
        content_name: "Botão WhatsApp",
        state: state,
        click_context: "post_form_submission",
      });

      window.open(`https://wa.me/${whatsappNumber}?text=${mensagem}`);
    } catch (erro) {
      console.error("Erro ao enviar:", erro);
      alert("Erro ao enviar. Tente novamente.");
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// Registra o handler nos dois formulários
if (contactForm && phoneInput && cpfCnpjInput) {
  handleFormSubmit(contactForm, "name", phoneInput, cpfCnpjInput);
}
if (contactFormMobile && phoneInputMobile && cpfCnpjInputMobile) {
  handleFormSubmit(
    contactFormMobile,
    "name-mobile",
    phoneInputMobile,
    cpfCnpjInputMobile,
  );
}

// ==================== //
// SCROLL DEPTH TRACKING //
// ==================== //

let scrollDepthTracked = {
  25: false,
  50: false,
  75: false,
  90: false,
};

window.addEventListener("scroll", () => {
  const scrollPercent =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  Object.keys(scrollDepthTracked).forEach((depth) => {
    if (scrollPercent >= depth && !scrollDepthTracked[depth]) {
      scrollDepthTracked[depth] = true;

      // GTM dataLayer: Scroll depth
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "scroll_depth",
        scroll_depth: depth + "%",
        page_location: window.location.pathname,
      });
    }
  });
});

// ==================== //
// TIME ON PAGE TRACKING //
// ==================== //

let timeOnPage = 0;
const timeIntervals = [30, 60, 120, 300]; // 30s, 1min, 2min, 5min
let trackedIntervals = new Set();

setInterval(() => {
  timeOnPage++;

  timeIntervals.forEach((interval) => {
    if (timeOnPage === interval && !trackedIntervals.has(interval)) {
      trackedIntervals.add(interval);

      // GTM dataLayer: Time on page
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "time_on_page",
        time_duration: interval,
        time_duration_formatted: interval + "s",
        page_location: window.location.pathname,
      });
    }
  });
}, 1000);
