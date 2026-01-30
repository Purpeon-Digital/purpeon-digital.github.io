<script setup lang="ts">
import { ref } from 'vue';
import { useI18n, type Locale } from '@/composables/useI18n';
import ContactMethods from './ContactMethods.vue';

const props = defineProps<{
  locale: Locale;
}>();

const { t } = useI18n(props.locale);
const currentYear = new Date().getFullYear();
const showMap = ref(false);

const toggleMap = () => {
  showMap.value = !showMap.value;
};
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-wrapper">
      <div class="contact-content">
        <div class="contact-image">
          <div v-if="!showMap" class="image-container">
            <img src="/power.jpg" height="720px" width="480px"
              alt="Photo by https://unsplash.com/@hiepng?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText Hiep Nguyen on https://unsplash.com/photos/silhouette-photography-of-tower-16xJbmtpO6o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText Unsplash" />
          </div>
          <div v-if="showMap" class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.3563548229395!2d5.85200827803533!3d61.45042227571023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x461633c49568407f%3A0x2ac98f0c3e1aac9d!2sPEAK%20Sunnfjord!5e1!3m2!1sen!2sno!4v1769105218226!5m2!1sen!2sno"
              width="100%" height="450" style="border:0; border-radius: 16px;" allowfullscreen="true" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" class="map-iframe">
            </iframe>
          </div>
        </div>
        <div class="contact-text">
          <h2>{{ t('contact.title') }}</h2>
          <p class="lead">{{ t('contact.lead') }}</p>
          <p>{{ t('contact.description') }}</p>

          <ContactMethods :locale="locale" @show-map="toggleMap" />
        </div>
      </div>

      <footer class="contact-footer">
        <div class="footer-divider"></div>
        <p class="footer-text">&copy; {{ currentYear }} Purpeon Digital.</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.contact-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  width: 100%;
  align-items: center;
}

.contact-image {
  position: relative;
  display: flex;
  justify-content: flex-start;
}

/* Contact Section */
.contact-section {
  background:
    repeating-linear-gradient(150deg,
      transparent 0px,
      transparent 90px,
      var(--contact-streak-1) 90px,
      var(--contact-streak-2) 94px,
      var(--contact-streak-3) 98px,
      transparent 98px,
      transparent 220px),
    repeating-linear-gradient(150deg,
      transparent 0px,
      transparent 160px,
      var(--contact-streak-4) 160px,
      var(--contact-streak-5) 163px,
      transparent 163px,
      transparent 300px),
    linear-gradient(-30deg,
      var(--contact-grad-1) 0%,
      var(--contact-grad-2) 40%,
      var(--contact-grad-3) 70%,
      var(--contact-grad-4) 100%);
  color: var(--contact-text-color);
  padding: 6rem 2rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - 56px);
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

.image-container {
  width: 100%;
  max-width: 600px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  animation: fadeIn 0.3s ease;
}

.map-container {
  width: 100%;
  max-width: 600px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.map-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15);
}

.map-iframe {
  display: block;
  cursor: pointer;
  transition: filter 0.3s ease;
}

.map-container:hover .map-iframe {
  filter: brightness(1.05);
}

.contact-image img {
  width: 100%;
  max-width: 480px;
  height: auto;
  border-radius: 16px;
  filter: brightness(0.9) contrast(1.1) hue-rotate(-10deg);
  object-fit: cover;
}

[data-theme="dark"] .contact-image img {
  filter: brightness(0.9) contrast(1.1) hue-rotate(-10deg);
}

[data-theme="light"] .contact-image img {
  filter: brightness(1) contrast(1.15) hue-rotate(-10deg);
}

.contact-badge {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: var(--contact-badge-bg);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  border: 1px solid var(--contact-badge-border);
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-text {
  text-align: left;
}

.contact-text h2 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1.5rem;
  color: var(--contact-heading-color);
  line-height: 1.1;
}

.contact-text h2::after {
  background: linear-gradient(90deg, #ec4899 0%, #f472b6 100%);
}

.contact-text p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: var(--contact-text-color);
  opacity: 0.9;
}

.contact-text p.lead {
  font-size: clamp(1.1rem, 2.2vw, 1.25rem);
  opacity: 1;
  font-weight: 500;
}

.contact-section .btn-secondary {
  border-color: rgba(244, 114, 182, 0.4);
}

.contact-section .btn-secondary:hover {
  background: rgba(244, 114, 182, 0.15);
  border-color: rgba(244, 114, 182, 0.6);
}

.contact-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
  margin-top: auto;
}

.footer-divider {
  width: 100%;
  max-width: 1200px;
  height: 1px;
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.2) 80%,
      transparent 100%);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.footer-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.5px;
  font-weight: 300;
  text-transform: uppercase;
  transition: color 0.3s ease;
  margin-bottom: 0;
}

.footer-text:hover {
  color: rgba(255, 255, 255, 0.9);
}

[data-theme="light"] .footer-text {
  color: rgba(45, 45, 45, 0.6);
}

[data-theme="light"] .footer-text:hover {
  color: rgba(45, 45, 45, 0.8);
}

[data-theme="light"] .footer-divider {
  background: linear-gradient(90deg,
      transparent 0%,
      rgba(45, 45, 45, 0.15) 20%,
      rgba(45, 45, 45, 0.2) 50%,
      rgba(45, 45, 45, 0.15) 80%,
      transparent 100%);
}

@media (max-width: 768px) {
  .contact-section {
    height: auto;
    min-height: auto;
    scroll-snap-align: none;
    scroll-snap-stop: normal;
    padding: 3rem 1.5rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-image {
    display: none;
  }

}
</style>