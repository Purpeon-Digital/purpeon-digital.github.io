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
    <span class="language-option" :class="{ active: props.locale === 'no' }">
        <iconify-icon icon="circle-flags:lang-no" />
      </span>
      <span class="language-option" :class="{ active: props.locale === 'en' }">
        <iconify-icon icon="circle-flags:lang-en" />
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
  padding: 2px;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.25rem;
  align-items: center;
  position: relative;
  isolation: isolate;
}

.language-option {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  filter: grayscale(0.95);
  position: relative;
  z-index: 1;
  line-height: 0;
}

.language-option.active {
  opacity: 1;
  filter: grayscale(0);
}
</style>
