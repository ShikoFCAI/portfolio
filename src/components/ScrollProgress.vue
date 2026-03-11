<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const progress = ref(0);

function updateProgress() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  progress.value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
}

onMounted(() => {
  window.addEventListener("scroll", updateProgress, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateProgress);
});
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-1 z-50 bg-slate-900/50">
    <div
      class="h-full transition-[width] duration-150 ease-out"
      :style="{
        width: `${progress}%`,
        background: 'linear-gradient(to right, #06b6d4, #8b5cf6, #ec4899)',
      }"
    />
  </div>
</template>
