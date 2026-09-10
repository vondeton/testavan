<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    variant?: 'ink' | 'outline' | 'solid'
    block?: boolean
  }>(),
  { variant: 'outline', block: false },
)

const emit = defineEmits<{
  click: []
}>()

const onClick = () => emit('click')
</script>

<template>
  <button
    class="inline-flex shrink-0 items-center justify-center rounded-lg"
    :class="[
      block ? 'w-full' : 'w-auto',
      variant === 'ink' &&
        'border-primary text-ink desktop:h-[37px] desktop:px-6 desktop:text-sm desktop:leading-[17px] h-[31px] border px-3 text-xs leading-[15px] font-medium',
      variant === 'outline' &&
        'border-primary text-primary desktop:h-9 h-10 border bg-white px-4 text-[13px] leading-4 font-semibold',
      variant === 'solid' && 'bg-primary h-9 px-4 text-[13px] leading-4 font-semibold text-white',
    ]"
    type="button"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
