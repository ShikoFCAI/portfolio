<script setup lang="ts">
import { reactive } from "vue";
import { useScrollAnimation } from "../composables/useScrollAnimation";

useScrollAnimation();

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  highlights?: string[];
  image: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    name: "Trasul Plus",
    description:
      "Gmail-style internal messaging platform serving 1,000+ Kuwait Ministry of Finance employees — centralised communication across 15+ departments",
    technologies: ["Vue 3", "Nuxt 4", "TypeScript", "Tailwind CSS"],
    image: "/screenshots/trasul-plus.png",
    accentColor: "#06b6d4",
    highlights: [
      "Replaced legacy email chains with threaded conversations, cutting avg response time",
      "Built advanced filters and bulk actions handling thousands of daily messages",
      "Implemented delegation workflows enabling seamless authority hand-offs",
    ],
  },
  {
    name: "Smashi TV",
    description:
      "Full-scale streaming platform rebuild for MENA audiences — shipped from scratch in 3 months with 2× faster load times",
    technologies: ["Vue 3", "Nuxt 3", "TypeScript", "Tailwind CSS"],
    link: "https://smashi.tv",
    image: "/screenshots/smashi-tv.png",
    accentColor: "#8b5cf6",
    highlights: [
      "Rebuilt entire frontend from legacy codebase, halving page load times",
      "Engineered custom video player with adaptive streaming & DRM",
      "Designed and launched discount campaign that drove 240% sales lift",
    ],
  },
  {
    name: "Heart Of Rak",
    description:
      "Official Ras Al Khaimah Government platform showcasing tourism, business, and community — multi-language, high-traffic",
    technologies: ["Vue 3", "Nuxt 3", "TypeScript"],
    link: "https://heartofrak.com",
    image: "/screenshots/heart-of-rak.png",
    accentColor: "#f59e0b",
    highlights: [
      "Delivered bilingual (AR/EN) content platform with RTL-first architecture",
      "Optimised Lighthouse score to 90+ for performance & accessibility",
      "Integrated CMS-driven dynamic content for rapid government updates",
    ],
  },
  {
    name: "Luftborn Internal HR",
    description:
      "Company-wide HR system managing PTO, time tracking, and employee lifecycle for a 100+ person organisation",
    technologies: ["Angular 18/19", "TypeScript", "Tailwind CSS"],
    link: "https://www.luftborn.com/home",
    image: "/screenshots/luftborn-hr.png",
    accentColor: "#ec4899",
    highlights: [
      "Built 5 core modules automating PTO approvals, time logs, and payroll prep",
      "Designed role-based access matrix securing data across 4 permission tiers",
      "Reduced HR admin overhead by unifying fragmented spreadsheet workflows",
    ],
  },
  {
    name: "E-Tendering Platform",
    description:
      "End-to-end digital procurement platform for Kuwait government — tender creation, bid management, and committee evaluation",
    technologies: ["Vue 3", "Nuxt 4", "TypeScript"],
    image: "/screenshots/e-tendering.png",
    accentColor: "#10b981",
    highlights: [
      "Digitised full tender lifecycle from draft to award, eliminating paper-based delays",
      "Built multi-stage evaluation workflow with committee scoring and audit trail",
      "Implemented secure document vault with versioning and access controls",
    ],
  },
  {
    name: "Smashi TV App",
    description:
      "Dedicated Smart TV streaming app for Samsung Tizen — certified and shipped to the Samsung TV app store",
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    image: "/screenshots/smashi-tv-app.png",
    accentColor: "#6366f1",
    highlights: [
      "Engineered spatial-navigation system for D-pad remote control",
      "Passed Samsung Tizen QA certification on first submission",
      "Achieved <3s cold-start launch on mid-range TV hardware",
    ],
  },
];

// 3D tilt + spotlight tracking per card
const cardStates = reactive<
  Record<
    number,
    {
      spotX: string;
      spotY: string;
      tiltX: number;
      tiltY: number;
      isHovered: boolean;
    }
  >
>({});

function handleCardMove(e: MouseEvent, index: number) {
  const card = e.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  cardStates[index] = {
    spotX: x + "px",
    spotY: y + "px",
    tiltX: ((y - centerY) / centerY) * -5,
    tiltY: ((x - centerX) / centerX) * 5,
    isHovered: true,
  };
}

function handleCardLeave(index: number) {
  cardStates[index] = {
    spotX: "50%",
    spotY: "50%",
    tiltX: 0,
    tiltY: 0,
    isHovered: false,
  };
}
</script>

<template>
  <section id="projects" class="py-20 bg-slate-900">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
        >
          Featured <span class="text-gradient-purple">Projects</span>
        </h2>
        <p
          class="text-slate-400 text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-100 transform translate-y-10"
        >
          Delivering impactful solutions for government and enterprise clients
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
            :style="{ transitionDelay: `${(index + 2) * 100}ms` }"
          >
            <div
              class="card-spotlight rounded-xl border border-slate-700 hover:border-violet-500/50 transition-all duration-300 h-full flex flex-col overflow-hidden"
              :style="{
                '--spotlight-x': cardStates[index]?.spotX ?? '50%',
                '--spotlight-y': cardStates[index]?.spotY ?? '50%',
                '--spotlight-color': `${project.accentColor}15`,
                background: 'rgba(30, 41, 59, 0.5)',
                transform: cardStates[index]?.isHovered
                  ? `perspective(1000px) rotateX(${cardStates[index].tiltX}deg) rotateY(${cardStates[index].tiltY}deg) scale3d(1.02, 1.02, 1.02)`
                  : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
                transition:
                  'transform 0.2s ease-out, border-color 0.3s, box-shadow 0.3s',
                boxShadow: cardStates[index]?.isHovered
                  ? `0 25px 50px -12px ${project.accentColor}20`
                  : 'none',
              }"
              @mousemove="handleCardMove($event, index)"
              @mouseleave="handleCardLeave(index)"
            >
              <!-- Project Screenshot -->
              <div class="relative overflow-hidden aspect-video">
                <img
                  :src="project.image"
                  :alt="`${project.name} screenshot`"
                  class="w-full h-full object-cover transition-transform duration-500"
                  :class="
                    cardStates[index]?.isHovered ? 'scale-110' : 'scale-100'
                  "
                />
                <div
                  class="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  :style="{
                    background: `linear-gradient(to top, rgba(15,23,42,0.8), transparent)`,
                  }"
                >
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    class="px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105"
                    :style="{ background: project.accentColor }"
                  >
                    Visit Live Site
                  </a>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-6 flex flex-col grow">
                <div class="flex items-start justify-between mb-3">
                  <h3 class="text-xl font-bold text-slate-100">
                    {{ project.name }}
                  </h3>
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    class="transition-colors duration-200"
                    :style="{ color: project.accentColor }"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                <p class="text-slate-300 mb-4 text-sm">
                  {{ project.description }}
                </p>

                <ul v-if="project.highlights" class="space-y-1.5 mb-5 grow">
                  <li
                    v-for="(highlight, i) in project.highlights"
                    :key="i"
                    class="text-slate-400 text-sm flex items-start"
                  >
                    <span
                      class="mr-2 mt-0.5"
                      :style="{ color: project.accentColor }"
                      >&#9670;</span
                    >
                    <span>{{ highlight }}</span>
                  </li>
                </ul>

                <div class="flex flex-wrap gap-2 mt-auto">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-2.5 py-1 rounded-full text-xs font-medium border"
                    :style="{
                      color: project.accentColor,
                      borderColor: project.accentColor + '40',
                      backgroundColor: project.accentColor + '10',
                    }"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-on-scroll.is-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
