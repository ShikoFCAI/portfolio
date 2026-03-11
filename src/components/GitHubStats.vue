<script setup lang="ts">
import { useScrollAnimation } from "../composables/useScrollAnimation";

useScrollAnimation();

const githubUsername = "ShikoFCAI";
</script>

<template>
  <section id="github" class="py-20 bg-slate-900 border-t border-slate-800/50">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
        >
          GitHub <span class="text-gradient">Activity</span>
        </h2>
        <p
          class="text-slate-400 text-center mb-14 animate-on-scroll opacity-0 transition-all duration-700 delay-100 transform translate-y-10"
        >
          Open source contributions and coding activity
        </p>

        <!-- GitHub Stats Cards -->
        <div
          class="grid md:grid-cols-2 gap-6 mb-8 animate-on-scroll opacity-0 transition-all duration-700 delay-200 transform translate-y-10"
        >
          <!-- Streak Stats -->
          <div
            class="bg-slate-800/50 rounded-xl border border-slate-700 p-1 hover:border-pink-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 max-w-2xl mx-auto"
          >
            <img
              :src="`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=transparent&hide_border=true&ring=06b6d4&fire=ec4899&currStreakLabel=8b5cf6&sideLabels=94a3b8&dates=64748b&currStreakNum=e2e8f0&sideNums=e2e8f0`"
              alt="GitHub Streak"
              class="w-full h-full rounded-lg object-fill"
              loading="lazy"
            />
          </div>

          <!-- Top Languages -->
          <div
            class="bg-slate-800/50 rounded-xl border border-slate-700 p-1 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <img
              :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=8b5cf6&text_color=94a3b8`"
              alt="Top Languages"
              class="w-full h-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
        <!-- Contribution Graph -->
        <div
          class="animate-on-scroll opacity-0 transition-all duration-700 delay-400 transform translate-y-10"
        >
          <div
            class="bg-slate-800/50 rounded-xl border border-slate-700 p-1 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <img
              :src="`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=00000000&color=94a3b8&line=06b6d4&point=8b5cf6&area=true&area_color=06b6d4&hide_border=true`"
              alt="Contribution Graph"
              class="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        <!-- View Profile Link -->
        <div
          class="text-center mt-10 animate-on-scroll opacity-0 transition-all duration-700 delay-500 transform translate-y-10"
        >
          <a
            :href="`https://github.com/${githubUsername}`"
            target="_blank"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            View Full GitHub Profile
          </a>
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
