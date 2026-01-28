// components/ContactForm.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/content'

const serviceOptions = [
  'Diagnóstico Situacional',
  'Elaboração de Documentos',
  'Acreditação e Certificação',
  'Dimensionamento',
  'Treinamentos Personalizados',
  'Implantação de Equipes',
]

// Mask functions
function maskPhone(value: string): string {
  const numbers = value.replace(/\D/g, '')
  if (numbers.length <= 2) return numbers.length ? `(${numbers}` : ''
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
}

function maskCNPJ(value: string): string {
  const numbers = value.replace(/\D/g, '')
  if (numbers.length <= 2) return numbers
  if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`
  if (numbers.length <= 8) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`
  if (numbers.length <= 12) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`
  return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cargo: '',
    phone: '',
    empresa: '',
    cnpj: '',
    services: [] as string[],
    colaboradores: '',
    consent: false,
  })

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: maskPhone(e.target.value) })
  }

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, cnpj: maskCNPJ(e.target.value) })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const servicesText = formData.services.length > 0
      ? formData.services.join(', ')
      : 'Não especificado'

    const colaboradoresText = formData.colaboradores || 'Não informado'

    const message = `*SOLICITAÇÃO DE ORÇAMENTO*
━━━━━━━━━━━━━━━━━━━━

*📋 DADOS DO CONTATO*
• Nome: ${formData.name}
• Email: ${formData.email}
• Cargo: ${formData.cargo || 'Não informado'}
• Telefone: ${formData.phone}

*🏢 DADOS DA EMPRESA*
• Empresa: ${formData.empresa || 'Não informado'}
• CNPJ: ${formData.cnpj || 'Não informado'}
• Colaboradores: ${colaboradoresText}

*🔧 SERVIÇOS DE INTERESSE*
${formData.services.length > 0 ? formData.services.map(s => `• ${s}`).join('\n') : '• Não especificado'}

━━━━━━━━━━━━━━━━━━━━
_Enviado pelo site MS Consultoria_`

    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-800" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative p-6 md:p-8">
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary-light text-xs font-medium mb-3">
            Fale Conosco
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Solicite um <span className="text-secondary-light">Orçamento</span>
          </h3>
          <p className="text-white/70 text-sm">
            Preencha o formulário e em breve um de nossos especialistas entrará em contato!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Seu email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Qual o seu cargo?"
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
              value={formData.cargo}
              onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
            />
          </div>

          <input
            type="tel"
            placeholder="(00) 00000-0000"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            value={formData.phone}
            onChange={handlePhoneChange}
            maxLength={15}
          />

          <input
            type="text"
            placeholder="Nome da empresa"
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
          />

          <input
            type="text"
            placeholder="CNPJ: 00.000.000/0000-00"
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            value={formData.cnpj}
            onChange={handleCNPJChange}
            maxLength={18}
          />

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-white text-sm font-medium mb-3">Quais serviços você procura?</p>
            <div className="grid grid-cols-2 gap-3">
              {serviceOptions.map((service) => (
                <label key={service} className="flex items-center gap-2 text-white/80 text-sm cursor-pointer hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-4 h-4 rounded border-white/30 bg-white/10 text-teal focus:ring-teal accent-teal"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <select
            className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            value={formData.colaboradores}
            onChange={(e) => setFormData({ ...formData, colaboradores: e.target.value })}
          >
            <option value="" className="text-gray-800">Quantidade de Colaboradores</option>
            <option value="Menos de 10" className="text-gray-800">Menos de 10</option>
            <option value="10 a 50" className="text-gray-800">10 a 50</option>
            <option value="50 a 100" className="text-gray-800">50 a 100</option>
            <option value="100 a 500" className="text-gray-800">100 a 500</option>
            <option value="Mais de 500" className="text-gray-800">Mais de 500</option>
          </select>

          <label className="flex items-start gap-3 text-white/70 text-xs cursor-pointer p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <input
              type="checkbox"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="w-4 h-4 mt-0.5 rounded border-white/30 bg-white/10 text-teal focus:ring-teal accent-teal"
            />
            <span>
              Eu concordo em receber comunicações. Ao informar meus dados, estou ciente das diretrizes da Política de Privacidade.
            </span>
          </label>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-secondary via-teal to-cyan text-white font-bold py-4 px-6 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar uma proposta
          </motion.button>

          <p className="text-white/50 text-xs text-center">
            Suas informações serão utilizadas com responsabilidade.
          </p>
        </form>
      </div>
    </div>
  )
}
