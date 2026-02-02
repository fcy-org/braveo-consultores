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
  .from(".header-subtitle", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out",
  }, "-=0.2")
  // CTA button aparece com bounce
  .fromTo(".cta-button",
    {
      opacity: 0,
      yPercent: 50,
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.1");

// Registra ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animação da seção Quem Somos
gsap.from(".about-tag", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
});

gsap.from(".about-title", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.1,
});

gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
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
gsap.from(".clients-tag", {
  scrollTrigger: {
    trigger: ".clients",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
});

gsap.from(".clients-title", {
  scrollTrigger: {
    trigger: ".clients",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.1,
});

// Animação da seção Estrutura
gsap.from(".structure-tag", {
  scrollTrigger: {
    trigger: ".structure",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
});

gsap.from(".structure-title", {
  scrollTrigger: {
    trigger: ".structure",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.1,
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
gsap.from(".companies-tag", {
  scrollTrigger: {
    trigger: ".companies",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
});

gsap.from(".companies-title", {
  scrollTrigger: {
    trigger: ".companies",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.1,
});

gsap.fromTo(".company-card",
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
  }
);

// Animação da seção Vídeo
gsap.from(".video-tag", {
  scrollTrigger: {
    trigger: ".video-section",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
});

gsap.from(".video-title", {
  scrollTrigger: {
    trigger: ".video-section",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.1,
});

gsap.from(".video-wrapper", {
  scrollTrigger: {
    trigger: ".video-wrapper",
    start: "top 85%",
  },
  opacity: 0,
  scale: 0.95,
  duration: 0.7,
});

// Animação da seção Contato
gsap.from(".contact-tag", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
});

gsap.from(".contact-title", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 0.1,
});

gsap.from(".contact-subtitle", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 0.2,
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
