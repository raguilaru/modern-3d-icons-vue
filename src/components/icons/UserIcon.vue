<template>
  <BaseIcon
    src="minimalist-3d-user-icon.png"
    :size="size"
    alt="User Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
