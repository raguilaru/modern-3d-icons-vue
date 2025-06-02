<template>
  <BaseIcon
    src="3d-speaker-icon-with-sound-waves.png"
    :size="size"
    alt="Speaker Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
