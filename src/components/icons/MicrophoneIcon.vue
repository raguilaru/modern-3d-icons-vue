<template>
  <BaseIcon
    src="vintage-microphone-on-stand.png"
    :size="size"
    alt="Microphone Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
