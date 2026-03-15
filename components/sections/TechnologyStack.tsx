'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { 
  SiPython, 
  SiFastapi, 
  SiPydantic, 
  SiLangchain, 
  SiHuggingface, 
  SiTensorflow, 
  SiScikitlearn, 
  SiMlflow, 
  SiDocker, 
  SiKubernetes, 
  SiRedis, 
  SiPostgresql, 
  SiRabbitmq, 
  SiPrometheus, 
  SiGrafana,
  SiOpentelemetry
} from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'
import { DiPython } from 'react-icons/di'
import { SiXgboost } from 'react-icons/si' // This is correct
import { SiLoki } from 'react-icons/si'     // This is correct
import { SiJaeger } from 'react-icons/si'   // This is correct

// Fallback icon component
const FallbackIcon = ({ color }: { color: string }) => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="16" height="16" rx="4" fill={color} fillOpacity="0.2" />
    <circle cx="12" cy="12" r="4" fill={color} />
  </svg>
)

const techCategories = [
  {
    title: 'Core Stack',
    icon: '⚡',
    gradient: 'from-red-500 to-orange-500',
    items: [
      { name: 'Python 3.11', icon: DiPython, description: 'Core Language', color: '#3776AB' },
      { name: 'FastAPI', icon: SiFastapi, description: 'Web Framework', color: '#009688' },
      { name: 'Pydantic', icon: SiPydantic, description: 'Data Validation', color: '#E92063' },
      { name: 'TypeScript', icon: TbBrandTypescript, description: 'Frontend', color: '#3178C6' },
    ],
  },
  {
    title: 'AI / Machine Learning',
    icon: '🧠',
    gradient: 'from-purple-500 to-pink-500',
    items: [
      { name: 'LangChain', icon: SiLangchain, description: 'LLM Orchestration', color: '#1C3C3C' },
      { name: 'Transformers', icon: SiHuggingface, description: 'HuggingFace', color: '#FFD21E' },
      { name: 'TensorFlow', icon: SiTensorflow, description: 'Deep Learning', color: '#FF6F00' },
      { name: 'scikit-learn', icon: SiScikitlearn, description: 'Classical ML', color: '#F7931E' },
      { name: 'XGBoost', icon: SiXgboost, description: 'Gradient Boosting', color: '#EC5955' },
      { name: 'MLflow', icon: SiMlflow, description: 'Model Registry', color: '#0194E2' },
    ],
  },
  {
    title: 'Infrastructure',
    icon: '🚀',
    gradient: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Docker', icon: SiDocker, description: 'Container Runtime', color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, description: 'Orchestration', color: '#326CE5' },
      { name: 'Redis', icon: SiRedis, description: 'Caching', color: '#DC382D' },
      { name: 'PostgreSQL', icon: SiPostgresql, description: 'Database', color: '#336791' },
      { name: 'RabbitMQ', icon: SiRabbitmq, description: 'Message Queue', color: '#FF6600' },
    ],
  },
  {
    title: 'Observability',
    icon: '📊',
    gradient: 'from-green-500 to-emerald-500',
    items: [
      { name: 'Prometheus', icon: SiPrometheus, description: 'Metrics', color: '#E6522C' },
      { name: 'Grafana', icon: SiGrafana, description: 'Visualization', color: '#F46800' },
      { name: 'Loki', icon: SiLoki, description: 'Logging', color: '#7A8C9E' },
      { name: 'Jaeger', icon: SiJaeger, description: 'Tracing', color: '#60B0E4' },
      { name: 'OpenTelemetry', icon: SiOpentelemetry, description: 'Instrumentation', color: '#4A5C6B' },
    ],
  },
]

export function TechnologyStack() {
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

  // Safe icon renderer
  const renderIcon = (Icon: any, color: string, name: string) => {
    try {
      // Check if Icon is a valid component
      if (Icon && (typeof Icon === 'object' || typeof Icon === 'function')) {
        return <Icon className="w-8 h-8 mb-2" style={{ color }} />
      }
      // Fallback for invalid icon
      return <FallbackIcon color={color} />
    } catch (error) {
      console.warn(`Failed to render icon for ${name}:`, error)
      return <FallbackIcon color={color} />
    }
  }

  return (
    <section id="technology" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-orange-50/30 dark:from-red-950/20 dark:to-orange-950/20" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(239,68,68,0.1) 1px, transparent 0)',
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
          <Badge variant="primary" className="mb-4">Tech Stack</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built with <span className="gradient-text">Cutting-Edge</span> Technology
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade tools and frameworks powering the future of security automation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {techCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`text-3xl`}>{category.icon}</div>
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
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                    <div className="relative p-4 bg-white/50 dark:bg-dark-200/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl hover:border-red-500/50 transition-all duration-300">
                      <div className="flex flex-col items-center text-center">
                        {/* Safely render icon with fallback */}
                        {renderIcon(tech.icon, tech.color, tech.name)}
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
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10" />
      </Container>
    </section>
  )
}