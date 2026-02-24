<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Frameworks',
    skills: ['Vue 3', 'Nuxt 3/4', 'Angular 18/19', 'React']
  },
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
  },
  {
    title: 'Styling & UI',
    skills: ['Tailwind CSS', 'Nuxt UI', 'Vuetify', 'ShadCN UI', 'Bootstrap']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Azure DevOps', 'REST APIs', 'Vite']
  },
  {
    title: 'Concepts',
    skills: ['SPA', 'CSR', 'SSR', 'SSG', 'Component Architecture', 'Responsive Design']
  }
]
</script>

<template>
  <section id="skills" class="py-20 bg-slate-800/50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
          Technical <span class="text-gradient">Skills</span>
        </h2>
        <p class="text-slate-400 text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-100 transform translate-y-10">
          Expertise in modern web technologies and best practices
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(category, index) in skillCategories"
            :key="index"
            class="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
            :style="{ transitionDelay: `${(index + 2) * 100}ms` }"
          >
            <div class="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
              <h3 class="text-xl font-bold text-cyan-400 mb-4">{{ category.title }}</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in category.skills"
                  :key="skill"
                  class="px-3 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300"
                >
                  {{ skill }}
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
