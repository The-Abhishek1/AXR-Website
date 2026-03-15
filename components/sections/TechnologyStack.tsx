'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { 
  SiPython, 
  SiFastapi, 
  SiDocker, 
  SiKubernetes, 
  SiRedis, 
  SiPostgresql, 
  SiPrometheus, 
  SiGrafana,
  SiTensorflow
} from 'react-icons/si'
import { DiPython } from 'react-icons/di'
import { TbBrandTypescript } from 'react-icons/tb'

// Simple emoji map for icons that don't exist in react-icons/si
const emojiMap: Record<string, string> = {
  'Pydantic': '✅',
  'LangChain': '🔗',
  'HuggingFace': '🤗',
  'XGBoost': '📈',
  'MLflow': '📉',
  'RabbitMQ': '🐇',
  'Loki': '📋',
  'Jaeger': '🔍',
  'OpenTelemetry': '📡',
  'scikit-learn': '📊',
}

const techCategories = [
  {
    title: 'Core Stack',
    icon: '⚡',
    gradient: 'from-red-500 to-orange-500',
    items: [
      { name: 'Python 3.11', icon: DiPython, description: 'Core Language', color: '#3776AB', useIcon: true },
      { name: 'FastAPI', icon: SiFastapi, description: 'Web Framework', color: '#009688', useIcon: true },
      { name: 'Pydantic', emoji: '✅', description: 'Data Validation', color: '#E92063', useIcon: false },
      { name: 'TypeScript', icon: TbBrandTypescript, description: 'Frontend', color: '#3178C6', useIcon: true },
    ],
  },
  {
    title: 'AI / Machine Learning',
    icon: '🧠',
    gradient: 'from-purple-500 to-pink-500',
    items: [
      { name: 'LangChain', emoji: '🔗', description: 'LLM Orchestration', color: '#1C3C3C', useIcon: false },
      { name: 'Transformers', emoji: '🤗', description: 'HuggingFace', color: '#FFD21E', useIcon: false },
      { name: 'TensorFlow', icon: SiTensorflow, description: 'Deep Learning', color: '#FF6F00', useIcon: true },
      { name: 'scikit-learn', emoji: '📊', description: 'Classical ML', color: '#F7931E', useIcon: false },
      { name: 'XGBoost', emoji: '📈', description: 'Gradient Boosting', color: '#EC5955', useIcon: false },
      { name: 'MLflow', emoji: '📉', description: 'Model Registry', color: '#0194E2', useIcon: false },
    ],
  },
  {
    title: 'Infrastructure',
    icon: '🚀',
    gradient: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Docker', icon: SiDocker, description: 'Container Runtime', color: '#2496ED', useIcon: true },
      { name: 'Kubernetes', icon: SiKubernetes, description: 'Orchestration', color: '#326CE5', useIcon: true },
      { name: 'Redis', icon: SiRedis, description: 'Caching', color: '#DC382D', useIcon: true },
      { name: 'PostgreSQL', icon: SiPostgresql, description: 'Database', color: '#336791', useIcon: true },
      { name: 'RabbitMQ', emoji: '🐇', description: 'Message Queue', color: '#FF6600', useIcon: false },
    ],
  },
  {
    title: 'Observability',
    icon: '📊',
    gradient: 'from-green-500 to-emerald-500',
    items: [
      { name: 'Prometheus', icon: SiPrometheus, description: 'Metrics', color: '#E6522C', useIcon: true },
      { name: 'Grafana', icon: SiGrafana, description: 'Visualization', color: '#F46800', useIcon: true },
      { name: 'Loki', emoji: '📋', description: 'Logging', color: '#7A8C9E', useIcon: false },
      { name: 'Jaeger', emoji: '🔍', description: 'Tracing', color: '#60B0E4', useIcon: false },
      { name: 'OpenTelemetry', emoji: '📡', description: 'Instrumentation', color: '#4A5C6B', useIcon: false },
    ],
  },
]

export function TechnologyStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-orange-50/30 dark:from-red-950/20 dark:to-orange-950/20" />
      
      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">Tech Stack</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built with <span className="gradient-text">Cutting-Edge</span> Technology
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade tools powering security automation
          </p>
        </motion.div>

        <div className="space-y-16">
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
                <div className={`h-1 flex-1 bg-gradient-to-r ${category.gradient} rounded-full opacity-50`} />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
                    <div className="relative p-4 bg-white/50 dark:bg-dark-200/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl hover:border-red-500/50 transition-all">
                      <div className="flex flex-col items-center text-center">
                        {tech.useIcon && tech.icon ? (
                          <tech.icon className="w-8 h-8 mb-2" style={{ color: tech.color }} />
                        ) : (
                          <span className="text-3xl mb-2">{tech.emoji}</span>
                        )}
                        <h4 className="font-medium text-sm">{tech.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}