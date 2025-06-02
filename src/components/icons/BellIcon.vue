<template>
  <BaseIcon
    src="minimalist-bell-icon-on-white.png"
    :size="size"
    alt="Bell Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
