<template>
  <BaseIcon
    src="timeless-flow-of-golden-sands.png"
    :size="size"
    alt="Hourglass Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
