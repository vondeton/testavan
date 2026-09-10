<script setup lang="ts">
import AvantiActionButton from '../ui/avanti_action_button.vue'

defineProps<{
  title: string
  badge: string
  description: string
  actionLabel: string
}>()

const emit = defineEmits<{
  click: []
}>()

const onClick = () => emit('click')
</script>

<template>
  <div class="bg-primary-soft desktop:gap-2.5 desktop:p-4 flex flex-col gap-3 rounded-[10px] p-3.5">
    <div class="desktop:justify-start flex h-5 items-center justify-between gap-2.5">
      <div class="flex min-w-0 items-center gap-2.5">
        <span
          class="text-primary flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px] leading-[13px] font-bold"
        >
          ?
        </span>
        <span class="text-ink text-[13px] leading-4 font-semibold">{{ title }}</span>
      </div>
      <span
        class="text-primary inline-flex h-[19px] shrink-0 items-center rounded-xl bg-white px-2.5 text-[11px] leading-[13px] font-semibold"
      >
        {{ badge }}
      </span>
    </div>
    <div
      class="desktop:flex-row desktop:items-center desktop:justify-between desktop:gap-4 flex flex-col gap-3"
    >
      <p class="text-muted desktop:max-w-[400px] m-0 text-[13px] leading-4 font-normal">
        {{ description }}
      </p>
      <AvantiActionButton
        class="desktop:w-[132px]"
        :label="actionLabel"
        variant="solid"
        block
        @click="onClick"
      />
    </div>
  </div>
</template>
