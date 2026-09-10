<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex h-[21px] items-center justify-center rounded-full bg-white/18 px-2.5 text-[11px] leading-[13px] font-bold whitespace-nowrap text-white"
  >
    {{ label }}
  </span>
</template>
