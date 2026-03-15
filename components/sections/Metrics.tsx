'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import {
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ServerIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const metrics = [
  {
    label: 'Execution Time',
    value: '<100ms',
    description: 'Average response time',
    icon: ClockIcon,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Agents Available',
    value: '10+',
    description: 'Specialized security agents',
    icon: UserGroupIcon,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    label: 'Security Tools',
    value: '25+',
    description: 'Pre-integrated tools',
    icon: ShieldCheckIcon,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    label: 'Uptime SLA',
    value: '99.99%',
    description: 'Enterprise availability',
    icon: ServerIcon,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    label: 'Concurrent Jobs',
    value: '1000+',
    description: 'Parallel executions',
    icon: RocketLaunchIcon,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    label: 'Cost Reduction',
    value: '60%',
    description: 'Average operational savings',
    icon: ChartBarIcon,
    gradient: 'from-indigo-500 to-purple-500',
  },
]

const stats = [
  { label: 'Active Deployments', value: '150+' },
  { label: 'Security Incidents Prevented', value: '10K+' },
  { label: 'Tools Integrated', value: '50+' },
  { label: 'Enterprise Clients', value: '45+' },
]

export function Metrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-secondary-900/5" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
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
          <Badge variant="gradient" className="mb-4">Performance</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise <span className="gradient-text">Metrics</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built for scale, proven in production
          </p>
        </motion.div>

        {/* Key metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.gradient} p-2.5 flex-shrink-0`}>
                    <metric.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold gradient-text">{metric.value}</div>
                    <div className="font-semibold">{metric.label}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{metric.description}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center p-6">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}