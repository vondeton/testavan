<script setup lang="ts">
import AvantiIcon from '../ui/avanti_icon.vue'

const props = defineProps<{
  label: string
  value: string
}>()

const emit = defineEmits<{
  copy: []
}>()

const onCopy = async () => {
  try {
    await navigator.clipboard.writeText(props.value)
  } catch {
    /* clipboard may be blocked */
  }
  emit('copy')
}
</script>

<template>
  <div class="desktop:gap-[6px] flex w-full flex-col gap-1.5">
    <span class="text-muted text-xs leading-[15px] font-normal">{{ label }}</span>
    <div
      class="border-line bg-canvas desktop:h-10 desktop:px-3 flex h-9 w-full items-center justify-between rounded-lg border px-2.5"
    >
      <span class="text-ink text-[13px] leading-4 font-semibold">{{ value }}</span>
      <button
        class="text-muted flex size-4 items-center justify-center"
        type="button"
        aria-label="Copia IBAN"
        @click="onCopy"
      >
        <AvantiIcon name="copy" :size="16" />
      </button>
    </div>
  </div>
</template>
