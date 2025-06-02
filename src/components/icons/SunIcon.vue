<template>
  <BaseIcon
    src="golden-sun-icon-on-white.png"
    :size="size"
    alt="Sun Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
