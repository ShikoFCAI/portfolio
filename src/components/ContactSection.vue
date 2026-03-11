<script setup lang="ts">
import { useScrollAnimation } from "../composables/useScrollAnimation";

useScrollAnimation();

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string;
}

const contacts: ContactInfo[] = [
  {
    icon: "email",
    label: "Email",
    value: "sherifaboraya24@gmail.com",
    link: "mailto:sherifaboraya24@gmail.com",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+20 1092129390",
    link: "tel:+201092129390",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "/in/sherif-aboraya",
    link: "https://www.linkedin.com/in/sherif-aboraya",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "@ShikoFCAI",
    link: "https://github.com/ShikoFCAI",
  },
];

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  });
};
</script>

<template>
  <section id="contact" class="py-20 bg-slate-900">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2
          class="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
        >
          Get In <span class="text-gradient-rose">Touch</span>
        </h2>
        <p
          class="text-slate-400 text-center mb-16 animate-on-scroll opacity-0 transition-all duration-700 delay-100 transform translate-y-10"
        >
          Let's discuss your next project
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <div
            v-for="(contact, index) in contacts"
            :key="index"
            class="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10"
            :style="{ transitionDelay: `${(index + 2) * 100}ms` }"
          >
            <a
              :href="contact.link"
              :target="contact.link.startsWith('http') ? '_blank' : undefined"
              class="block bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-rose-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10 group"
            >
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                  <div
                    class="p-3 bg-rose-500/10 rounded-lg group-hover:bg-rose-500/20 transition-colors duration-300"
                  >
                    <svg
                      v-if="contact.icon === 'email'"
                      class="w-6 h-6 text-rose-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <svg
                      v-if="contact.icon === 'phone'"
                      class="w-6 h-6 text-rose-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <svg
                      v-if="contact.icon === 'linkedin'"
                      class="w-6 h-6 text-rose-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                    <svg
                      v-if="contact.icon === 'github'"
                      class="w-6 h-6 text-rose-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-slate-400">{{ contact.label }}</p>
                    <p
                      class="text-slate-200 font-medium group-hover:text-rose-400 transition-colors duration-300"
                    >
                      {{ contact.value }}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    v-if="
                      contact.label === 'Phone' || contact.label === 'Email'
                    "
                    class="text-rose-400 hover:text-rose-300 transition-colors p-2"
                    @click.prevent="copyToClipboard(contact.value)"
                  >
                    <svg
                      class="w-6 h-6 fill-current text-rose-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                    >
                      <path
                        d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div
          class="animate-on-scroll opacity-0 transition-all duration-700 delay-500 transform translate-y-10"
        >
          <div
            class="relative rounded-2xl p-10 md:p-14 border border-rose-500/30 text-center overflow-hidden"
            style="
              background: linear-gradient(
                135deg,
                rgba(244, 63, 94, 0.1),
                rgba(139, 92, 246, 0.08),
                rgba(236, 72, 153, 0.1)
              );
            "
          >
            <!-- Decorative glow -->
            <div
              class="absolute -top-20 -right-20 w-60 h-60 bg-rose-500/10 rounded-full blur-3xl"
            ></div>
            <div
              class="absolute -bottom-20 -left-20 w-60 h-60 bg-violet-500/10 rounded-full blur-3xl"
            ></div>

            <div class="relative z-10">
              <div
                class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 mb-6"
              >
                <span
                  class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"
                ></span>
                <span class="text-emerald-400 text-sm font-medium"
                  >Available for hire</span
                >
              </div>

              <h3 class="text-2xl md:text-3xl font-bold text-white mb-3">
                Let's Build Something
                <span class="text-gradient-rose">Amazing</span> Together
              </h3>
              <p class="text-slate-300 text-lg mb-2 max-w-xl mx-auto">
                3+ years of frontend expertise, ready for your next challenge
              </p>
              <p class="text-slate-400 mb-8">
                Based in Egypt · Open to remote worldwide · Freelance &
                full-time
              </p>

              <div
                class="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="mailto:sherifaboraya24@gmail.com"
                  class="inline-flex items-center gap-2 px-8 py-4 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300 transform hover:scale-105"
                  style="background: linear-gradient(135deg, #f43f5e, #ec4899)"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Me a Message
                </a>
                <a
                  href="https://www.linkedin.com/in/sherif-aboraya"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-8 py-4 text-slate-200 rounded-xl font-semibold border border-slate-600 hover:border-rose-500/50 hover:bg-rose-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                  Connect on LinkedIn
                </a>
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
