<template>
  <BaseIcon
    src="matte-red-compact-car-design.png"
    :size="size"
    alt="Car Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
