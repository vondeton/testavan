import type { AvantiChecklistStatus } from '../components/checklist/avanti_checklist_item.vue'
import type { AvantiStepStatus } from '../components/stepper/avanti_step.vue'
import type { AvantiIconName } from '../components/ui/avanti_icon.vue'

export const avantiUser = {
  name: 'Marco Rossi',
  email: 'ikoei@09gmail.com',
}

export const avantiSteps: { label: string; icon: AvantiIconName; status: AvantiStepStatus }[] = [
  { label: 'Simul.', icon: 'check', status: 'done' },
  { label: 'Approv.', icon: 'check', status: 'done' },
  { label: 'Account', icon: 'check', status: 'done' },
  { label: 'Docum.', icon: 'upload', status: 'current' },
  { label: 'Firma', icon: 'pen', status: 'pending' },
]

export const avantiCompactPersonalRows = [
  { label: 'Cognome', value: 'Intesa Sanpaolo S.p.A.' },
  { label: 'Nome', value: 'Marco Rossi' },
]

export const avantiProfileRows = [
  { label: 'Cognome', value: 'Intesa Sanpaolo S.p.A.' },
  { label: 'Nome', value: 'Marco Rossi' },
  { label: 'Email', value: 'ikoei@09gmail.com' },
  { label: 'Importo approvato', value: '12 000 €' },
  { label: 'Tipo di documento', value: 'Passaporto' },
  { label: 'Tipo di documento', value: 'AB1234567' },
]

export const avantiChecklistItems: {
  title: string
  subtitle: string
  icon: AvantiIconName
  status: AvantiChecklistStatus
}[] = [
  { title: 'Simulazione completata', subtitle: 'Completato', icon: 'simulation', status: 'done' },
  { title: 'Credito approvato', subtitle: 'Completato', icon: 'credit', status: 'done' },
  { title: 'Account creato', subtitle: 'Completato', icon: 'user', status: 'done' },
  {
    title: 'Documenti caricati',
    subtitle: 'Step attuale • Azione richiesta',
    icon: 'upload',
    status: 'current',
  },
  { title: 'Contratto firmato', subtitle: 'In attesa', icon: 'contract', status: 'pending' },
]
