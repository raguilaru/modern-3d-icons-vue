<template>
  <BaseIcon
    src="digital-camera-icon-in-matte-gray.png"
    :size="size"
    alt="Camera Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
