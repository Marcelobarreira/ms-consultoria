// app/contato/page.tsx
import type { Metadata } from 'next'
import { AnimatedContato } from '@/components/AnimatedContato'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato para consultoria em higiene hospitalar. Atendimento personalizado para sua empresa.',
}

export default function ContatoPage() {
  return <AnimatedContato />
}
