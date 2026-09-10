<script setup lang="ts">
import AvantiBadge from './avanti_badge.vue'
import AvantiIcon from './avanti_icon.vue'

defineProps<{
  count?: string | number
}>()

const emit = defineEmits<{
  click: []
}>()

const onClick = () => emit('click')
</script>

<template>
  <button
    class="text-primary relative flex size-[38px] items-center justify-center rounded-[6px] border-0 bg-transparent p-0"
    type="button"
    @click="onClick"
  >
    <AvantiIcon class="size-6 [&_svg]:![stroke-width:1.5px]" name="bell" :size="24" />
    <AvantiBadge
      v-if="count != null"
      class="absolute top-[2px] right-[3px]"
      compact
      :count="count"
    />
  </button>
</template>
