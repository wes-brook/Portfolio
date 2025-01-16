<script setup>
import Button from 'primevue/button';
</script>

<template>
    <section class="hero">
    <div class="hero-content">
      <p class="intro-text">Hi there, I'm</p>
      <h1 class="gradient-text">Wesly Barayuga</h1>
      <p class="description">
        A passionate software engineer based in Lathrop, California, crafting clean and user-friendly experiences for the web and beyond.
      </p>
      <Button label="View My Work" class="cta-button" />
    </div>
    <img src="../assets/memoji.png" class="memoji" alt="My Apple Memoji" />
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 3rem;
  min-height: 80vh;
  background: #ffffff;
}

.hero-content {
  max-width: 47%;
}

.intro-text {
  font-size: 2.25rem;
  color: #6b7280;
}

.gradient-text {
  font-size: 5rem;
  font-weight: bold;
  line-height: 1.2;
  background: linear-gradient(to right, #7b2ff7, #00c6fb, #ff6ec4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1rem 0;
}

.description {
  font-size: 1.5rem;
  color: #374151;
  margin-bottom: 1.5rem;
}

.memoji {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin: 1rem;
  object-position: 50% 45%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.cta-button {
  background: linear-gradient(to right, #7b2ff7, #00c6fb);
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background: linear-gradient(to right, #00c6fb, #7b2ff7); 
  border: none;
}

</style>