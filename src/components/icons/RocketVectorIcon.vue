<template>
  <BaseIcon
    src="cartoon-rocket-launching-to-space.png"
    :size="size"
    alt="RocketVector Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
