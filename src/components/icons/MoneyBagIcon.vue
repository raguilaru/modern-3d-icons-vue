<template>
  <BaseIcon
    src="money-bag-with-dollar-sign.png"
    :size="size"
    alt="MoneyBag Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
