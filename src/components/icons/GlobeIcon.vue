<template>
  <BaseIcon
    src="textured-globe-with-latitude-and-longitude.png"
    :size="size"
    alt="Globe Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
