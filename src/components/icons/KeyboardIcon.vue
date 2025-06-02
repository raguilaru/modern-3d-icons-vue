<template>
  <BaseIcon
    src="keyboard-in-soft-focus-perspective.png"
    :size="size"
    alt="Keyboard Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
