<script setup lang="ts">
defineProps<{
  total: number
  completed: number
}>()
</script>

<template>
  <div class="flex h-1 w-full items-center gap-1">
    <span
      v-for="index in total"
      :key="index"
      class="h-1 flex-1 rounded-full"
      :class="{
        'bg-primary': index <= completed,
        'from-primary to-pending-bar bg-gradient-to-r': index === completed + 1,
        'bg-pending-bar': index > completed + 1,
      }"
    />
  </div>
</template>
