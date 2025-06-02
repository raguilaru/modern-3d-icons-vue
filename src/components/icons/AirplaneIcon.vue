<template>
  <BaseIcon
    src="commercial-airplane-icon-in-white.png"
    :size="size"
    alt="Airplane Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
