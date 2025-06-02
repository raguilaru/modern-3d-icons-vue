<template>
  <BaseIcon
    src="red-and-beige-umbrella-design.png"
    :size="size"
    alt="Umbrella Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
