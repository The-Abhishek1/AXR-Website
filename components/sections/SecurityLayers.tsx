'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ShieldCheckIcon, LockClosedIcon, ServerIcon, EyeIcon } from '@heroicons/react/24/outline'

const securityLayers = [
  {
    title: 'Network Isolation',
    description: 'Each service runs in a separate network segment. API → Workers only, Workers → No internet access',
    icon: ServerIcon,
    gradient: 'from-blue-500 to-cyan-500',
    items: ['Micro-segmentation', 'Zero-trust networking', 'Network policies'],
  },
  {
    title: 'Container Security',
    description: 'Non-root containers with read-only root filesystem and dropped Linux capabilities',
    icon: LockClosedIcon,
    gradient: 'from-purple-500 to-pink-500',
    items: ['Non-root execution', 'Read-only FS', 'Seccomp filters', 'Capability dropping'],
  },
  {
    title: 'Image Security',
    description: 'Distroless images with vulnerability scanning and signed container images',
    icon: ShieldCheckIcon,
    gradient: 'from-green-500 to-emerald-500',
    items: ['Distroless base', 'Vulnerability scanning', 'Image signing', 'SBOM generation'],
  },
  {
    title: 'Runtime Security',
    description: 'Falco runtime monitoring with audit logging and threat detection',
    icon: EyeIcon,
    gradient: 'from-orange-500 to-red-500',
    items: ['Falco monitoring', 'Audit logging', 'Threat detection', 'Real-time alerts'],
  },
]

export function SecurityLayers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="security" className="py-24 relative overflow-hidden">
      {/* Background with security pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-dark-300 opacity-95" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />
      
      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">Security</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Defense in <span className="gradient-text">Depth</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Multi-layered security architecture protecting every aspect of the platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${layer.gradient} p-2.5 mb-4`}>
                  <layer.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{layer.title}</h3>
                <p className="text-gray-300 mb-4">{layer.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <Badge key={item} variant="outline" className="border-white/20 text-gray-300">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Compliance badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Compliance Ready</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['SOC2', 'GDPR', 'HIPAA', 'PCI-DSS'].map((compliance) => (
              <Badge key={compliance} variant="gradient" size="lg" className="px-6 py-2">
                {compliance}
              </Badge>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}