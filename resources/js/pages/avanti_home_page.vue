<script setup lang="ts">
import AvantiBalanceCard from '../components/cards/avanti_balance_card.vue'
import AvantiPersonalData from '../components/cards/avanti_personal_data.vue'
import AvantiProgressBanner from '../components/cards/avanti_progress_banner.vue'
import AvantiChecklist from '../components/checklist/avanti_checklist.vue'
import AvantiShell from '../components/layout/avanti_shell.vue'
import AvantiStepper from '../components/stepper/avanti_stepper.vue'
import { avantiChecklistItems, avantiCompactPersonalRows, avantiSteps } from '../data/avanti_mock'
</script>

<template>
  <AvantiShell>
    <template #left>
      <AvantiStepper title="Passo 4 di 5" progress-label="3 / 5 completati" :steps="avantiSteps" />
      <AvantiBalanceCard
        kicker="IL TUO SALDO"
        caption="IMPORTO APPROVATO DAI NOSTRI PARTNER"
        amount="€ 12 000"
        details="Prestito personale • TAN 3,8%"
        action-label="Preleva i fondi →"
        badge-label="Completa i passaggi"
        footnote="Fondi disponibili dopo l'approvazione dei documenti"
      />
      <AvantiProgressBanner
        :title="'Per il prelievo dei fondi, completa\ntutti gli step'"
        subtitle="Step ancora da completare"
        counter="3 / 5"
        counter-suffix="COMPLETATI"
        :checks="['Documenti', 'Firma']"
      />
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
        :completed="3"
        :total="5"
        :items="avantiChecklistItems"
      />
    </template>
  </AvantiShell>
</template>
