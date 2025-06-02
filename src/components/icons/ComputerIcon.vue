<template>
  <BaseIcon
    src="sleek-modern-desktop-computer-design.png"
    :size="size"
    alt="Computer Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
