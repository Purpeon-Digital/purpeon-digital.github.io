<script setup lang="ts">
import { useI18n, type Locale } from '@/composables/useI18n';

// Accept locale prop from SSR - this is the source of truth for display
const props = defineProps<{
  locale: Locale;
}>();

const { setLocale } = useI18n();

const languages: { code: Locale; flag: string }[] = [
  { code: 'en', flag: '🇬🇧' },
  { code: 'no', flag: '🇳🇴' }
];

function toggleLanguage() {
  const newLocale: Locale = props.locale === 'en' ? 'no' : 'en';
  setLocale(newLocale);
}
</script>

<template>
  <div class="language-picker">
    <button 
      class="language-toggle" 
      @click="toggleLanguage"
      :aria-label="`Switch to ${props.locale === 'en' ? 'Norwegian' : 'English'}`"
    >
      <span 
        v-for="lang in languages"
        :key="lang.code"
        class="language-option"
        :class="{ active: props.locale === lang.code }"
      >
        {{ lang.flag }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.language-picker {
  position: relative;
}

.language-toggle {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  height: 38px;
  padding: 3px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
}

.language-toggle:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
}

.language-option {
  font-size: 1.15rem;
  padding: 4px 8px;
  border-radius: 7px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  filter: grayscale(0.8);
  transform: scale(0.9);
}

.language-option.active {
  background: rgba(255, 255, 255, 0.25);
  opacity: 1;
  filter: grayscale(0);
  transform: scale(1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .language-toggle {
    height: 34px;
    border-radius: 8px;
  }
  
  .language-option {
    font-size: 1rem;
    padding: 3px 7px;
    border-radius: 6px;
  }
}
</style>
