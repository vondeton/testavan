<script setup lang="ts">
import AvantiIcon from '../ui/avanti_icon.vue'
import AvantiEmailVerify from './avanti_email_verify.vue'
import AvantiSecurityAction from './avanti_security_action.vue'

defineProps<{
  title: string
}>()

const emit = defineEmits<{
  changePassword: []
  changeEmail: []
  sendCode: []
}>()

const onChangePassword = () => emit('changePassword')
const onChangeEmail = () => emit('changeEmail')
const onSendCode = () => emit('sendCode')
</script>

<template>
  <section class="border-line desktop:p-6 w-full rounded-2xl border bg-white p-4">
    <div class="flex items-center gap-2.5">
      <span class="bg-primary-soft flex size-8 shrink-0 items-center justify-center rounded-lg">
        <span class="text-primary">
          <AvantiIcon name="shield" :size="18" />
        </span>
      </span>
      <h2 class="text-ink m-0 text-[15px] leading-[18px] font-semibold">{{ title }}</h2>
    </div>
    <div class="border-line mt-4 flex flex-col border-t">
      <AvantiSecurityAction
        description="Cambia la password del tuo account."
        action-label="Cambia password"
        @click="onChangePassword"
      />
      <AvantiSecurityAction
        class="border-line border-t"
        description="Cambia l'indirizzo email del tuo account."
        action-label="Cambia email"
        @click="onChangeEmail"
      />
      <div class="border-line desktop:pt-0 border-t pt-4">
        <AvantiEmailVerify
          title="Verifica email"
          badge="Non verificata"
          description="Verifica il tuo indirizzo email per proteggere il tuo account."
          action-label="Invia codice"
          @click="onSendCode"
        />
      </div>
    </div>
  </section>
</template>
