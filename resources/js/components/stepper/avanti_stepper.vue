<script setup lang="ts">
import AvantiStep from './avanti_step.vue'
import AvantiStepConnector from './avanti_step_connector.vue'
import type { AvantiIconName } from '../ui/avanti_icon.vue'
import type { AvantiStepStatus } from './avanti_step.vue'

type StepItem = {
  label: string
  icon: AvantiIconName
  status: AvantiStepStatus
}

defineProps<{
  title: string
  progressLabel: string
  steps: StepItem[]
}>()
</script>

<template>
  <section
    class="border-line-step shadow-stepper desktop:h-[130px] desktop:gap-4 desktop:px-6 desktop:py-5 flex h-[92px] w-full flex-col items-start gap-3 rounded-2xl border bg-white p-4"
  >
    <div class="desktop:h-4 flex h-3 w-full items-center justify-between self-stretch">
      <p class="text-ink desktop:text-[13px] desktop:leading-4 m-0 text-[10px] leading-3 font-bold">
        {{ title }}
      </p>
      <p
        class="text-muted desktop:text-[13px] desktop:leading-4 m-0 text-[10px] leading-3 font-medium"
      >
        {{ progressLabel }}
      </p>
    </div>
    <div class="desktop:h-[58px] relative h-9 w-full self-stretch">
      <div
        class="bg-track desktop:block absolute top-[17px] right-[54px] left-[54px] hidden h-0.5"
      />
      <div
        class="bg-primary desktop:block absolute top-[17px] left-[54px] hidden h-0.5 w-[468px]"
      />
      <div class="desktop:justify-between relative z-[1] flex w-full items-start">
        <template v-for="(step, index) in steps" :key="step.label">
          <AvantiStep :label="step.label" :icon="step.icon" :status="step.status" />
          <AvantiStepConnector v-if="index < steps.length - 1" :complete="step.status === 'done'" />
        </template>
      </div>
    </div>
  </section>
</template>
