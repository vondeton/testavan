<script setup lang="ts">
defineProps<{
  complete?: boolean
}>()
</script>

<template>
  <span
    class="desktop:hidden mt-4 h-0.5 min-w-0 flex-1 self-start rounded-full"
    :class="complete ? 'bg-primary' : 'bg-track'"
  />
</template>
