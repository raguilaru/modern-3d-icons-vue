<template>
  <BaseIcon
    src="3d-magnifying-glass-icon.png"
    :size="size"
    alt="MagnifyingGlass Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
