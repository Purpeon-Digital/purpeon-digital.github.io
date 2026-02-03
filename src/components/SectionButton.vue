<script setup lang="ts">
interface Props {
  variant: 'primary' | 'secondary';
  href?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <a v-if="href" :href="href" :class="['btn', `btn-${variant}`]">
    <slot />
  </a>
  <button v-else :class="['btn', `btn-${variant}`]">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #7C3AED;
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #6B2DD6;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

/* Light theme overrides */
:global([data-theme="light"]) .btn-primary {
  background: #6B46C1;
  color: white;
}

:global([data-theme="light"]) .btn-primary:hover {
  background: #553C9A;
}

:global([data-theme="light"]) .btn-secondary {
  background: rgba(0, 0, 0, 0.08);
  color: #2d2d2d;
  border: 2px solid rgba(107, 70, 193, 0.3);
}

:global([data-theme="light"]) .btn-secondary:hover {
  background: rgba(107, 70, 193, 0.15);
  border-color: rgba(107, 70, 193, 0.5);
}

/* Mobile: full width */
@media (max-width: 480px) {
  .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
