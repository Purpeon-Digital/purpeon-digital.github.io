<script setup lang="ts">
import { useI18n, type Locale } from '@/composables/useI18n';

// Accept locale prop from SSR - this is the source of truth for display
const props = defineProps<{
  locale: Locale;
}>();

const { setLocale } = useI18n();

function toggleLanguage() {
  const newLocale: Locale = props.locale === 'en' ? 'no' : 'en';
  setLocale(newLocale);
}
</script>

<template>
  <div class="language-picker">
    <button class="language-toggle" @click="toggleLanguage"
      :aria-label="`Switch to ${props.locale === 'en' ? 'Norwegian' : 'English'}`"
      :aria-pressed="props.locale === 'no'">
      <span class="language-highlight" :class="{ 'is-no': props.locale === 'no' }" aria-hidden="true"></span>
      <span class="language-option" :class="{ active: props.locale === 'no' }">
        🇳🇴
      </span>
      <span class="language-option" :class="{ active: props.locale === 'en' }">
        🇬🇧
      </span>
    </button>
  </div>
</template>

<style scoped>
.language-picker {
  position: relative;
}

.language-toggle {
  background: transparent;
  border: none;
  color: white;
  height: 38px;
  padding: 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s ease;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  position: relative;
  isolation: isolate;
}

.language-toggle:hover {
  background: rgba(255, 255, 255, 0.05);
}

.language-highlight {
  position: absolute;
  inset: 2px;
  width: calc(50% - 2px);
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  transition: transform 0.2s ease;
  transform: translateX(0);
  z-index: 0;
}

.language-highlight.is-no {
  transform: translateX(100%);
}

.language-option {
  font-size: 1.05rem;
  padding: 6px 8px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  filter: grayscale(0.95);
  transition: opacity 0.2s ease, filter 0.2s ease;
  position: relative;
  z-index: 1;
}

.language-option.active {
  opacity: 1;
  filter: grayscale(0);
}

@media (max-width: 768px) {
  .language-toggle {
    height: 34px;
    border-radius: 10px;
  }

  .language-option {
    font-size: 0.95rem;
    padding: 5px 6px;
    border-radius: 7px;
  }
}
</style>
