<template>
  <BaseIcon
    src="golden-star-on-white-canvas.png"
    :size="size"
    alt="Star Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
