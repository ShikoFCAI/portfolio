<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);
const activeSection = ref("");

const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function handleScroll() {
  isVisible.value = window.scrollY > window.innerHeight * 0.5;

  for (const section of [...sections].reverse()) {
    const el = document.getElementById(section.id);
    if (el && el.getBoundingClientRect().top <= 200) {
      activeSection.value = section.id;
      break;
    }
  }
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    class="fixed top-3 left-1/2 -translate-x-1/2 z-40 transition-all duration-500"
    :class="
      isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-8 pointer-events-none'
    "
  >
    <div
      class="flex gap-1 px-2 py-2 rounded-full border border-slate-700/50 shadow-2xl shadow-black/20"
      style="background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(16px)"
    >
      <button
        v-for="section in sections"
        :key="section.id"
        @click="scrollTo(section.id)"
        class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
        :class="
          activeSection === section.id
            ? 'text-white shadow-lg'
            : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
        "
        :style="
          activeSection === section.id
            ? 'background: linear-gradient(to right, #06b6d4, #8b5cf6)'
            : ''
        "
      >
        {{ section.label }}
      </button>
    </div>
  </nav>
</template>
