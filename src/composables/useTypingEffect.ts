import { ref, onMounted, onUnmounted } from "vue";

export function useTypingEffect(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
) {
  const displayText = ref("");
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId: ReturnType<typeof setTimeout>;

  function tick() {
    const currentWord = words[currentIndex];

    if (isDeleting) {
      charIndex--;
      displayText.value = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      displayText.value = currentWord.substring(0, charIndex);
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseDuration;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % words.length;
      delay = 400;
    }

    timeoutId = setTimeout(tick, delay);
  }

  onMounted(() => {
    timeoutId = setTimeout(tick, 600);
  });

  onUnmounted(() => {
    clearTimeout(timeoutId);
  });

  return { displayText };
}
