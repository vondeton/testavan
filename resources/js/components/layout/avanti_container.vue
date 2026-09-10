<script setup lang="ts">
withDefaults(
  defineProps<{
    tag?: string
  }>(),
  { tag: 'div' },
)
</script>

<template>
  <component :is="tag" class="max-w-page desktop:w-page mx-auto w-full">
    <slot />
  </component>
</template>
