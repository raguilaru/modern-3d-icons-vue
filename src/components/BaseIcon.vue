<template>
  <img
    :src="getImageSrc(props.size, props.src)"
    :width="props.size"
    :height="props.size"
    :alt="props.alt"
  />
</template>

<script setup lang="ts">

interface Props {
  size?: number
  alt?: string
  src: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 32,
  alt: ''
})

const getImageSrc = (size: number, src: string) => {  
  return new URL(`/src/assets/png/${size <= 64 ? '64' : size <= 128 ? '128' : '256'}/${src}`, import.meta.url).href
}
</script> 