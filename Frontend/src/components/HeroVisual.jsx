import { motion } from 'framer-motion'
import { Braces, Database, GitBranch, Server } from 'lucide-react'

const nodes = [
  { icon: Braces, label: 'API', className: 'left-4 top-8 text-emerald-300' },
  { icon: Server, label: 'Service', className: 'right-6 top-20 text-cyan-300' },
  { icon: Database, label: 'MySQL', className: 'bottom-12 left-8 text-amber-300' },
  { icon: GitBranch, label: 'Git', className: 'bottom-6 right-10 text-rose-300' },
]

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-label="Animated developer workflow visual">
      <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-emerald-950/30 backdrop-blur-md" />
      <motion.div
        className="absolute inset-14 rounded-3xl border border-emerald-300/20 bg-black/70 p-5 shadow-[0_0_55px_rgba(16,185,129,0.16)]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
        </div>
        <div className="mt-6 space-y-3 font-mono text-xs text-slate-300 sm:text-sm">
          <p><span className="text-emerald-300">const</span> developer = &#123;</p>
          <p className="pl-4">role: <span className="text-cyan-200">'Software Developer'</span>,</p>
          <p className="pl-4">focus: <span className="text-cyan-200">'scalable systems'</span>,</p>
          <p className="pl-4">values: [<span className="text-cyan-200">'clean code'</span>, <span className="text-cyan-200">'reliability'</span>]</p>
          <p>&#125;</p>
        </div>
        <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.span
            className="block h-full rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-amber-200"
            animate={{ width: ['38%', '86%', '52%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
      {nodes?.map(({ icon: Icon, label, className }) => (
        <motion.div
          key={label}
          className={`absolute flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium shadow-xl backdrop-blur-md ${className}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: label.length * 0.12 }}
        >
          <Icon size={16} aria-hidden="true" />
          <span>{label}</span>
        </motion.div>
      ))}
    </div>
  )
}
