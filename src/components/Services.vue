<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useI18n, type Locale } from '@/composables/useI18n';
import Features from './Features.vue';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const props = defineProps<{
  locale: Locale;
}>();

const { t, locale } = useI18n(props.locale);

const services = computed(() => {
  // Track locale for reactivity
  const _ = locale.value;
  return t('services.items');
});

const imageRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  if (!imageRef.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(imageRef.value);
});
</script>

<template>
  <section id="services" class="services-section">
    <div class="services-content">
      <div ref="imageRef" class="services-image" :class="{ 'is-visible': isVisible }">
        <img src="/laptop.webp" height="750px" width="500px" alt="Photo by https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText Markus Spiske https://unsplash.com/photos/a-close-up-of-a-laptop-on-a-table-jbRFQ1wZTYY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText Unsplash" />
      </div>
      <div class="services-text">
        <h2>{{ t('services.title') }}</h2>
        <p>{{ t('services.intro') }}</p>
        <p>{{ t('services.description') }}</p>
        <Features :features="services" :forceTwoLines="true" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Services Section */
.services-section {
    background:
        repeating-linear-gradient(
            30deg,
            transparent 0px,
            transparent 80px,
            var(--services-streak-1) 80px,
            var(--services-streak-2) 84px,
            var(--services-streak-3) 88px,
            transparent 88px,
            transparent 200px
        ),
        repeating-linear-gradient(
            30deg,
            transparent 0px,
            transparent 140px,
            var(--services-streak-4) 140px,
            var(--services-streak-5) 143px,
            transparent 143px,
            transparent 280px
        ),
        linear-gradient(
            135deg,
            var(--services-grad-1) 0%,
            var(--services-grad-2) 35%,
            var(--services-grad-3) 60%,
            var(--services-grad-4) 100%
        );
    color: var(--services-text-color);
    padding: 6rem 2rem;
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: none;
    min-height: 100vh;
    height: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    transition: background 0.5s ease, color 0.3s ease;
}

.services-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1400px;
    width: 100%;
    align-items: center;
}

.services-image {
    position: relative;
    display: flex;
    justify-content: flex-start;
    order: 1;
}

.services-image img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 12px;
    filter: brightness(0.95) saturate(1.1);
    object-fit: cover;
}

.services-badge {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    background: var(--services-badge-bg);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 0.9rem;
    border: 1px solid var(--services-badge-border);
    color: var(--services-text-color);
    font-weight: 600;
    transition: all 0.3s ease;
}

.services-text {
    text-align: left;
    order: 2;
}

.services-text h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1.5rem;
    color: var(--services-heading-color);
    line-height: 1.1;
}

.services-text h2::after {
    background: linear-gradient(90deg, var(--accent-secondary) 0%, var(--accent-light) 100%);
}

.services-text p {
    font-size: clamp(1rem, 2vw, 1.1rem);
    line-height: 1.7;
    margin-bottom: 1.5rem;
    color: var(--services-text-color);
    opacity: 0.9;
}

.services-image {
  opacity: 0;
  transform: translateX(-30px) scale(0.98);
  transition: opacity 1.2s ease-out, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.services-image.is-visible {
  opacity: 1;
  transform: translateX(0) scale(1);
}

/* Tablet and below */
@media (max-width: 768px) {
  .services-section {
    height: auto;
    min-height: auto;
    scroll-snap-align: none;
    scroll-snap-stop: normal;
  }

  .services-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .services-image {
    display: none;
  }

  .services-text {
    text-align: center;
  }
}
</style>
