<script setup>
import NavigationBar from './components/NavigationBar.vue';
import Hero from './views/Hero.vue'
import Card from 'primevue/card';
</script>

<template>
  <!-- Navigation Bar -->
  <NavigationBar />

  <!-- Hero Section -->
  <Hero />

  <!-- About Section -->
  <section class="about">
    <Card class="about-card">
      <template #title>About Me</template>
      <template #content>
        <p>
          I specialize in full-stack development and have a passion for creating efficient, scalable, and visually appealing solutions. With a strong focus on user experience and modern technologies, I strive to deliver impactful results. Let’s connect and create something amazing together.
        </p>
      </template>
    </Card>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>© 2025 Wesly Barayuga. All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
/* Global Styles */
* {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  background: #ffffff;
  min-height: 80vh;
}

.hero-content {
  max-width: 100%;
}

.intro-text {
  font-size: 1.25rem;
  color: #6b7280;
}

.gradient-text {
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.2;
  background: linear-gradient(to right, #7b2ff7, #00c6fb, #ff6ec4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1rem 0;
}

.description {
  font-size: 1.25rem;
  color: #374151;
  margin-bottom: 1.5rem;
}

.memoji {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 45%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* About Section */
.about {
  padding: 4rem 3rem;
  background: #ffffff;
}

.about-card {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.about-card p {
  color: #374151;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

/* Footer */
.footer {
  text-align: center;
  padding: 1.5rem;
  background: #f3f4f6;
  color: #6b7280;
  font-size: 0.875rem;
}
</style>
