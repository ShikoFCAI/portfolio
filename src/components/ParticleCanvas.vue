<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);
let animationId = 0;
let mouseX = 0;
let mouseY = 0;
let w = 0;
let h = 0;
let resizeHandler: (() => void) | null = null;
let mouseMoveHandler: ((e: MouseEvent) => void) | null = null;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

const PARTICLE_COUNT = 70;
const CONNECTION_DISTANCE = 130;
const MOUSE_RADIUS = 160;
const colors = ["#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"];
let particles: Particle[] = [];

function initParticles() {
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      color: colors[i % colors.length],
      opacity: Math.random() * 0.5 + 0.2,
    });
  }
}

onMounted(() => {
  const cvs = canvas.value;
  if (!cvs) return;
  const ctx = cvs.getContext("2d")!;

  resizeHandler = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    cvs.width = w;
    cvs.height = h;
  };
  resizeHandler();
  window.addEventListener("resize", resizeHandler);

  mouseMoveHandler = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  window.addEventListener("mousemove", mouseMoveHandler);

  initParticles();

  function animate() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Mouse repulsion
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS && dist > 0) {
        const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * 0.008;
        p.vx -= dx * force;
        p.vy -= dy * force;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.995;
      p.vy *= 0.995;
      p.vx += (Math.random() - 0.5) * 0.015;
      p.vy += (Math.random() - 0.5) * 0.015;

      // Wrap around edges
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const cdx = p.x - p2.x;
        const cdy = p.y - p2.y;
        const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
        if (cdist < CONNECTION_DISTANCE) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = (1 - cdist / CONNECTION_DISTANCE) * 0.12;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    animationId = requestAnimationFrame(animate);
  }

  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  if (resizeHandler) window.removeEventListener("resize", resizeHandler);
  if (mouseMoveHandler)
    window.removeEventListener("mousemove", mouseMoveHandler);
});
</script>

<template>
  <canvas ref="canvas" class="absolute inset-0 z-0" />
</template>
