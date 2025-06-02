<template>
  <BaseIcon
    src="minimalist-gear-icon-design.png"
    :size="size"
    alt="Gear Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
