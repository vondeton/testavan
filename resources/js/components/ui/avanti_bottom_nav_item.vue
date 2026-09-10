<script setup lang="ts">
import AvantiIcon from './avanti_icon.vue'
import type { AvantiIconName } from './avanti_icon.vue'

defineProps<{
  label: string
  icon: AvantiIconName
  active?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

const onClick = () => emit('click')
</script>

<template>
  <button
    class="flex h-[41px] min-w-10 flex-col items-center justify-center gap-1 border-0 bg-transparent p-0"
    :class="active ? 'text-primary' : 'text-ink'"
    type="button"
    @click="onClick"
  >
    <span class="flex size-5" :class="active ? 'text-inherit' : 'text-muted'">
      <AvantiIcon :name="icon" :size="18" />
    </span>
    <span class="text-sm leading-[17px]" :class="active ? 'font-semibold' : 'font-medium'">
      {{ label }}
    </span>
  </button>
</template>
