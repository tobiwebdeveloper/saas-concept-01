<script setup lang="ts">
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import Pricing from "./components/Pricing.vue";
import TestimonialsMarquee from "./components/TestimonialsMarquee.vue";

gsap.registerPlugin(ScrollTrigger);

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  const hero = gsap.timeline();

  hero
    .from(".hero-title", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(".hero-text", {
      y: 20,
      opacity: 0,
      duration: 0.6,
    }, "-=0.5")
    .from(".hero-buttons", {
      y: 20,
      opacity: 0,
      duration: 0.5,
    }, "-=0.4");

  gsap.from(".trusted", {
    scrollTrigger: {
      trigger: ".trusted",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 0.4,
  });

  gsap.from(".feature-item", {
    scrollTrigger: {
      trigger: ".features",
      start: "top 75%",
    },
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: "power2.out",
  });
});
</script>

<template>
  <!-- HEADER -->
  <header>
  <div class="w-full shadow-xs bg-background sticky top-0 z-50">
  <nav class="relative max-w-6xl mx-auto px-6 py-6 flex items-center bg-background">

    <!-- logo -->
    <div class="font-bold text-xl">
      Notch UI
    </div>

    <!-- desktop nav -->
    <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-bold">
      <a class="shimmer" href="#hero">Home</a>
      <a class="shimmer" href="#features">Features</a>
      <a class="shimmer" href="#pricing">Pricing</a>
    </div>

    <!-- mobile button -->
    <div class="md:hidden  ml-4">
      <button class="text-secondary" @click="menuOpen = true">
        Menu
      </button>
    </div>

    <!-- CTA desktop -->
    <div class="ml-auto hidden md:block">
       <a class="btn-primary" href="#testimonials">Learn More</a>
    </div>
  </nav>
<!-- mobile overlay -->
<div v-if="menuOpen" class="fixed inset-0 z-50">

  <!-- backdrop -->
  <div class="absolute inset-0 bg-black/40" @click="menuOpen = false"></div>

  <!-- FULLSCREEN PANEL -->
  <div class="absolute inset-0 bg-background p-6 flex flex-col">

    <!-- top bar -->
    <div class="flex items-center justify-between mb-10">
      <div class="font-bold text-xl">Menu</div>

      <button class="text-secondary" @click="menuOpen = false">
        Close
      </button>
    </div>

    <!-- links -->
    <div class="flex flex-col gap-6 mt-8 text-5xl font-medium">
      <a href="#hero" @click="menuOpen = false">Home</a>
      <a href="#features" @click="menuOpen = false">Features</a>
      <a href="#pricing" @click="menuOpen = false">Pricing</a>
      <a href="#testimonials" @click="menuOpen = false">Learn More</a>
    </div>



  </div>
</div>
</div>
    <!-- HERO -->
    <section class="min-h-screen flex items-center justify-center px-6">
      <div class="w-full flex flex-col items-center text-center md:py-20 sm:py-8">

        <div class="max-w-2xl">
          <h1 class="hero-title shimmer text-3xl md:text-5xl font-bold leading-tight">
            Introducing...
          </h1>

          <p class="hero-text mt-6 text-secondary text-sm md:text-lg">
            The fastest UI component library on the planet.
          </p>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-4 mt-10 hero-buttons">
          <a class="btn-primary" href="#pricing">View Pricing</a>
          <a class="btn-secondary" href="#features">Features</a>
        </div>

        <div class="mt-14 w-full px-4">
          <div class="aspect-video w-full max-w-6xl mx-auto rounded-xl shadow-sm flex items-center justify-center hero-preview bg-white border-1">
            <p class="text-black">16:9 Dashboard</p>
          </div>
        </div>

      </div>
    </section>
  </header>

  <!-- TRUST -->
  <section class="sm:py-8 md:py-20 trusted text-center" id="trust">
    <h1 class="text-3xl md:text-6xl shimmer">
      Trusted by 10,000+ users
    </h1>
    <h1 class="text-2xl md:text-6xl shimmer">
      Trusted by 500+ companies
    </h1>
  </section>

  <!-- DIVIDER -->
  <div class="h-px w-full bg-gradient-to-r from-transparent via-gray-400/20 to-transparent my-16 md:my-24"></div>

  <!-- TESTIMONIALS -->
  <section class="testimonials sm:py-8 md:py-20" id="testimonials">
    <TestimonialsMarquee />
  </section>

  <!-- DIVIDER -->
  <div class="h-px w-full bg-gradient-to-r from-transparent via-gray-400/20 to-transparent my-16 md:my-24"></div>

  <!-- FEATURES -->
  <section id="features" class="features  text-center md:text-center sm:py-8 md:py-20">
    <div class="max-w-6xl mx-auto px-6">

      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold">Everything you need</h2>
        <p class="text-secondary mt-2">A clean system built for speed and scale</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

        <div class="space-y-2 feature-item">
          <div class="text-xl shimmer">Fast setup</div>
          <p class="text-secondary text-sm">Drop components and build instantly.</p>
        </div>

        <div class="space-y-2 feature-item">
          <div class="text-xl shimmer">Design system</div>
          <p class="text-secondary text-sm">Consistent tokens, spacing, and layout rules.</p>
        </div>

        <div class="space-y-2 feature-item">
          <div class="text-xl shimmer">Block based</div>
          <p class="text-secondary text-sm">Compose full pages using reusable blocks.</p>
        </div>

        <div class="space-y-2 feature-item">
          <div class="text-xl shimmer">Responsive</div>
          <p class="text-secondary text-sm">Works perfectly across all devices.</p>
        </div>

        <div class="space-y-2 feature-item">
          <div class="text-xl shimmer">Developer first</div>
          <p class="text-secondary text-sm">Clean TS + Vue architecture.</p>
        </div>

        <div class="space-y-2 feature-item">
          <div class="text-xl shimmer">Production ready</div>
          <p class="text-secondary text-sm">Built like a real SaaS system.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- PRICING -->
  <section id="pricing" class="pricing py-28">
    <Pricing />
  </section>

<footer class="border-t relative border-white/10 bg-background py-10">
    <div class="mt-8 pt-6 border-t border-white/10 text-center text-xs text-secondary">
      © 2026 Notch UI. Forge Boys.
    </div>
                  <div class="flex items-center justify-center pointer-events-none">
  <span class="text-[2rem] md:text-[4rem] font-bold text-black/83  select-none">
    notch
  </span>
</div>
</footer>
</template>

