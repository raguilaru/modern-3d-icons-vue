<template>
  <BaseIcon
    src="minimalist-3d-location-pin-icon.png"
    :size="size"
    alt="LocationPin Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
