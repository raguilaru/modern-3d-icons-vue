<template>
  <BaseIcon
    src="textured-speech-bubble-with-dots.png"
    :size="size"
    alt="SpeechBubble Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
