<script setup lang="ts">
interface Feature {
  icon: string;
  title: string;
  description: string;
}

const props = defineProps<{
  features: Feature[];
}>();
</script>

<template>
  <div class="hero-features">
    <div v-for="feature in props.features" :key="feature.title" class="feature-card">
      <div class="feature-header">
        <span class="feature-icon-wrapper">
          <iconify-icon :icon="feature.icon" style="width: 28px; height: 28px; font-size: 28px;"></iconify-icon>
        </span>
        <h2>{{ feature.title }}</h2>
      </div>
      <p>{{ feature.description }}</p>
    </div>
  </div>
  
</template>

<style scoped>
.hero-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  width: 100%;
  margin-top: auto;
}

.feature-card {
  background: var(--hero-feature-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--hero-feature-border);
  padding: 1.75rem;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  background: var(--hero-feature-hover-bg);
  transform: translateY(-5px);
  border-color: var(--hero-feature-border);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.feature-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1));
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.feature-icon-wrapper iconify-icon {
  display: block;
  width: 28px;
  height: 28px;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.95);
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon-wrapper {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.15));
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.feature-card:hover .feature-icon-wrapper iconify-icon {
  transform: scale(1.1);
}

.feature-card h2 {
  font-size: 1.2rem;
  margin: 0;
  color: var(--hero-text-color);
  font-weight: 600;
  line-height: 1.3;
}

.feature-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: var(--hero-text-opacity);
  color: var(--hero-text-color);
}

/* Light theme overrides */
[data-theme="light"] .feature-card {
  background: rgba(107, 70, 193, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(107, 70, 193, 0.3);
}

[data-theme="light"] .feature-card:hover {
  background: rgba(107, 70, 193, 0.25);
  border-color: rgba(107, 70, 193, 0.4);
}

[data-theme="light"] .feature-icon-wrapper {
  background: linear-gradient(135deg, rgba(107, 70, 193, 0.25), rgba(107, 70, 193, 0.15));
  border-color: rgba(107, 70, 193, 0.35);
}

[data-theme="light"] .feature-card:hover .feature-icon-wrapper {
  background: linear-gradient(135deg, rgba(107, 70, 193, 0.35), rgba(107, 70, 193, 0.25));
  border-color: rgba(107, 70, 193, 0.5);
}

[data-theme="light"] .feature-icon-wrapper iconify-icon {
  color: #6B46C1;
}

[data-theme="light"] .feature-card h2,
[data-theme="light"] .feature-card p {
  color: #2d2d2d;
}

/* Mobile compact layout for feature cards */
@media (max-width: 600px) {
  .hero-features {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    width: 100%;
  }

  .feature-card {
    padding: 0.85rem;
    border-radius: 12px;
    box-shadow: none;
  }

  .feature-header {
    gap: 0.6rem;
    margin-bottom: 0.35rem;
  }

  .feature-icon-wrapper {
    min-width: 40px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  .feature-icon-wrapper iconify-icon {
    width: 22px;
    height: 22px;
    font-size: 22px;
  }

  .feature-card h2 {
    font-size: 1.05rem;
    line-height: 1.2;
    margin: 0;
  }

  .feature-card p {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-top: 0.15rem;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>