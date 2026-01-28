// components/AnimatedSobre.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutContent } from '@/lib/content'
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  ScaleIn
} from '@/components/animations/MotionComponents'

// Dados da equipe com imagens reais
const teamWithImages = [
  {
    name: 'Consultora Especialista',
    role: 'Consultora em Higienização Hospitalar',
    credentials: [
      'Especialização em Saúde Pública com Ênfase em Gestão em Serviços Públicos',
      'Experiência em Controle de Infecção de Serviços de Saúde',
      'Consultora em limpeza e desinfecção de superfícies',
    ],
    image: '/images/image-14.png',
  },
  {
    name: 'Consultor Especialista',
    role: 'Consultor em Saneamento e Segurança',
    credentials: [
      'Saneamento e controle de perdas no sistema de abastecimento de água',
      'Estrutura de serviços de saúde',
      'Segurança do trabalho',
    ],
    image: '/images/image-15.png',
  },
]

export function AnimatedSobre() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre Nós
          </motion.h1>
          <motion.p
            className="text-gray-200 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Conheça a MS Consultoria e nossa equipe de especialistas.
          </motion.p>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Quem Somos</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {aboutContent.quemSomos}
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <HoverScale scale={1.03}>
                  <Image
                    src="/images/canva-02.jpg"
                    alt="Equipe MS Consultoria"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </HoverScale>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <StaggerItem>
              <HoverScale scale={1.02}>
                <div className="text-center md:text-left bg-white p-8 rounded-xl shadow-sm">
                  <motion.div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4"
                    whileHover={{ rotate: 10 }}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-4">Missão</h3>
                  <p className="text-gray-600">{aboutContent.missao}</p>
                </div>
              </HoverScale>
            </StaggerItem>
            <StaggerItem>
              <HoverScale scale={1.02}>
                <div className="text-center md:text-left bg-white p-8 rounded-xl shadow-sm">
                  <motion.div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4"
                    whileHover={{ rotate: 10 }}
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-4">Visão</h3>
                  <p className="text-gray-600">{aboutContent.visao}</p>
                </div>
              </HoverScale>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Nossa Equipe</h2>
              <p className="text-gray-600">
                Profissionais especializados em higienização de serviços de saúde.
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {teamWithImages.map((member, index) => (
              <StaggerItem key={index} className="h-full">
                <HoverScale scale={1.02} className="h-full">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
                    <div className="flex items-start gap-4 flex-1">
                      <motion.div
                        className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary">{member.name}</h3>
                        <p className="text-secondary text-sm mb-3">{member.role}</p>
                        <ul className="text-gray-600 text-sm space-y-2">
                          {member.credentials.map((credential, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-accent mt-1 flex-shrink-0">•</span>
                              <span>{credential}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Galeria de Equipe */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">Nossa Atuação</h2>
            </div>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <HoverScale scale={1.03}>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/canva-09.jpg"
                    alt="Treinamento de equipes"
                    fill
                    className="object-cover"
                  />
                </div>
              </HoverScale>
            </StaggerItem>
            <StaggerItem>
              <HoverScale scale={1.03}>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/canva-10.jpg"
                    alt="Capacitação profissional"
                    fill
                    className="object-cover"
                  />
                </div>
              </HoverScale>
            </StaggerItem>
            <StaggerItem>
              <HoverScale scale={1.03}>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/canva-11.jpg"
                    alt="Equipe completa"
                    fill
                    className="object-cover"
                  />
                </div>
              </HoverScale>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
