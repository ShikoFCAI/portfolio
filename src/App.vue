<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";
import ScrollProgress from "./components/ScrollProgress.vue";
import FloatingNav from "./components/FloatingNav.vue";
</script>

<template>
  <div class="min-h-screen">
    <ScrollProgress />
    <FloatingNav />
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>
