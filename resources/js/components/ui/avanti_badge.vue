<script setup lang="ts">
defineProps<{
  count: string | number
  compact?: boolean
}>()
</script>

<template>
  <span
    class="bg-danger inline-flex items-center justify-center rounded-full border-white font-bold text-white"
    :class="
      compact
        ? 'size-[13px] border-[1.5px] text-[7px] leading-2'
        : 'size-[22px] border-2 text-[11px] leading-[13px]'
    "
  >
    {{ count }}
  </span>
</template>
