<template>
  <BaseIcon
    src="3d-digital-quaver-music-note.png"
    :size="size"
    alt="DigitalQuaver Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
