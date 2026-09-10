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
    class="flex h-[38px] w-[210.67px] items-center justify-start gap-3 rounded-lg border border-transparent px-3"
    :class="active ? 'bg-primary-soft text-primary' : 'border-primary-soft bg-canvas text-ink'"
    type="button"
    @click="onClick"
  >
    <span class="size-[18px] shrink-0" :class="active ? 'text-inherit' : 'text-muted'">
      <AvantiIcon :name="icon" :size="18" />
    </span>
    <span class="text-sm leading-[17px]" :class="active ? 'font-semibold' : 'font-medium'">
      {{ label }}
    </span>
  </button>
</template>
