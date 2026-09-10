<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import avatarSrc from '../../assets/avanti_avatar.svg'
import consultantSrc from '../../assets/avanti_consultant.png'
import AvantiChatWidget from '../chat/avanti_chat_widget.vue'
import { avantiUser } from '../../data/avanti_mock'
import AvantiBottomNav from './avanti_bottom_nav.vue'
import AvantiContainer from './avanti_container.vue'
import AvantiHeader from './avanti_header.vue'

const route = useRoute()
const router = useRouter()

const activeNav = computed(() => (route.name === 'profilo' ? 'profilo' : 'home'))

const breadcrumbs = computed(() =>
  route.name === 'profilo' ? ['Piattaforma', 'Profilo'] : ['Piattaforma', 'Home'],
)

const onNavigate = (id: string) => {
  if (id === 'home') {
    void router.push({ name: 'home' })
    return
  }
  if (id === 'profilo') {
    void router.push({ name: 'profilo' })
  }
}
</script>

<template>
  <div class="bg-canvas desktop:min-h-[889px] min-h-svh w-full">
    <AvantiHeader
      :active-nav="activeNav"
      :user-name="avantiUser.name"
      :user-email="avantiUser.email"
      :avatar-src="avatarSrc"
      :breadcrumbs="breadcrumbs"
      :assistenza-count="4"
      @navigate="onNavigate"
    />
    <AvantiContainer tag="main">
      <div
        class="desktop:flex-row desktop:gap-10 desktop:px-0 desktop:pt-5 desktop:pb-10 flex flex-col gap-5 px-4 pt-4 pb-[calc(78px+env(safe-area-inset-bottom))]"
      >
        <div class="desktop:w-[792px] desktop:gap-8 flex w-full flex-col gap-5">
          <slot name="left" />
        </div>
        <div class="desktop:w-[464px] desktop:gap-8 flex w-full flex-col gap-5">
          <slot name="right" />
        </div>
      </div>
    </AvantiContainer>
    <AvantiChatWidget :src="consultantSrc" :count="2" />
    <AvantiBottomNav :active-nav="activeNav" @navigate="onNavigate" />
  </div>
</template>
