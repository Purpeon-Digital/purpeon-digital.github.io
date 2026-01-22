<script setup lang="ts">
import { computed } from 'vue';
import { useI18n, type Locale } from '@/composables/useI18n';

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

        <div class="values-grid">
          <div v-for="value in values" :key="value.title" class="value-card">
            <span class="value-icon"><iconify-icon :icon="value.icon" width="24" height="24"></iconify-icon></span>
            <div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="about-image">
        <img src="/foxglove_photo.jpg" height="640px" width="480px"
          alt="Foxglove - Photo by https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText Annie Spratt on https://unsplash.com/photos/a-field-full-of-purple-flowers-on-a-cloudy-day-OuUdVpx1JD8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText Unsplash" />
      </div>
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

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-top: 2rem;
}

.value-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: var(--about-card-bg);
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid var(--about-card-border);
  transition: all 0.3s ease;
  align-items: center;
}

.value-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
  border-color: rgba(129, 140, 248, 0.4);
}

.value-icon {
  color: var(--about-heading-color);
  font-size: 1.6rem;
  flex-shrink: 0;
}

.value-card h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: var(--about-heading-color);
}

.value-card p {
  font-size: 0.85rem;
  opacity: 0.85;
  margin: 0;
  line-height: 1.5;
}

.about-image {
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.about-image img {
  width: 100%;
  max-width: 480px;
  height: auto;
  border-radius: 16px;
  filter: brightness(0.85) contrast(1.15) saturate(1.1);
  mix-blend-mode: lighten;
  object-fit: cover;
}

[data-theme="light"] .about-image img {
  filter: brightness(1) contrast(1.2) saturate(1.1);
  mix-blend-mode: normal;
}

.about-badge {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: var(--about-badge-bg);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  border: 1px solid var(--about-badge-border);
  color: var(--about-text-color);
  font-weight: 600;
  transition: all 0.3s ease;
}

.floating-stat {
  position: absolute;
  background: var(--about-stat-bg);
  backdrop-filter: blur(10px);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.floating-stat:hover {
  transform: scale(1.05);
}

.stat-1 {
  top: 2rem;
  right: 0;
}

.stat-2 {
  top: 50%;
  left: -1rem;
  transform: translateY(-50%);
}

.stat-2:hover {
  transform: translateY(-50%) scale(1.05);
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--about-stat-color);
}

.stat-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--about-stat-color);
  opacity: 0.8;
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

  .about-image {
    display: none;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .floating-stat {
    padding: 0.75rem 1rem;
  }

  .stat-1 {
    top: 1rem;
    right: 1rem;
  }

  .stat-2 {
    left: 1rem;
  }

  .stat-number {
    font-size: 1.25rem;
  }
}
</style>