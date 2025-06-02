<template>
  <BaseIcon
    src="ai-chip-with-golden-prongs-and-stars.png"
    :size="size"
    alt="AiChip Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
