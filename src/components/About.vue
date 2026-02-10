<script setup lang="ts">
import { computed } from 'vue';
import { useI18n, type Locale } from '@/composables/useI18n';
import Features from './Features.vue';
import SectionImage from './SectionImage.vue';

interface Value {
  icon: string;
  title: string;
  description: string;
}

const props = defineProps<{
  locale: Locale;
}>();

const { t, locale } = useI18n(props.locale);

const values = computed(() => {
  // Track locale for reactivity
  const _ = locale.value;
  return t('about.values') as Value[];
});
</script>

<template>
  <section id="about" class="about-section">
    <div class="about-content">
      <div class="about-text">
        <h2>{{ t('about.title') }}</h2>
        <p class="lead">{{ t('about.lead') }}</p>
        <p>{{ t('about.description1') }}</p>
        <p>{{ t('about.description2') }}</p>
        <p>{{ t('about.description3') }}</p>
        <Features :features="values" :forceTwoLines="true" />
      </div>
      <SectionImage
        src="/foxglove_photo.jpg"
        alt="Foxglove - Photo by Annie Spratt on Unsplash"
        width="480"
        height="640"
        maxWidth="480px"
        borderRadius="16px"
        alignment="end"
        filterPreset="about"
        animateOnScroll
        animationDirection="right"
      />
    </div>
  </section>
</template>

<style scoped>
/* About Section */
.about-section {
  background:
    repeating-linear-gradient(-45deg,
      transparent 0px,
      transparent 100px,
      var(--about-streak-1) 100px,
      var(--about-streak-2) 104px,
      var(--about-streak-3) 108px,
      transparent 108px,
      transparent 250px),
    repeating-linear-gradient(-45deg,
      transparent 0px,
      transparent 180px,
      var(--about-streak-4) 180px,
      var(--about-streak-5) 183px,
      transparent 183px,
      transparent 350px),
    linear-gradient(160deg,
      var(--about-grad-1) 0%,
      var(--about-grad-2) 35%,
      var(--about-grad-3) 65%,
      var(--about-grad-4) 100%);
  color: var(--about-text-color);
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

/* Light theme section background */
:global([data-theme="light"]) .about-section {
  background:
    repeating-linear-gradient(
      -45deg,
      transparent 0px,
      transparent 100px,
      rgba(192, 132, 250, 0.08) 100px,
      rgba(196, 139, 253, 0.1) 104px,
      rgba(199, 146, 255, 0.08) 108px,
      transparent 108px,
      transparent 250px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent 0px,
      transparent 180px,
      rgba(168, 85, 247, 0.06) 180px,
      rgba(168, 85, 247, 0.08) 183px,
      transparent 183px,
      transparent 350px
    ),
    linear-gradient(
      160deg,
      #f5f3ff 0%,
      #ede9fe 35%,
      #faf5ff 65%,
      #f3e5ff 100%
    );
  color: #2d2d2d;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  width: 100%;
  align-items: center;
}

.about-text {
  text-align: left;
}

.about-text h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1.5rem;
  color: var(--about-heading-color);
  line-height: 1.1;
}

.about-text h2::after {
  background: linear-gradient(90deg, #818cf8 0%, #a5b4fc 100%);
}

.about-text p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: var(--about-text-color);
  opacity: 0.9;
}

.about-text p.lead {
  font-size: clamp(1.1rem, 2.2vw, 1.25rem);
  opacity: 1;
  font-weight: 500;
}

/* Light theme text overrides */
:global([data-theme="light"]) .about-text h2 {
  color: #6B46C1;
}

:global([data-theme="light"]) .about-text p {
  color: #2d2d2d;
}

@media (max-width: 768px) {
  .about-section {
    height: auto;
    min-height: auto;
    scroll-snap-align: none;
    scroll-snap-stop: normal;
    padding: 3rem 1.5rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-text {
    text-align: center;
  }
}
</style>
