<script setup lang="ts">
import AvantiActionButton from '../ui/avanti_action_button.vue'
import AvantiDataRow from './avanti_data_row.vue'
import AvantiIbanField from './avanti_iban_field.vue'

defineProps<{
  title: string
  actionLabel: string
  rows: { label: string; value: string }[]
  ibanLabel: string
  ibanValue: string
}>()

const emit = defineEmits<{
  edit: []
  copyIban: []
}>()

const onEdit = () => emit('edit')
const onCopyIban = () => emit('copyIban')
</script>

<template>
  <section class="border-line desktop:p-6 w-full rounded-2xl border bg-white p-4">
    <div class="flex items-center justify-between">
      <h2 class="text-ink m-0 text-[15px] leading-[18px] font-semibold">{{ title }}</h2>
      <AvantiActionButton :label="actionLabel" variant="ink" @click="onEdit" />
    </div>
    <div class="desktop:gap-4 mt-4 flex flex-col gap-3">
      <AvantiDataRow
        v-for="(row, index) in rows"
        :key="`${row.label}-${index}`"
        :label="row.label"
        :value="row.value"
      />
      <AvantiIbanField :label="ibanLabel" :value="ibanValue" @copy="onCopyIban" />
    </div>
  </section>
</template>
