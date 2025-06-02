<template>
  <BaseIcon
    src="vibrant-light-bulb-icon.png"
    :size="size"
    alt="LightBulb Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
