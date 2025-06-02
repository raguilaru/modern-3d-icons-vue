<template>
  <BaseIcon
    src="tabletop-printer-icon-3d-rendering.png"
    :size="size"
    alt="Printer Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
