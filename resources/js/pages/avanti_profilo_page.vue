<script setup lang="ts">
import AvantiPersonalData from '../components/cards/avanti_personal_data.vue'
import AvantiProfileData from '../components/cards/avanti_profile_data.vue'
import AvantiSecurityCard from '../components/cards/avanti_security_card.vue'
import AvantiChecklist from '../components/checklist/avanti_checklist.vue'
import AvantiShell from '../components/layout/avanti_shell.vue'
import AvantiStepper from '../components/stepper/avanti_stepper.vue'
import {
  avantiChecklistItems,
  avantiCompactPersonalRows,
  avantiProfileRows,
  avantiSteps,
} from '../data/avanti_mock'
</script>

<template>
  <AvantiShell>
    <template #left>
      <AvantiStepper title="Passo 4 di 5" progress-label="3 / 5 completati" :steps="avantiSteps" />
      <AvantiProfileData
        title="Dati personali"
        action-label="Modifica nome"
        :rows="avantiProfileRows"
        iban-label="IBAN"
        iban-value="-"
      />
      <AvantiSecurityCard title="Sicurezza" />
    </template>
    <template #right>
      <AvantiPersonalData
        class="desktop:block hidden"
        title="Dati personali"
        :rows="avantiCompactPersonalRows"
      />
      <AvantiChecklist
        kicker="Completa tutti gli step"
        title="Per il prelievo dei fondi, completa tutti gli step"
        counter-label="3 / 5 completati"
        :completed="3"
        :total="5"
        :items="avantiChecklistItems"
      />
    </template>
  </AvantiShell>
</template>
