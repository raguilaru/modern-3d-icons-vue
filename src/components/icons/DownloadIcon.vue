<template>
  <BaseIcon
    src="download-icon-in-minimalist-style.png"
    :size="size"
    alt="Download Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
