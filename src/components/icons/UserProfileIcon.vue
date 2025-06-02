<template>
  <BaseIcon
    src="perfil-de-usuario-3d.png"
    :size="size"
    alt="UserProfile Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
