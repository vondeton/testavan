<script setup lang="ts">
import { ref } from 'vue'
import AvantiChecklistItem from './avanti_checklist_item.vue'
import AvantiProgressSegments from './avanti_progress_segments.vue'
import AvantiIcon from '../ui/avanti_icon.vue'
import type { AvantiIconName } from '../ui/avanti_icon.vue'
import type { AvantiChecklistStatus } from './avanti_checklist_item.vue'

type ChecklistItem = {
  title: string
  subtitle: string
  icon: AvantiIconName
  status: AvantiChecklistStatus
}

defineProps<{
  kicker: string
  title: string
  items: ChecklistItem[]
  total: number
  completed: number
  counterLabel?: string
}>()

const emit = defineEmits<{
  toggle: []
}>()

const expanded = ref(true)

const onToggle = () => {
  expanded.value = !expanded.value
  emit('toggle')
}
</script>

<template>
  <section
    class="border-line shadow-checklist flex h-auto w-full flex-col items-start overflow-hidden rounded-2xl border bg-white p-0"
    :class="{
      'desktop:h-[516px]': expanded && counterLabel,
      'desktop:h-[483px]': expanded && !counterLabel,
    }"
  >
    <div
      class="border-line-soft flex w-full items-center justify-between self-stretch p-4"
      :class="[expanded ? 'border-b' : '', counterLabel ? 'desktop:h-[89px] h-[65px]' : 'h-[65px]']"
    >
      <div
        class="desktop:flex-none min-w-0 flex-1"
        :class="counterLabel ? 'desktop:w-[258px]' : 'desktop:w-[400px]'"
      >
        <p class="text-primary m-0 text-[11px] leading-[13px] font-bold uppercase">
          {{ kicker }}
        </p>
        <p class="text-ink mt-1 text-[13px] leading-4 font-semibold">{{ title }}</p>
      </div>
      <div class="flex shrink-0 items-center gap-2.5">
        <span
          v-if="counterLabel"
          class="bg-primary-soft text-primary desktop:inline-flex hidden h-[23px] items-center rounded-full px-3 text-xs leading-[15px] font-bold"
        >
          {{ counterLabel }}
        </span>
        <button
          class="border-line bg-canvas text-muted desktop:size-8 desktop:rounded-lg flex size-5 items-center justify-center rounded-[5px] border p-0"
          type="button"
          :aria-expanded="expanded"
          @click="onToggle"
        >
          <span
            class="desktop:size-3.5 flex size-[9px] items-center justify-center"
            :class="{ 'rotate-180': !expanded }"
          >
            <AvantiIcon
              class="text-muted desktop:!size-3.5 !size-[9px] [&_svg]:![stroke-width:1.25px]"
              name="chevron-up"
              :size="9"
            />
          </span>
        </button>
      </div>
    </div>
    <div v-show="expanded" class="w-full self-stretch">
      <template v-for="item in items" :key="item.title">
        <AvantiChecklistItem
          :title="item.title"
          :subtitle="item.subtitle"
          :icon="item.icon"
          :status="item.status"
        />
      </template>
    </div>
    <div class="border-line-soft flex h-8 w-full items-center self-stretch border-t px-4">
      <AvantiProgressSegments :total="total" :completed="completed" />
    </div>
  </section>
</template>
