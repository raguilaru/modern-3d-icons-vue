<template>
  <BaseIcon
    src="shield-and-padlock-icon-design.png"
    :size="size"
    alt="Shield Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
