<template>
  <BaseIcon
    src="neoclassical-beige-building-rendering.png"
    :size="size"
    alt="Building Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
