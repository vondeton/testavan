<script setup lang="ts">
defineProps<{
  label: string
  suffix?: string
}>()
</script>

<template>
  <span
    class="bg-primary font-banner inline-flex h-[22px] items-center justify-center rounded-full px-3 text-[11px] leading-[14px] font-bold tracking-[0.03em] whitespace-nowrap text-white"
  >
    {{ label }}<span v-if="suffix" class="desktop:inline hidden"> {{ suffix }}</span>
  </span>
</template>
