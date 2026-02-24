<script setup lang="ts">
import { useScrollAnimation } from "../composables/useScrollAnimation";

useScrollAnimation();

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  link: string;
}

const experiences: Experience[] = [
  {
    company: "NexGen Solutions",
    role: "Mid-level Frontend Developer",
    period: "July 2024 - Present",
    location: "Remote - Kuwait",
    description: [
      "Developed enterprise-grade government web applications for the Kuwait Ministry of Finance using Nuxt 4, Vue 3, and TypeScript, serving 1,000+ internal users",
      "Built scalable, reusable UI components and design system patterns",
      "Optimized frontend performance and architecture, enhancing page load times",
      "Collaborated with cross-functional teams in Agile workflows using Git and Azure DevOps",
    ],
    technologies: ["Vue 3", "Nuxt 4", "TypeScript", "Tailwind CSS"],
    link: "https://www.nexgen-kw.com/",
  },
  {
    company: "Luftborn",
    role: "Frontend Developer",
    period: "March 2024 - July 2024",
    location: "Hybrid - Egypt/Denmark",
    description: [
      "Developed core modules for internal HR management system",
      "Built responsive, reusable UI components using enterprise patterns",
      "Collaborated with frontend and full-stack teams in Agile sprints",
    ],
    technologies: ["Angular 18/19", "TypeScript", "Tailwind CSS"],
    link: "https://www.luftborn.com",
  },
  {
    company: "Augustus Media",
    role: "Frontend Developer",
    period: "October 2022 - March 2024",
    location: "On-site - Egypt/Dubai",
    description: [
      "Led full revamp of Smashi TV website using Vue 3 and Nuxt 3",
      "Launched discount campaign that increased sales by 240%",
      "Developed Smart TV application for Tizen platform",
      "Built reusable, responsive UI components",
    ],
    technologies: ["Vue 3", "Nuxt 3", "TypeScript", "Tailwind CSS"],
    link: "https://augustusmedia.com/",
  },
];
</script>

<template>
  <section id="experience" class="py-20 bg-slate-800/50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
        >
          Work <span class="text-gradient">Experience</span>
        </h2>
        <p
          class="text-slate-400 text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-100 transform translate-y-10"
        >
          Building exceptional web experiences across the globe
        </p>

        <div class="space-y-8">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
            :style="{ transitionDelay: `${(index + 2) * 100}ms` }"
          >
            <div
              class="bg-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div
                class="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
              >
                <div>
                  <h3 class="text-2xl font-bold text-cyan-400 mb-2">
                    {{ exp.role }}
                  </h3>
                  <div class="flex gap-2 items-center">
                    <p class="text-xl text-slate-300">{{ exp.company }}</p>
                    <a
                      v-if="exp.link"
                      :href="exp.link"
                      target="_blank"
                      class="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <svg
                        class="w-6 h-6"
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
                </div>
                <div class="text-slate-400 text-sm md:text-right">
                  <p>{{ exp.period }}</p>
                  <p>{{ exp.location }}</p>
                </div>
              </div>

              <ul class="space-y-2 mb-6">
                <li
                  v-for="(desc, i) in exp.description"
                  :key="i"
                  class="text-slate-300 flex items-start"
                >
                  <span class="text-cyan-400 mr-2">▹</span>
                  <span>{{ desc }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in exp.technologies"
                  :key="tech"
                  class="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                >
                  {{ tech }}
                </span>
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
