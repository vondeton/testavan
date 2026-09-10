<script setup lang="ts">
import AvantiAvatar from '../ui/avanti_avatar.vue'

defineProps<{
  name: string
  email: string
  avatarSrc: string
}>()
</script>

<template>
  <div class="flex h-10 w-[163px] items-center gap-3">
    <AvantiAvatar :src="avatarSrc" :alt="name" />
    <div class="flex h-8 flex-col">
      <p class="text-ink m-0 text-sm leading-[17px] font-semibold">{{ name }}</p>
      <p class="text-muted m-0 text-xs leading-[15px] font-normal">{{ email }}</p>
    </div>
  </div>
</template>
