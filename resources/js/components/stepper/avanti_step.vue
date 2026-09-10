<script setup lang="ts">
import AvantiIcon from '../ui/avanti_icon.vue'
import type { AvantiIconName } from '../ui/avanti_icon.vue'

export type AvantiStepStatus = 'done' | 'current' | 'pending'

defineProps<{
  label: string
  icon: AvantiIconName
  status: AvantiStepStatus
}>()
</script>

<template>
  <div class="desktop:h-[58px] desktop:w-[108px] flex h-9 w-auto shrink-0 flex-col items-center">
    <span
      class="desktop:size-9 flex size-5 items-center justify-center overflow-hidden rounded-full border border-transparent"
      :class="{
        'bg-primary text-white': status === 'done',
        'border-primary bg-primary-soft text-primary border-2': status === 'current',
        'border-track bg-pending text-subtle border-[1.5px]': status === 'pending',
      }"
    >
      <AvantiIcon class="desktop:!size-4 !size-2.5" :name="icon" :size="16" />
    </span>
    <span
      class="desktop:mt-2 desktop:text-[11px] desktop:leading-[13px] mt-1 text-center text-[10px] leading-3"
      :class="{
        'text-primary font-semibold': status === 'done',
        'text-primary font-bold': status === 'current',
        'text-subtle font-medium': status === 'pending',
      }"
    >
      {{ label }}
    </span>
  </div>
</template>
