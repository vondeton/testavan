<script setup lang="ts">
import AvantiActionButton from '../ui/avanti_action_button.vue'

defineProps<{
  description: string
  actionLabel: string
}>()

const emit = defineEmits<{
  click: []
}>()

const onClick = () => emit('click')
</script>

<template>
  <div
    class="desktop:h-[68px] desktop:flex-row desktop:items-center desktop:justify-between desktop:gap-4 desktop:py-0 flex flex-col gap-2.5 py-4"
  >
    <p class="text-muted desktop:max-w-[400px] m-0 text-[13px] leading-4 font-normal">
      {{ description }}
    </p>
    <AvantiActionButton class="desktop:w-[148px]" :label="actionLabel" block @click="onClick" />
  </div>
</template>
