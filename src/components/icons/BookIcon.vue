<template>
  <BaseIcon
    src="embossed-book-with-red-bookmark.png"
    :size="size"
    alt="Book Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
