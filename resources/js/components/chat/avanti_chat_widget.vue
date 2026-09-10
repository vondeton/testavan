<script setup lang="ts">
import AvantiAvatar from '../ui/avanti_avatar.vue'

defineProps<{
  src: string
  count?: string | number
}>()

const emit = defineEmits<{
  click: []
}>()

const onClick = () => emit('click')
</script>

<template>
  <button
    class="desktop:hidden fixed right-4 bottom-[calc(82px+env(safe-area-inset-bottom))] z-30 border-0 bg-transparent p-0"
    type="button"
    aria-label="Messaggi"
    @click="onClick"
  >
    <span class="shadow-chat relative block size-[57px] rounded-[28.4444px]">
      <AvantiAvatar class="!size-full rounded-[28.4444px]" :src="src" alt="Consulente" :size="57" />
      <span
        class="border-primary pointer-events-none absolute inset-0 rounded-[28.4444px] border-[1.77778px] border-solid"
      />
      <span
        v-if="count != null"
        class="bg-danger-deep absolute top-[-14px] right-[-11px] z-10 flex size-7 items-center justify-center rounded-full text-lg leading-none font-bold text-white"
      >
        {{ count }}
      </span>
    </span>
  </button>
</template>
