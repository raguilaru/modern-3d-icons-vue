<template>
  <BaseIcon
    src="shaded-pencil-on-white-background.png"
    :size="size"
    alt="ShadedPencil Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
