// app/servicos/page.tsx
import type { Metadata } from 'next'
import { services, siteConfig } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Serviços de Consultoria em Higiene Hospitalar',
  description: 'Diagnóstico situacional, documentação técnica, certificações e dimensionamento para serviços de limpeza hospitalar.',
}

export default function ServicosPage() {
  const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da MS Consultoria.')
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${message}`

  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Serviços</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Soluções completas em consultoria de higiene e limpeza para serviços de saúde.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{service.fullDescription}</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-gray-400">Imagem ilustrativa</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Precisa de algum desses serviços?
          </h2>
          <p className="text-gray-600 mb-8">
            Entre em contato e solicite um orçamento personalizado.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </>
  )
}
