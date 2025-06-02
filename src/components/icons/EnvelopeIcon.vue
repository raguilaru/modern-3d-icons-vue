<template>
  <BaseIcon
    src="envelope-with-red-badge.png"
    :size="size"
    alt="Envelope Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
