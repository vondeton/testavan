<script setup lang="ts">
defineProps<{
  label: string
  checked?: boolean
}>()
</script>

<template>
  <label class="desktop:h-[18px] flex h-[17px] items-center gap-2">
    <span
      class="border-primary desktop:size-[18px] size-4 shrink-0 rounded border bg-white"
      :class="{ 'bg-primary': checked }"
    />
    <span class="font-banner text-ink text-[13px] leading-[17px] font-medium">{{ label }}</span>
  </label>
</template>
