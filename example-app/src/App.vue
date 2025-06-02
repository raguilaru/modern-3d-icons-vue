<script setup lang="ts">
import { RocketIcon, StarIcon, LightBulbIcon, GlobeIcon, ComputerIcon, HeadphonesIcon } from 'modern-3d-icons-vue'
</script>

<template>
  <div class="app">
    <h1>Modern 3D Icons Showcase</h1>
    <div class="icon-grid">
      <div class="icon-item">
        <RocketIcon :size="64" />
        <span>Rocket</span>
      </div>
      <div class="icon-item">
        <StarIcon />
        <span>Star</span>
      </div>
      <div class="icon-item">
        <LightBulbIcon />
        <span>Light Bulb</span>
      </div>
      <div class="icon-item">
        <GlobeIcon />
        <span>Globe</span>
      </div>
      <div class="icon-item">
        <ComputerIcon />
        <span>Computer</span>
      </div>
      <div class="icon-item">
        <HeadphonesIcon />
        <span>Headphones</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.icon-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon-item span {
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 500;
}
</style>
