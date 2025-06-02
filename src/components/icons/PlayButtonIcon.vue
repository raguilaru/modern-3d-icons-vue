<template>
  <BaseIcon
    src="3d-gray-play-button-icon.png"
    :size="size"
    alt="PlayButton Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
