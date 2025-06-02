<template>
  <BaseIcon
    src="stylized-3d-flame-icon.png"
    :size="size"
    alt="Flame Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
