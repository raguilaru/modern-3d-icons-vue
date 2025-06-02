<template>
  <BaseIcon
    src="minimalist-analog-clock-design.png"
    :size="size"
    alt="Clock Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
