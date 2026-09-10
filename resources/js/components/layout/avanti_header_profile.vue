<script setup lang="ts">
import AvantiAvatar from '../ui/avanti_avatar.vue'

defineProps<{
  name: string
  initials: string
  avatarSrc: string
}>()
</script>

<template>
  <div class="flex h-8 items-center gap-1.5">
    <AvantiAvatar class="border-primary border-[1.5px]" :src="avatarSrc" :alt="name" :size="32" />
    <span class="text-ink text-[13px] leading-4 font-semibold">{{ initials }}</span>
  </div>
</template>
