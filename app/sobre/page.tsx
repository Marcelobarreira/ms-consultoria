// app/sobre/page.tsx
import type { Metadata } from 'next'
import { aboutContent, team } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Sobre a MS Consultoria - Especialistas em Higiene Hospitalar',
  description: 'Conheça nossa equipe de especialistas em higienização de serviços de saúde com experiência em controle de infecção.',
}

export default function SobrePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre Nós</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Conheça a MS Consultoria e nossa equipe de especialistas.
          </p>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">Quem Somos</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutContent.quemSomos}
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Missão</h3>
              <p className="text-gray-600">{aboutContent.missao}</p>
            </div>
            <div className="text-center md:text-left">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Visão</h3>
              <p className="text-gray-600">{aboutContent.visao}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Nossa Equipe</h2>
            <p className="text-gray-600">
              Profissionais especializados em higienização de serviços de saúde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-primary">{member.name}</h3>
                    <p className="text-secondary text-sm mb-3">{member.role}</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {member.credentials.map((credential, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
