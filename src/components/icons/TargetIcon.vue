<template>
  <BaseIcon
    src="perfect-shot-on-target.png"
    :size="size"
    alt="Target Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
