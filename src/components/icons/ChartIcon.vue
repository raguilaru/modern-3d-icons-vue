<template>
  <BaseIcon
    src="rising-bar-chart-with-red-arrow.png"
    :size="size"
    alt="Chart Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
