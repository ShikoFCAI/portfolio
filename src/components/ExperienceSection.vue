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
      "Architected enterprise government web applications for the Kuwait Ministry of Finance, serving 1,000+ internal users daily with zero critical frontend incidents",
      "Designed a reusable component library and design-system patterns that reduced UI duplication by 40% across 3 major modules",
      "Cut average page load time by 35% through code-splitting, lazy loading, and render-cycle optimisation",
      "Streamlined cross-functional collaboration in Agile sprints using Git and Azure DevOps across a 12-person team",
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
      "Built 5 core modules for an internal HR system used company-wide, including PTO tracking, time logging, and employee lifecycle management",
      "Established enterprise-level component patterns adopted as team standard, cutting new-feature delivery time by ~30%",
      "Collaborated with full-stack engineers across Egypt and Denmark in 2-week Agile sprints with zero sprint-blocker handoff delays",
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
      "Led the full-scale revamp of Smashi TV — rebuilt the entire frontend from scratch with Vue 3 and Nuxt 3, delivering a 2× faster site in 3 months",
      "Architected and launched a promotional discount campaign that drove a 240% increase in subscription sales",
      "Developed a custom Smart TV application for Samsung Tizen, working directly with manufacturer QA teams for certification",
      "Created a modular, mobile-first component system reused across 4 internal products",
    ],
    technologies: ["Vue 3", "Nuxt 3", "TypeScript", "Tailwind CSS"],
    link: "https://augustusmedia.com/",
  },
];
</script>

<template>
  <section id="experience" class="py-20 bg-slate-800/50">
    <div class="container mx-auto px-6">
      <div class="max-w-5xl mx-auto">
        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
        >
          Work <span class="text-gradient-emerald">Experience</span>
        </h2>
        <p
          class="text-slate-400 text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-100 transform translate-y-10"
        >
          Building exceptional web experiences across the globe
        </p>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/30 to-transparent"
          ></div>

          <div class="space-y-12">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="relative pl-12 md:pl-20 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
              :style="{ transitionDelay: `${(index + 2) * 100}ms` }"
            >
              <!-- Timeline dot -->
              <div
                class="absolute left-2.5 md:left-6 top-2 w-3.5 h-3.5 rounded-full border-2 border-emerald-400 bg-slate-900 z-10"
              >
                <div
                  class="absolute inset-0.5 rounded-full bg-emerald-400 animate-pulse"
                ></div>
              </div>

              <div
                class="bg-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 gradient-border-animated"
              >
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                >
                  <div>
                    <span
                      class="inline-block text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 mb-2"
                    >
                      {{ exp.period }}
                    </span>
                    <h3 class="text-2xl font-bold text-emerald-400 mb-1">
                      {{ exp.role }}
                    </h3>
                    <div class="flex gap-2 items-center">
                      <p class="text-lg text-slate-300">{{ exp.company }}</p>
                      <a
                        v-if="exp.link"
                        :href="exp.link"
                        target="_blank"
                        class="text-emerald-400 hover:text-emerald-300 transition-colors"
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
                  </div>
                  <p class="text-slate-400 text-sm mt-1 md:mt-0">
                    {{ exp.location }}
                  </p>
                </div>

                <ul class="space-y-2 mb-6">
                  <li
                    v-for="(desc, i) in exp.description"
                    :key="i"
                    class="text-slate-300 flex items-start text-sm leading-relaxed"
                  >
                    <span class="text-emerald-400 mr-2 mt-0.5">▹</span>
                    <span>{{ desc }}</span>
                  </li>
                </ul>

                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in exp.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
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
