<template>
  <svg
    :width="props.size"
    :height="props.size"
    :viewBox="props.viewBox"
    :fill="props.color"
    xmlns="http://www.w3.org/2000/svg"
    v-html="svgContent"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  size?: number | string
  color?: string
  viewBox?: string
  src: string
}

const props = defineProps<Props>()
const svgContent = ref('')

onMounted(async () => {
  try {
    const response = await fetch(props.src)
    const svgText = await response.text()
    // Extract the content between <svg> tags
    const content = svgText.replace(/<svg[^>]*>|<\/svg>/g, '')
    svgContent.value = content
  } catch (error) {
    console.error('Error loading SVG:', error)
  }
})
</script> 