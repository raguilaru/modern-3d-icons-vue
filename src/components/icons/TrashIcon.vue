<template>
  <BaseIcon
    src="minimalist-trash-can-icon.png"
    :size="size"
    alt="Trash Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
