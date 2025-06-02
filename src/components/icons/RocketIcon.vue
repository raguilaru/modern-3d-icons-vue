<template>
  <BaseIcon
    src="cartoon-rocket-launching-to-space.png"
    :size="size"
    alt="Rocket Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
