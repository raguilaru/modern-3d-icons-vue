<template>
  <BaseIcon
    src="charming-little-house-on-green-lawn.png"
    :size="size"
    alt="House Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
