<script setup lang="ts">
import AvantiIcon from './avanti_icon.vue'
import type { AvantiIconName } from './avanti_icon.vue'

withDefaults(
  defineProps<{
    icon: AvantiIconName
    variant?: 'primary' | 'muted'
    iconSize?: number
  }>(),
  { iconSize: 16 },
)

const emit = defineEmits<{
  click: []
}>()

const onClick = () => emit('click')
</script>

<template>
  <button
    class="flex size-9 items-center justify-center rounded-full p-0"
    :class="variant === 'muted' ? 'bg-pending text-subtle' : 'bg-primary text-white'"
    type="button"
    @click="onClick"
  >
    <AvantiIcon :name="icon" :size="iconSize" />
  </button>
</template>
