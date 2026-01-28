// components/AnimatedServicos.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { services, siteConfig } from '@/lib/content'
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  HoverScale
} from '@/components/animations/MotionComponents'

// Mapeamento de imagens para cada serviço
const serviceImages: Record<string, string> = {
  diagnostico: '/images/canva-04.jpg',
  documentos: '/images/canva-05.jpg',
  certificacao: '/images/canva-06.jpg',
  dimensionamento: '/images/canva-08.jpg',
  treinamentos: '/images/canva-03.jpg',
  implantacao: '/images/canva-02.jpg',
}

export function AnimatedServicos() {
  const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da MS Consultoria.')
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${message}`

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
            Nossos Serviços
          </motion.h1>
          <motion.p
            className="text-gray-200 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soluções completas em consultoria de higiene e limpeza para serviços de saúde.
          </motion.p>
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
                {index % 2 === 0 ? (
                  <>
                    <SlideInLeft delay={0.1}>
                      <div className="flex-1">
                        <motion.div
                          className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <span className="text-xl font-bold">{index + 1}</span>
                        </motion.div>
                        <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{service.fullDescription}</p>
                      </div>
                    </SlideInLeft>
                    <SlideInRight delay={0.2}>
                      <div className="flex-1 w-full">
                        <HoverScale scale={1.03}>
                          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={serviceImages[service.id] || '/images/image-05.png'}
                              alt={service.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </HoverScale>
                      </div>
                    </SlideInRight>
                  </>
                ) : (
                  <>
                    <SlideInRight delay={0.1}>
                      <div className="flex-1">
                        <motion.div
                          className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <span className="text-xl font-bold">{index + 1}</span>
                        </motion.div>
                        <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{service.fullDescription}</p>
                      </div>
                    </SlideInRight>
                    <SlideInLeft delay={0.2}>
                      <div className="flex-1 w-full">
                        <HoverScale scale={1.03}>
                          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={serviceImages[service.id] || '/images/image-05.png'}
                              alt={service.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </HoverScale>
                      </div>
                    </SlideInLeft>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Precisa de algum desses serviços?
            </h2>
            <p className="text-gray-600 mb-8">
              Entre em contato e solicite um orçamento personalizado.
            </p>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Solicitar Orçamento
            </motion.a>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}
