<script setup lang="ts">
import { computed } from 'vue';
import { useI18n, type Locale } from '@/composables/useI18n';
import Features from '@/components/Features.vue';
import SectionButton from '@/components/SectionButton.vue';
import SectionImage from '@/components/SectionImage.vue';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const props = defineProps<{
  locale: Locale;
}>();

const { t, locale } = useI18n(props.locale);

const features = computed(() => {
  // Track locale for reactivity
  const _ = locale.value;
  return t('hero.features');
});
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1>{{ t('hero.title') }}</h1>
        <p>{{ t('hero.subtitle') }}</p>
        <p class="hero-tagline">{{ t('hero.tagline') }}</p>
        <div class="hero-buttons">
          <SectionButton variant="primary" href="#services">
            {{ t('hero.cta.services') }}
          </SectionButton>
          <SectionButton variant="secondary" href="#contact">
            {{ t('hero.cta.sales') }}
          </SectionButton>
        </div>
      </div>
      <SectionImage
        src="/hero-render.jpg"
        alt="Photo by Solen Feyissa on Unsplash"
        width="400"
        height="600"
        maxWidth="400px"
        alignment="center"
        filterPreset="hero"
      />
    </div>

    <Features :features="features" />
  </section>
</template>

<style scoped>
/* Hero Section */
.hero {
  background:
    repeating-linear-gradient(
      120deg,
      transparent 0px,
      transparent 80px,
      var(--hero-streak-1) 80px,
      var(--hero-streak-2) 84px,
      var(--hero-streak-3) 88px,
      transparent 88px,
      transparent 200px
    ),
    repeating-linear-gradient(
      120deg,
      transparent 0px,
      transparent 140px,
      var(--hero-streak-4) 140px,
      var(--hero-streak-5) 143px,
      transparent 143px,
      transparent 280px
    ),
    linear-gradient(
      135deg,
      var(--hero-grad-1) 0%,
      var(--hero-grad-2) 35%,
      var(--hero-grad-3) 60%,
      var(--hero-grad-4) 100%
    );
  color: var(--hero-text-color);
  padding: 7rem 2rem 2rem;
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

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
  animation: pulse 15s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulse {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(10%, 10%) scale(1.1); }
}

/* Light mode hero */
:global([data-theme="light"]) .hero {
  background:
    repeating-linear-gradient(
      120deg,
      transparent 0px,
      transparent 80px,
      rgba(192, 132, 250, 0.1) 80px,
      rgba(196, 139, 253, 0.12) 84px,
      rgba(199, 146, 255, 0.1) 88px,
      transparent 88px,
      transparent 200px
    ),
    repeating-linear-gradient(
      120deg,
      transparent 0px,
      transparent 140px,
      rgba(168, 85, 247, 0.08) 140px,
      rgba(168, 85, 247, 0.1) 143px,
      transparent 143px,
      transparent 280px
    ),
    linear-gradient(135deg, #f3e5ff 0%, #e8d5ff 100%);
  color: #000000;
}

:global([data-theme="light"]) .hero-text h1,
:global([data-theme="light"]) .hero-text p {
  color: #000000;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  width: 100%;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
}

.hero-text {
  text-align: left;
}

.hero-text h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  font-weight: 700;
  color: var(--hero-text-color);
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-text p {
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: var(--hero-text-opacity);
  color: var(--hero-text-color);
}

.hero-tagline {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 2rem !important;
  opacity: var(--hero-text-opacity);
  color: var(--hero-text-color);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Tablet and small desktop */
@media (max-width: 1200px) {
  .hero-content {
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* Tablet and mobile */
@media (max-width: 768px) {
  .hero {
    height: auto;
    min-height: auto;
    padding: 5rem 1.5rem 3rem;
    scroll-snap-align: none;
    scroll-snap-stop: normal;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-text {
    text-align: center;
  }
}

/* Small mobile */
@media (max-width: 480px) {
  .hero {
    padding: 4.5rem 1rem 2rem;
  }

  .hero-buttons {
    flex-direction: column;
    margin-bottom: 3rem;
  }
}
</style>
