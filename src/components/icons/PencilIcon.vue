<template>
  <BaseIcon
    src="pencil-on-textured-paper.png"
    :size="size"
    alt="Pencil Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
