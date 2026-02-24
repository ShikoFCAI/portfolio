<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'

useScrollAnimation()

interface Project {
  name: string
  description: string
  technologies: string[]
  link?: string
  highlights?: string[]
}

const projects: Project[] = [
  {
    name: 'Trasul Plus',
    description: 'Gmail-like internal messaging platform used by 1,000+ Ministry of Finance employees',
    technologies: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Inbox management & threaded conversations',
      'Advanced filters & file attachments',
      'User delegations & entrustment workflows'
    ]
  },
  {
    name: 'Smashi TV',
    description: 'Regional digital streaming and media platform for MENA audiences',
    technologies: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind CSS'],
    link: 'https://smashi.tv',
    highlights: [
      'Complete website refactor',
      'Custom video player built from scratch',
      'Mobile-first responsive design',
      'Launched campaign that increased sales by 240%'
    ]
  },
  {
    name: 'Heart Of Rak',
    description: 'Government-backed digital content platform by Ras Al Khaimah Government',
    technologies: ['Vue 3', 'Nuxt 3', 'TypeScript'],
    link: 'https://heartofrak.com',
    highlights: [
      'Showcases tourism, business, and community',
      'Multi-language support',
      'High-performance content delivery'
    ]
  },
  {
    name: 'E-Tendering Platform',
    description: 'Government e-Tendering platform supporting procurement workflows',
    technologies: ['Vue 3', 'Nuxt 4', 'TypeScript'],
    highlights: [
      'Tender creation & bid submission',
      'Evaluation committees workflow',
      'Secure document management'
    ]
  },
  {
    name: 'Smashi TV App',
    description: 'Dedicated Smart TV application optimized for Tizen and webOS',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    highlights: [
      'Optimized for TV platforms',
      'Custom remote control navigation',
      'Collaborated with TV manufacturers'
    ]
  },
  {
    name: 'Luftborn Internal HR',
    description: 'Internal HR management system with comprehensive features',
    technologies: ['Angular 18/19', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'PTO tracking & time logging',
      'Employee lifecycle management',
      'Role-based access control'
    ]
  }
]
</script>

<template>
  <section id="projects" class="py-20 bg-slate-900">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
          Featured <span class="text-gradient">Projects</span>
        </h2>
        <p class="text-slate-400 text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-100 transform translate-y-10">
          Delivering impactful solutions for government and enterprise clients
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
            :style="{ transitionDelay: `${(index + 2) * 100}ms` }"
          >
            <div class="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 h-full flex flex-col">
              <div class="flex items-start justify-between mb-4">
                <h3 class="text-2xl font-bold text-slate-100">{{ project.name }}</h3>
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  class="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>

              <p class="text-slate-300 mb-4">{{ project.description }}</p>

              <ul v-if="project.highlights" class="space-y-2 mb-6 flex-grow">
                <li
                  v-for="(highlight, i) in project.highlights"
                  :key="i"
                  class="text-slate-400 text-sm flex items-start"
                >
                  <span class="text-cyan-400 mr-2">•</span>
                  <span>{{ highlight }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2 mt-auto">
                <span
                  v-for="tech in project.technologies"
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
