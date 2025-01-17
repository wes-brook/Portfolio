<script setup>
import Card from 'primevue/card';
</script>

<template>
    <section class="about">
    <Card class="about-card">
      <template #title>About Me</template>
      <template #content>
        <p>
          I specialize in full-stack development and have a passion for creating efficient, scalable, and visually appealing solutions. With a strong focus on user experience and modern technologies, I strive to deliver impactful results.
        </p>
      </template>
    </Card>
  </section>
</template>

<style scoped>
.about {
  padding: 4rem 3rem;
  /*background: #ffffff;*/
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
</style>