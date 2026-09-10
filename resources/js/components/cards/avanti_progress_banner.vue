<script setup lang="ts">
import AvantiCheckbox from '../ui/avanti_checkbox.vue'
import AvantiCounterBadge from '../ui/avanti_counter_badge.vue'
import AvantiIcon from '../ui/avanti_icon.vue'
import AvantiIconButton from '../ui/avanti_icon_button.vue'

defineProps<{
  title: string
  subtitle: string
  counter: string
  counterSuffix?: string
  checks: string[]
}>()
</script>

<template>
  <section
    class="border-primary bg-primary-soft desktop:h-[124px] desktop:grid-cols-[44px_minmax(0,1fr)_auto_36px] desktop:border-line-banner desktop:px-5 desktop:[grid-template-areas:'lock_title_counter_action'_'lock_subtitle_counter_action'_'lock_checks_counter_action'] grid h-[136px] w-full grid-cols-[32px_minmax(0,1fr)_auto] items-start gap-x-4 rounded-2xl border p-4 [grid-template-areas:'lock_title_title'_'lock_subtitle_subtitle'_'checks_checks_counter']"
  >
    <span
      class="bg-primary desktop:size-11 desktop:self-start flex size-8 items-center justify-center self-center overflow-hidden rounded-full text-white [grid-area:lock]"
    >
      <AvantiIcon class="desktop:!size-5 !size-3.5" name="lock" :size="20" />
    </span>
    <p
      class="font-banner text-ink desktop:whitespace-normal m-0 text-[13px] leading-[17px] font-semibold whitespace-pre-line [grid-area:title]"
    >
      {{ title }}
    </p>
    <AvantiCounterBadge
      class="desktop:mt-0 desktop:ml-3 desktop:self-start mt-3 self-end [grid-area:counter]"
      :label="counter"
      :suffix="counterSuffix"
    />
    <p
      class="font-banner text-muted desktop:mt-1.5 desktop:text-xs desktop:leading-4 mt-0.5 text-[11px] leading-[14px] font-medium [grid-area:subtitle]"
    >
      {{ subtitle }}
    </p>
    <div class="desktop:mt-1.5 mt-3 flex flex-col gap-1.5 [grid-area:checks]">
      <AvantiCheckbox v-for="item in checks" :key="item" :label="item" />
    </div>
    <AvantiIconButton
      class="desktop:flex hidden self-center [grid-area:action]"
      icon="arrow-right"
      :icon-size="16"
    />
  </section>
</template>
