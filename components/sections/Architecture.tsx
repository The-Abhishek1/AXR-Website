'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export function Architecture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const executionFlow = [
    { name: 'User Request', color: 'from-blue-500 to-cyan-500' },
    { name: 'API (FastAPI)', color: 'from-green-500 to-emerald-500' },
    { name: 'Hybrid Scheduler', color: 'from-yellow-500 to-amber-500' },
    { name: 'Planner Agent (LLM)', color: 'from-purple-500 to-pink-500' },
    { name: 'Verifier Agent', color: 'from-red-500 to-orange-500' },
    { name: 'Agent Orchestrator', color: 'from-indigo-500 to-purple-500' },
    { name: 'Domain Agents', color: 'from-blue-500 to-indigo-500' },
    { name: 'Tool Router', color: 'from-cyan-500 to-blue-500' },
    { name: 'Worker Pool', color: 'from-teal-500 to-green-500' },
    { name: 'Docker Containers', color: 'from-sky-500 to-blue-500' },
    { name: 'Results', color: 'from-emerald-500 to-teal-500' },
  ]

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-dark-300">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">Architecture</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Intelligent <span className="gradient-text">Execution Flow</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            How AXR processes and executes security workflows with precision and reliability
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="relative max-w-4xl mx-auto">
          {executionFlow.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < executionFlow.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600" />
              )}
              
              <Card className="mb-4 relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {index === 0 && 'Initial security workflow request'}
                      {index === 1 && 'REST API endpoint handling'}
                      {index === 2 && 'Smart task scheduling and prioritization'}
                      {index === 3 && 'LLM-based plan generation'}
                      {index === 4 && 'Security and compliance validation'}
                      {index === 5 && 'Multi-agent coordination'}
                      {index === 6 && 'Specialized domain agents'}
                      {index === 7 && 'Intelligent tool selection'}
                      {index === 8 && 'Dynamic worker allocation'}
                      {index === 9 && 'Isolated execution environment'}
                      {index === 10 && 'Aggregated results and insights'}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Container Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Container Architecture</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-500/30">
              <div className="text-center mb-4">
                <Badge variant="primary">API Container</Badge>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  FastAPI Core
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Planner Agent (LLM)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Scheduler
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Tool Router
                </li>
              </ul>
              <div className="mt-4 text-xs text-gray-500">Size: ~200-300MB</div>
            </Card>

            <Card className="border-2 border-purple-500/30">
              <div className="text-center mb-4">
                <Badge variant="secondary">ML Worker Container</Badge>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  TensorFlow
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  XGBoost
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  scikit-learn
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  MLflow
                </li>
              </ul>
              <div className="mt-4 text-xs text-gray-500">Size: 3-4GB</div>
            </Card>

            <Card className="border-2 border-green-500/30">
              <div className="text-center mb-4">
                <Badge variant="success">Security Tool Workers</Badge>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  nmap
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  nuclei
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  sqlmap
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  gobuster
                </li>
              </ul>
              <div className="mt-4 text-xs text-gray-500">Size: ~200MB</div>
            </Card>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}