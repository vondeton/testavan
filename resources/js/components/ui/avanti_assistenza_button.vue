<script setup lang="ts">
import AvantiBadge from './avanti_badge.vue'
import AvantiIcon from './avanti_icon.vue'

defineProps<{
  label: string
  count?: string | number
  compact?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

const onClick = () => emit('click')
</script>

<template>
  <button
    class="bg-primary relative flex border-0 text-white"
    :class="
      compact
        ? 'h-[43px] flex-col items-center justify-center gap-0.5 rounded-lg px-3'
        : 'h-[39px] w-[156px] items-center gap-3 rounded-lg px-3'
    "
    type="button"
    @click="onClick"
  >
    <span :class="compact ? 'size-4' : 'size-[18px]'">
      <AvantiIcon name="chat" :size="compact ? 16 : 18" />
    </span>
    <span
      :class="
        compact ? 'text-xs leading-[15px] font-semibold' : 'text-base leading-[19px] font-semibold'
      "
    >
      {{ label }}
    </span>
    <AvantiBadge
      v-if="count != null && !compact"
      class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
      :count="count"
    />
  </button>
</template>
