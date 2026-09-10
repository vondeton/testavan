<script setup lang="ts">
import AvantiDataRow from './avanti_data_row.vue'

defineProps<{
  title: string
  rows: { label: string; value: string }[]
}>()
</script>

<template>
  <section class="border-line h-[131px] w-full rounded-2xl border bg-white px-6 pt-6 pb-[29px]">
    <h2 class="text-ink m-0 text-[15px] leading-[18px] font-semibold">{{ title }}</h2>
    <div class="mt-4 flex flex-col gap-3">
      <AvantiDataRow v-for="row in rows" :key="row.label" :label="row.label" :value="row.value" />
    </div>
  </section>
</template>
