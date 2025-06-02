<template>
  <BaseIcon
    src="minimalist-gray-smartphone-design.png"
    :size="size"
    alt="Smartphone Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
