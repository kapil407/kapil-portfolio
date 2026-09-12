import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export function MotionSection({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 py-20 sm:py-24 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.section>
  )
}
