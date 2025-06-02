<template>
  <BaseIcon
    src="hookah-with-gold-accents-and-red-hose.png"
    :size="size"
    alt="Hookah Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
