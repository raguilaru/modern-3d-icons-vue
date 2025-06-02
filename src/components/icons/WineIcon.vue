<template>
  <BaseIcon
    src="frosted-glass-wine-elegance.png"
    :size="size"
    alt="Wine Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
