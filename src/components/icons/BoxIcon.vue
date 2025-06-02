<template>
  <BaseIcon
    src="shipping-box-with-handling-symbols.png"
    :size="size"
    alt="Box Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
