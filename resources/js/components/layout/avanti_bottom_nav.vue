<script setup lang="ts">
import AvantiAssistenzaButton from '../ui/avanti_assistenza_button.vue'
import AvantiBottomNavItem from '../ui/avanti_bottom_nav_item.vue'
import type { AvantiIconName } from '../ui/avanti_icon.vue'

defineProps<{
  activeNav: string
}>()

const emit = defineEmits<{
  navigate: [id: string]
}>()

const onNavigate = (id: string) => emit('navigate', id)

const items: { id: string; label: string; icon: AvantiIconName }[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'documenti', label: 'Documenti', icon: 'document' },
  { id: 'profilo', label: 'Profilo', icon: 'user' },
]
</script>

<template>
  <nav
    class="border-primary desktop:hidden fixed right-0 bottom-0 left-0 z-20 flex h-[62px] items-center justify-between border-t bg-white px-4 pb-[env(safe-area-inset-bottom)]"
    aria-label="Navigazione"
  >
    <AvantiBottomNavItem
      v-for="item in items"
      :key="item.id"
      :label="item.label"
      :icon="item.icon"
      :active="item.id === activeNav"
      @click="onNavigate(item.id)"
    />
    <AvantiAssistenzaButton compact label="ASSISTENZA" />
  </nav>
</template>
