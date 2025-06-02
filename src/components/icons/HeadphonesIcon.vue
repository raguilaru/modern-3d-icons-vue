<template>
  <BaseIcon
    src="stylish-yellow-and-gray-headphones.png"
    :size="size"
    alt="Headphones Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
