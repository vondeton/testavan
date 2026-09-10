<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <div class="flex h-4 w-full items-center justify-between">
    <span class="text-muted text-xs leading-[15px] font-normal">{{ label }}</span>
    <span class="text-ink text-[13px] leading-4 font-semibold">{{ value }}</span>
  </div>
</template>
