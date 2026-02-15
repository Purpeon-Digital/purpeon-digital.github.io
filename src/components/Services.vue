<script setup lang="ts">
import { computed } from 'vue';
import { useI18n, type Locale } from '@/composables/useI18n';
import Features from './Features.vue';
import SectionImage from './SectionImage.vue';

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
</script>

<template>
  <section id="services" class="services-section">
    <div class="services-content">
      <SectionImage
        src="/laptop.webp"
        alt="Photo by Markus Spiske on Unsplash"
        width="500"
        height="750"
        maxWidth="500px"
        alignment="start"
        animateOnScroll
        animationDirection="left"
        filterPreset="services"
        class="services-image-wrapper"
      />
      <div class="section-text">
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

.services-content :deep(img) {
  max-height: min(750px, 60vh);
  width: auto;
  object-fit: contain;
}

.services-image-wrapper {
  order: 1;
}

.section-text {
  order: 2;
}

.section-text h2 {
  color: var(--services-heading-color);
}

/* Short viewport height */
@media (max-height: 800px) {
  .services-section {
    padding: 4rem 2rem;
  }

  .services-content {
    gap: 2rem;
  }
}

@media (max-height: 650px) {
  .services-section {
    padding: 3rem 2rem;
  }

  .services-content {
    gap: 1.5rem;
  }
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
}
</style>
