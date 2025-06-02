<template>
  <BaseIcon
    src="yellow-lightning-bolt-icon.png"
    :size="size"
    alt="Lightning Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
