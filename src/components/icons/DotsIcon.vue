<template>
  <BaseIcon
    src="minimalist-grey-dots-on-white.png"
    :size="size"
    alt="Dots Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
