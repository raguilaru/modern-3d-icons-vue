<template>
  <BaseIcon
    src="matte-gray-wrench-on-white-background.png"
    :size="size"
    alt="Wrench Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
