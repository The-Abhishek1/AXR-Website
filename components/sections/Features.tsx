'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  BrainIcon,
  ShieldIcon,
  CpuIcon,
  NetworkIcon,
  LockIcon,
  ChartIcon,
  ContainerIcon,
  AIIcon,
} from '@/components/ui/Icons'

const features = [
  {
    title: 'Intelligent Agents',
    description: 'LLM-powered agents for planning, verification, and execution of security workflows',
    icon: BrainIcon,
    tags: ['Planner Agent', 'Verifier Agent', 'Scanner Agent', 'Recon Agent'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Dynamic Tool Management',
    description: 'Automatic tool discovery with Docker-based isolated execution and auto-scaling',
    icon: ContainerIcon,
    tags: ['Tool Discovery', 'Isolated Execution', 'Auto-scaling', 'Versioning'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Enterprise Security',
    description: 'Multi-tenant isolation with RBAC/ABAC and complete audit logging',
    icon: ShieldIcon,
    tags: ['RBAC/ABAC', 'Audit Logs', 'Secret Management', 'Compliance'],
    gradient: 'from-red-500 to-orange-500',
  },
  {
    title: 'AI/ML Capabilities',
    description: 'Advanced ML for vulnerability prediction, risk scoring, and anomaly detection',
    icon: AIIcon,
    tags: ['Risk Scoring', 'Prediction', 'Anomaly Detection', 'Optimization'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Observability',
    description: 'Complete observability with OpenTelemetry, Prometheus, and Grafana',
    icon: ChartIcon,
    tags: ['Metrics', 'Tracing', 'Logging', 'Dashboards'],
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'Resilience & Recovery',
    description: 'Enterprise fault tolerance with circuit breakers and self-healing',
    icon: CpuIcon,
    tags: ['Circuit Breaker', 'Retry Logic', 'Fallback', 'Self-healing'],
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-dark-200 dark:to-dark-300" />
      
      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise-Grade <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built for security teams that need automation, scalability, and enterprise-level control
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="h-full group hover:border-transparent relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 mb-4`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}