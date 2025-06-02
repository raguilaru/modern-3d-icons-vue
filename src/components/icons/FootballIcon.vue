<template>
  <BaseIcon
    src="american-football-close-up.png"
    :size="size"
    alt="Football Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
