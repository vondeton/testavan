<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    size?: number
  }>(),
  { size: 40 },
)

const sizeClass = computed(() => {
  const sizes: Record<number, string> = {
    32: 'size-8',
    40: 'size-10',
    57: 'size-[57px]',
  }
  return sizes[props.size] ?? 'size-10'
})
</script>

<template>
  <img
    class="block rounded-full object-cover"
    :class="sizeClass"
    :src="src"
    :alt="alt"
    :width="size"
    :height="size"
  />
</template>
