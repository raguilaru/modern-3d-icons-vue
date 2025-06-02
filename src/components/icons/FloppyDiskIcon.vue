<template>
  <BaseIcon
    src="iconic-3.5-inch-floppy-disk.png"
    :size="size"
    alt="FloppyDisk Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
