<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 bg-slate-950 border-t border-slate-800">
    <div class="container mx-auto px-6">
      <div class="text-center">
        <p class="text-slate-400">
          © {{ currentYear }} Sherif Aboraya. Built with Vue 3, TypeScript & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>
