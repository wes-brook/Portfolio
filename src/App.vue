<script setup>
import NavigationBar from './components/NavigationBar.vue';
import Hero from './views/Hero.vue'
import About from './views/About.vue'
</script>

<template>
  <!-- Navigation Bar -->
  <NavigationBar />
  
  <!-- Hero Section -->
  <Hero />

  <!-- Skills Section / About Section -->
  <h1>Skills & About</h1>
  <About />

  <!-- Featured Projects Section -->
  <h1>Featured Projects</h1>

  <!-- Professional Experience -->
  <h1>Professional Experience</h1>

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

/* Footer */
.footer {
  text-align: center;
  padding: 1.5rem;
  background: #f3f4f6;
  color: #6b7280;
  font-size: 0.875rem;
}
</style>
