<template>
  <BaseIcon
    src="ceramic-cup-with-warm-liquid.png"
    :size="size"
    alt="Cup Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
