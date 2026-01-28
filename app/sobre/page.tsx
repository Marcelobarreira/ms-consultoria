// app/sobre/page.tsx
import type { Metadata } from 'next'
import { AnimatedSobre } from '@/components/AnimatedSobre'

export const metadata: Metadata = {
  title: 'Sobre a MS Consultoria - Especialistas em Higiene Hospitalar',
  description: 'Conheça nossa equipe de especialistas em higienização de serviços de saúde com experiência em controle de infecção.',
}

export default function SobrePage() {
  return <AnimatedSobre />
}
