<script setup lang="ts">
import { useScrollAnimation } from "../composables/useScrollAnimation";

useScrollAnimation();

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Frameworks",
    skills: [
      {
        name: "Vue 3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Nuxt 3/4",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      },
      {
        name: "Angular 18/19",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    title: "Languages",
    skills: [
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript (ES6+)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    title: "Styling & UI",
    skills: [
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      { name: "Nuxt UI" },
      {
        name: "Vuetify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
      },
      { name: "ShadCN UI" },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Azure DevOps",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      { name: "REST APIs" },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "SPA" },
      { name: "CSR" },
      { name: "SSR" },
      { name: "SSG" },
      { name: "Component Architecture" },
      { name: "Responsive Design" },
    ],
  },
];
</script>

<template>
  <section id="skills" class="py-20 bg-slate-800/50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
        >
          Technical <span class="text-gradient-amber">Skills</span>
        </h2>
        <p
          class="text-slate-400 text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-100 transform translate-y-10"
        >
          Expertise in modern web technologies and best practices
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(category, index) in skillCategories"
            :key="index"
            class="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
            :style="{ transitionDelay: `${(index + 2) * 100}ms` }"
          >
            <div
              class="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 gradient-border-animated"
            >
              <h3 class="text-xl font-bold text-amber-400 mb-4">
                {{ category.title }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(skill, si) in category.skills"
                  :key="skill.name"
                  class="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-amber-500/20 hover:text-amber-300 transition-all duration-300"
                  :style="{
                    animation: `float 3s ease-in-out ${si * 0.3}s infinite`,
                  }"
                >
                  <img
                    v-if="skill.icon"
                    :src="skill.icon"
                    :alt="skill.name"
                    class="w-4 h-4"
                  />
                  {{ skill.name }}
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
