<template>
  <BaseIcon
    src="interlocking-chain-link-design.png"
    :size="size"
    alt="Chain Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
