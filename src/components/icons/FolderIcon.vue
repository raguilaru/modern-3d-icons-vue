<template>
  <BaseIcon
    src="minimalist-folder-with-user-icon.png"
    :size="size"
    alt="Folder Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
