<template>
  <BaseIcon
    src="raised-thumbs-up-with-blue-cuff.png"
    :size="size"
    alt="ThumbsUp Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
