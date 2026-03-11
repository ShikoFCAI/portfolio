<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="py-8 bg-slate-950 relative">
    <div
      class="absolute top-0 left-0 w-full h-px"
      style="
        background: linear-gradient(
          to right,
          transparent,
          #06b6d4,
          #8b5cf6,
          #ec4899,
          transparent
        );
      "
    ></div>
    <div class="container mx-auto px-6">
      <div class="text-center">
        <p class="text-slate-400">
          © {{ currentYear }} Sherif Aboraya. Built with
          <span class="text-gradient-rainbow font-medium"
            >Vue 3, TypeScript & Tailwind CSS</span
          >
        </p>
      </div>
    </div>
  </footer>
</template>
