<template>
  <BaseIcon
    src="sleek-minimalist-desktop-setup.png"
    :size="size"
    alt="Desktop Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
