<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <nav class="flex h-[17px] items-center gap-2" aria-label="breadcrumb">
    <template v-for="(item, index) in items" :key="item">
      <span
        class="text-sm leading-[17px]"
        :class="index === items.length - 1 ? 'text-ink font-semibold' : 'text-muted font-medium'"
      >
        {{ item }}
      </span>
      <span v-if="index < items.length - 1" class="text-subtle text-sm leading-[17px] font-medium">
        /
      </span>
    </template>
  </nav>
</template>
