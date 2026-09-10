<script setup lang="ts">
import AvantiButton from '../ui/avanti_button.vue'
import AvantiStatusBadge from '../ui/avanti_status_badge.vue'

defineProps<{
  kicker: string
  caption: string
  amount: string
  details: string
  actionLabel: string
  badgeLabel: string
  footnote: string
}>()
</script>

<template>
  <section
    class="from-primary to-primary-deep desktop:h-[340px] desktop:p-8 flex h-[248px] w-full flex-col rounded-[20px] bg-gradient-to-b p-5"
  >
    <div class="desktop:h-[57px] flex h-12 items-start justify-between">
      <div>
        <p
          class="text-primary-soft desktop:font-semibold desktop:tracking-normal desktop:normal-case m-0 text-[13px] leading-4 font-light tracking-[0.13px] lowercase first-letter:uppercase"
        >
          {{ kicker }}
        </p>
        <p
          class="text-primary-soft desktop:mt-[22px] desktop:max-w-none desktop:text-base desktop:leading-[19px] desktop:tracking-normal mt-2 max-w-[150px] text-[10px] leading-3 font-semibold tracking-[0.1px] uppercase"
        >
          {{ caption }}
        </p>
      </div>
      <AvantiStatusBadge :label="badgeLabel" />
    </div>
    <div class="desktop:mt-4 desktop:h-[84px] mt-3 h-[63px]">
      <p
        class="desktop:text-[52px] desktop:leading-[63px] desktop:tracking-normal m-0 text-[36px] leading-[44px] font-bold tracking-[-0.54px] text-white"
      >
        {{ amount }}
      </p>
      <p
        class="text-primary-soft desktop:text-sm desktop:leading-[17px] mt-1 text-xs leading-[15px] font-normal"
      >
        {{ details }}
      </p>
    </div>
    <div class="desktop:mt-4 mt-3">
      <AvantiButton :label="actionLabel" icon="bank" disabled />
    </div>
    <div class="desktop:mt-4 desktop:h-[23px] mt-3 flex h-[15px] items-center gap-4">
      <span class="desktop:block hidden h-px w-[100px] bg-white/31" />
      <p class="text-primary-soft desktop:font-normal m-0 text-xs leading-[15px] font-medium">
        {{ footnote }}
      </p>
    </div>
  </section>
</template>
