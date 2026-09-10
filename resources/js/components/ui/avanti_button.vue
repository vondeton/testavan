<script setup lang="ts">
import AvantiIcon from './avanti_icon.vue'
import type { AvantiIconName } from './avanti_icon.vue'

defineProps<{
  label: string
  icon?: AvantiIconName
  disabled?: boolean
}>()

const emit = defineEmits<{
  click: []
}>()

const onClick = () => emit('click')
</script>

<template>
  <button
    class="bg-canvas desktop:h-16 desktop:gap-3 desktop:rounded-[14px] desktop:px-6 desktop:py-[18px] flex h-[46px] w-full flex-row items-center justify-center gap-2 rounded-[9px] border-0 px-4 disabled:opacity-50"
    type="button"
    :disabled="disabled"
    @click="onClick"
  >
    <span v-if="icon" class="text-primary desktop:size-7 size-5 [&>*]:!size-full">
      <AvantiIcon :name="icon" :size="28" />
    </span>
    <span
      class="from-primary to-primary-deep desktop:text-lg desktop:leading-[22px] bg-gradient-to-b bg-clip-text text-base leading-[19px] font-semibold text-transparent"
    >
      {{ label }}
    </span>
  </button>
</template>
