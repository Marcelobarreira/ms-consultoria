// components/ContactForm.tsx
'use client'

import { useState } from 'react'
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
    <div className="bg-primary rounded-xl p-6 md:p-8 shadow-xl">
      <h3 className="text-xl md:text-2xl font-bold text-secondary text-center mb-2">
        Solicite um Orçamento
      </h3>
      <p className="text-white/80 text-sm text-center mb-6">
        Preencha o formulário e em breve um de nossos especialistas entrará em contato com você!
        <br />
        <span className="text-white/60 text-xs">*este formulário não é destinado para busca de vagas</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          required
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Seu email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Qual o seu cargo?"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
            value={formData.cargo}
            onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
          />
        </div>

        <input
          type="tel"
          placeholder="(00) 00000-0000"
          required
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          value={formData.phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />

        <input
          type="text"
          placeholder="Nome da empresa"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          value={formData.empresa}
          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
        />

        <input
          type="text"
          placeholder="CNPJ: 00.000.000/0000-00"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
          value={formData.cnpj}
          onChange={handleCNPJChange}
          maxLength={18}
        />

        <div>
          <p className="text-white text-sm mb-3">Quais serviços você procura?</p>
          <div className="grid grid-cols-2 gap-2">
            {serviceOptions.map((service) => (
              <label key={service} className="flex items-center gap-2 text-white text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                  className="w-4 h-4 rounded border-white/30 bg-white/10 text-secondary focus:ring-secondary"
                />
                {service}
              </label>
            ))}
          </div>
        </div>

        <select
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
          value={formData.colaboradores}
          onChange={(e) => setFormData({ ...formData, colaboradores: e.target.value })}
        >
          <option value="">Colaboradores</option>
          <option value="Menos de 10">Menos de 10</option>
          <option value="10 a 50">10 a 50</option>
          <option value="50 a 100">50 a 100</option>
          <option value="100 a 500">100 a 500</option>
          <option value="Mais de 500">Mais de 500</option>
        </select>

        <label className="flex items-start gap-2 text-white/80 text-xs cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="w-4 h-4 mt-0.5 rounded border-white/30 bg-white/10 text-secondary focus:ring-secondary"
          />
          <span>
            Eu concordo em receber comunicações.
            <br />
            Ao informar meus dados, estou ciente das diretrizes da Política de Privacidade.
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg"
        >
          Solicitar uma proposta
        </button>

        <p className="text-white/60 text-xs text-center">
          Garantimos que suas informações de contato serão utilizadas com responsabilidade e não serão usadas para o envio de SPAM.
        </p>
      </form>
    </div>
  )
}
