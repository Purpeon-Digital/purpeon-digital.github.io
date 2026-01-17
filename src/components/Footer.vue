<template>
  <footer>
    <p>&copy; {{ currentYear }} Purpeon Digital.</p>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '@/composables/useI18n';

const { t } = useI18n();
const currentYear = new Date().getFullYear();
</script>
