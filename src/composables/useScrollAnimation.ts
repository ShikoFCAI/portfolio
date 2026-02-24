import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation() {
  const elements = ref<HTMLElement[]>([])

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  onMounted(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    observer.disconnect()
  })

  return {
    elements
  }
}
