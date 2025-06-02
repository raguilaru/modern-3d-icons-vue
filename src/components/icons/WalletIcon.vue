<template>
  <BaseIcon
    src="beige-wallet-with-blue-banknote.png"
    :size="size"
    alt="Wallet Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
