// app/servicos/page.tsx
import type { Metadata } from 'next'
import { AnimatedServicos } from '@/components/AnimatedServicos'

export const metadata: Metadata = {
  title: 'Serviços de Consultoria em Higiene Hospitalar',
  description: 'Diagnóstico situacional, documentação técnica, certificações e dimensionamento para serviços de limpeza hospitalar.',
}

export default function ServicosPage() {
  return <AnimatedServicos />
}
