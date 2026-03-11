<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ParticleCanvas from "./ParticleCanvas.vue";
import { useTypingEffect } from "../composables/useTypingEffect";

const isVisible = ref(false);

const { displayText } = useTypingEffect([
  "Frontend Developer",
  "Vue.js Expert",
  "UI Enthusiast",
  "Problem Solver",
]);

// Stats counter animation
interface StatItem {
  label: string;
  target: number;
  suffix: string;
  current: number;
}

const stats = ref<StatItem[]>([
  { label: "Years Experience", target: 3, suffix: "+", current: 0 },
  { label: "Users Served", target: 1000, suffix: "+", current: 0 },
  { label: "Projects Delivered", target: 6, suffix: "+", current: 0 },
]);

const statsVisible = ref(false);
let statsAnimated = false;

function animateCounters() {
  if (statsAnimated) return;
  statsAnimated = true;
  const duration = 2000;

  stats.value.forEach((stat) => {
    const startTime = performance.now();
    function update() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      stat.current = Math.round(eased * stat.target);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

let statsObserver: IntersectionObserver | null = null;

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);

  const statsEl = document.getElementById("hero-stats");
  if (statsEl) {
    statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          statsVisible.value = true;
          animateCounters();
        }
      },
      { threshold: 0.5 },
    );
    statsObserver.observe(statsEl);
  }
});

onUnmounted(() => {
  statsObserver?.disconnect();
});

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Magnetic button effect
function handleMagnetic(e: MouseEvent) {
  const btn = e.currentTarget as HTMLElement;
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
}

function resetMagnetic(e: MouseEvent) {
  const btn = e.currentTarget as HTMLElement;
  btn.style.transform = "translate(0, 0) scale(1)";
}

// Photo tilt effect
const photoTiltX = ref(0);
const photoTiltY = ref(0);

function handlePhotoMove(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  photoTiltX.value = ((y - rect.height / 2) / rect.height) * -12;
  photoTiltY.value = ((x - rect.width / 2) / rect.width) * 12;
}

function resetPhotoTilt() {
  photoTiltX.value = 0;
  photoTiltY.value = 0;
}

// Orbiting tech labels
const techOrbitItems = [
  { label: "Vue", color: "#42b883" },
  { label: "React", color: "#61dafb" },
  { label: "Angular", color: "#dd0031" },
  { label: "TS", color: "#3178c6" },
  { label: "Nuxt", color: "#00dc82" },
  { label: "Tailwind", color: "#38bdf8" },
];
</script>

<template>
  <section
    class="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"
  >
    <!-- Particle constellation background -->
    <ParticleCanvas />

    <!-- Gradient orbs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div
        class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      >
        <!-- Left: Text content -->
        <div
          class="flex-1 text-center lg:text-left"
          :class="[
            'transition-all duration-1000 transform',
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10',
          ]"
        >
          <h1 class="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span class="text-gradient-rainbow">Sherif Aboraya</span>
          </h1>
          <h2
            class="text-2xl md:text-4xl text-slate-300 mb-8 font-light h-12 md:h-14"
          >
            <span class="text-gradient-rainbow">{{ displayText }}</span
            ><span class="typing-cursor">|</span>
          </h2>
          <p
            class="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            3+ years of expertise building modern web applications with Vue,
            React, Angular, and TypeScript. Passionate about creating clean,
            responsive interfaces and exceptional user experiences.
          </p>

          <div class="flex gap-4 justify-center lg:justify-start flex-wrap">
            <button
              @click="scrollToSection('projects')"
              @mousemove="handleMagnetic"
              @mouseleave="resetMagnetic"
              class="magnetic-btn px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-shadow duration-300"
              style="
                background: linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899);
              "
            >
              View My Work
            </button>
            <button
              @click="scrollToSection('contact')"
              @mousemove="handleMagnetic"
              @mouseleave="resetMagnetic"
              class="magnetic-btn px-8 py-4 border-2 border-purple-500/50 text-purple-300 rounded-lg font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <!-- Social links -->
          <div class="flex gap-6 justify-center lg:justify-start mt-8">
            <a
              href="https://github.com/ShikoFCAI"
              target="_blank"
              class="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sherif-aboraya"
              target="_blank"
              class="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
            <a
              href="mailto:sherifaboraya24@gmail.com"
              class="text-slate-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <svg
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right: Photo with orbiting tech ring -->
        <div
          class="flex-shrink-0"
          :class="[
            'transition-all duration-1000 delay-300 transform',
            isVisible
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 translate-x-16 scale-90',
          ]"
        >
          <div
            class="photo-container relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
            @mousemove="handlePhotoMove"
            @mouseleave="resetPhotoTilt"
          >
            <!-- Orbiting ring of tech labels -->
            <div class="orbit-ring absolute inset-[-40px] md:inset-[-50px]">
              <div
                v-for="(tech, i) in techOrbitItems"
                :key="tech.label"
                class="orbit-item absolute"
                :style="{
                  '--orbit-delay': `-${i * (20 / techOrbitItems.length)}s`,
                  '--orbit-color': tech.color,
                }"
              >
                <span
                  class="inline-block px-2.5 py-1 rounded-full text-xs font-bold shadow-lg"
                  :style="{
                    background: tech.color + '20',
                    color: tech.color,
                    border: `1px solid ${tech.color}50`,
                    boxShadow: `0 0 12px ${tech.color}30`,
                  }"
                >
                  {{ tech.label }}
                </span>
              </div>
            </div>

            <!-- Glowing gradient ring behind photo -->
            <div
              class="absolute inset-[-3px] rounded-full photo-glow-ring"
            ></div>

            <!-- Photo -->
            <div
              class="photo-wrapper relative w-full h-full rounded-full overflow-hidden border-2 border-slate-700/50"
              :style="{
                transform: `perspective(800px) rotateX(${photoTiltX}deg) rotateY(${photoTiltY}deg)`,
                transition: 'transform 0.15s ease-out',
              }"
            >
              <img
                src="/me.jpg"
                alt="Sherif Aboraya"
                class="w-full h-full object-cover photo-reveal scale-125"
              />
              <!-- Shine overlay on hover -->
              <div
                class="photo-shine absolute inset-0 pointer-events-none"
              ></div>
            </div>

            <!-- Decorative dots -->
            <div class="absolute -bottom-4 -right-4 w-20 h-20 opacity-20">
              <svg
                viewBox="0 0 100 100"
                fill="currentColor"
                class="text-purple-400"
              >
                <circle cx="10" cy="10" r="3" />
                <circle cx="30" cy="10" r="3" />
                <circle cx="50" cy="10" r="3" />
                <circle cx="70" cy="10" r="3" />
                <circle cx="10" cy="30" r="3" />
                <circle cx="30" cy="30" r="3" />
                <circle cx="50" cy="30" r="3" />
                <circle cx="70" cy="30" r="3" />
                <circle cx="10" cy="50" r="3" />
                <circle cx="30" cy="50" r="3" />
                <circle cx="50" cy="50" r="3" />
                <circle cx="70" cy="50" r="3" />
                <circle cx="10" cy="70" r="3" />
                <circle cx="30" cy="70" r="3" />
                <circle cx="50" cy="70" r="3" />
                <circle cx="70" cy="70" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats counters -->
      <div
        id="hero-stats"
        :class="[
          'mt-16 transition-all duration-1000 delay-500 transform',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        <div class="flex gap-8 md:gap-16 justify-center flex-wrap">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-gradient-rainbow">
              {{ stat.current }}{{ stat.suffix }}
            </div>
            <div class="text-slate-400 text-sm mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <svg
        class="w-6 h-6 text-purple-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.typing-cursor {
  animation: blink 1s step-end infinite;
  font-weight: 300;
  color: #8b5cf6;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.magnetic-btn {
  transition:
    transform 0.2s ease-out,
    box-shadow 0.3s ease;
}

/* Photo reveal animation */
.photo-reveal {
  animation: photoReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
}

@keyframes photoReveal {
  0% {
    clip-path: circle(0% at 50% 50%);
    filter: saturate(0) brightness(0.5);
  }
  60% {
    clip-path: circle(55% at 50% 50%);
    filter: saturate(0.5) brightness(0.8);
  }
  100% {
    clip-path: circle(75% at 50% 50%);
    filter: saturate(1) brightness(1);
  }
}

/* Glowing ring behind photo */
.photo-glow-ring {
  background: conic-gradient(
    from 0deg,
    #06b6d4,
    #8b5cf6,
    #ec4899,
    #f59e0b,
    #10b981,
    #06b6d4
  );
  animation: ringRotate 6s linear infinite;
  filter: blur(1px);
}

@keyframes ringRotate {
  to {
    transform: rotate(360deg);
  }
}

/* Shine sweep on hover */
.photo-shine {
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.12) 45%,
    rgba(255, 255, 255, 0.06) 50%,
    transparent 55%
  );
  transform: translateX(-100%);
  transition: none;
}

.photo-wrapper:hover .photo-shine {
  animation: shineSweep 0.8s ease-out;
}

@keyframes shineSweep {
  to {
    transform: translateX(100%);
  }
}

/* Orbiting tech labels */
.orbit-ring {
  animation: orbitSpin 20s linear infinite;
}

.orbit-item {
  --angle: 0deg;
  left: 50%;
  top: 50%;
  animation: orbitItem 20s linear infinite;
  animation-delay: var(--orbit-delay);
}

/* Place items in a circle and counter-rotate to keep text upright */
.orbit-item:nth-child(1) {
  --start-angle: 0deg;
}
.orbit-item:nth-child(2) {
  --start-angle: 60deg;
}
.orbit-item:nth-child(3) {
  --start-angle: 120deg;
}
.orbit-item:nth-child(4) {
  --start-angle: 180deg;
}
.orbit-item:nth-child(5) {
  --start-angle: 240deg;
}
.orbit-item:nth-child(6) {
  --start-angle: 300deg;
}

@keyframes orbitSpin {
  to {
    transform: rotate(360deg);
  }
}

.orbit-item {
  transform: rotate(var(--start-angle)) translateX(calc(50% + 56px))
    rotate(calc(-1 * var(--start-angle)));
  animation: none;
}

/* Counter-rotate to keep labels readable as the ring spins */
.orbit-ring .orbit-item span {
  animation: counterSpin 20s linear infinite;
}

@keyframes counterSpin {
  to {
    transform: rotate(-360deg);
  }
}

/* Responsive: hide orbit on very small screens */
@media (max-width: 400px) {
  .orbit-ring {
    display: none;
  }
}
</style>
