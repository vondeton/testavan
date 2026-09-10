<script setup lang="ts">
import { computed } from 'vue'
import AvantiBreadcrumbs from './avanti_breadcrumbs.vue'
import AvantiContainer from './avanti_container.vue'
import AvantiHeaderProfile from './avanti_header_profile.vue'
import AvantiLogo from './avanti_logo.vue'
import AvantiUserBlock from './avanti_user_block.vue'
import AvantiAssistenzaButton from '../ui/avanti_assistenza_button.vue'
import AvantiBellButton from '../ui/avanti_bell_button.vue'
import type { AvantiIconName } from '../ui/avanti_icon.vue'
import AvantiNavItem from '../ui/avanti_nav_item.vue'

const props = defineProps<{
  activeNav: string
  userName: string
  userEmail: string
  avatarSrc: string
  breadcrumbs: string[]
  assistenzaCount: number
}>()

const navItems: { id: string; label: string; icon: AvantiIconName }[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'documenti', label: 'Documenti', icon: 'document' },
  { id: 'profilo', label: 'Profilo', icon: 'user' },
]

const emit = defineEmits<{
  navigate: [id: string]
}>()

const userInitials = computed(() =>
  props.userName
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
)

const onNavigate = (id: string) => emit('navigate', id)
const onHome = () => emit('navigate', 'home')
</script>

<template>
  <header class="desktop:h-[171px] h-[62px] w-full">
    <div
      class="border-line desktop:h-[111px] desktop:px-0 desktop:py-4 h-[62px] border-b bg-white px-4"
    >
      <AvantiContainer>
        <div class="desktop:h-[79px] flex h-[62px] items-center justify-between">
          <div class="desktop:h-[79px] desktop:gap-[52px] flex h-[29px] items-center gap-0">
            <button type="button" aria-label="Home" @click="onHome">
              <AvantiLogo />
            </button>
            <nav class="desktop:flex desktop:w-[660px] hidden items-center gap-3">
              <AvantiNavItem
                v-for="item in navItems"
                :key="item.id"
                :label="item.label"
                :icon="item.icon"
                :active="item.id === activeNav"
                @click="onNavigate(item.id)"
              />
            </nav>
          </div>
          <AvantiAssistenzaButton
            class="desktop:flex hidden"
            label="ASSISTENZA"
            :count="assistenzaCount"
          />
          <div class="desktop:hidden flex h-[38px] items-center gap-3">
            <AvantiBellButton :count="assistenzaCount" />
            <AvantiHeaderProfile
              :name="userName"
              :initials="userInitials"
              :avatar-src="avatarSrc"
            />
          </div>
        </div>
      </AvantiContainer>
    </div>
    <div class="desktop:block hidden">
      <AvantiContainer>
        <div class="flex h-[60px] items-center justify-between py-2.5">
          <AvantiUserBlock :name="userName" :email="userEmail" :avatar-src="avatarSrc" />
          <AvantiBreadcrumbs :items="breadcrumbs" />
        </div>
      </AvantiContainer>
    </div>
  </header>
</template>
