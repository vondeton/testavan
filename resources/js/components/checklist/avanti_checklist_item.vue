<script setup lang="ts">
import AvantiIcon from '../ui/avanti_icon.vue'
import type { AvantiIconName } from '../ui/avanti_icon.vue'

export type AvantiChecklistStatus = 'done' | 'current' | 'pending'

defineProps<{
  title: string
  subtitle: string
  icon: AvantiIconName
  status: AvantiChecklistStatus
}>()

const emit = defineEmits<{
  click: []
}>()

const onClick = () => emit('click')
</script>

<template>
  <div
    class="not-first:border-line-soft desktop:h-[76px] flex h-[68px] w-full items-center px-4 not-first:border-t"
    :class="{ 'bg-primary-soft': status === 'current' }"
  >
    <span
      class="desktop:size-11 flex size-9 shrink-0 items-center justify-center rounded-full border border-transparent"
      :class="{
        'bg-primary text-white': status === 'done',
        'border-primary text-primary bg-white': status === 'current',
        'bg-pending text-subtle': status === 'pending',
      }"
    >
      <span class="desktop:size-5 flex size-4 items-center justify-center [&>*]:!size-full">
        <AvantiIcon
          class="[&_svg]:stroke-[2.44444]"
          :class="{ '[&_svg]:stroke-white': status === 'done' }"
          :name="icon"
          :size="20"
        />
      </span>
    </span>
    <div class="desktop:w-[336px] desktop:flex-none ml-3 min-w-0 flex-1">
      <p
        class="desktop:text-sm desktop:leading-[17px] m-0 text-[13px] leading-4"
        :class="{
          'text-ink font-semibold': status === 'done',
          'text-ink font-bold': status === 'current',
          'text-muted font-medium': status === 'pending',
        }"
      >
        {{ title }}
      </p>
      <p
        class="m-0 mt-0.5 text-[11px] leading-[13px]"
        :class="{
          'text-primary font-medium': status === 'done',
          'text-primary font-semibold': status === 'current',
          'text-subtle font-normal': status === 'pending',
        }"
      >
        {{ subtitle }}
      </p>
    </div>
    <button
      class="ml-auto flex items-center justify-center rounded-full border-0 p-0"
      :class="{
        'bg-primary desktop:size-7 size-[22px] text-white': status === 'done',
        'bg-primary size-7 justify-start text-white': status === 'current',
        'bg-pending text-subtle size-7': status === 'pending',
      }"
      type="button"
      :disabled="status === 'done'"
      @click="onClick"
    >
      <span class="flex size-3.5 items-center justify-center">
        <AvantiIcon
          class="[&_svg]:stroke-[2.55555]"
          :class="{
            '[&_svg]:stroke-white': status === 'done' || status === 'current',
          }"
          :name="status === 'done' ? 'check' : 'arrow-right'"
          :size="14"
        />
      </span>
    </button>
  </div>
</template>
