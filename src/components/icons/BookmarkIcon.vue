<template>
  <BaseIcon
    src="minimalist-bookmark-icon-rendering.png"
    :size="size"
    alt="Bookmark Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
