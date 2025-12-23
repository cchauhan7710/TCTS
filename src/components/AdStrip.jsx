import React from 'react'
import { motion } from 'framer-motion'

export default function AdStrip(){
  return (
    <motion.div
      className="px-6 md:px-16 lg:px-28 py-3"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-indigo-100 dark:border-slate-700 bg-gradient-to-r from-indigo-50 via-white to-cyan-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 shadow-sm">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{background:'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 35%), radial-gradient(circle at 80% 30%, rgba(6,182,212,0.15), transparent 38%)'}} />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-600 text-white shadow-sm">Limited</span>
            <p className="text-sm md:text-base text-slate-800 dark:text-slate-100 font-semibold">Early-2026 launch offer: we build the first draft in 5 days with two iterations included.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
            <span className="hidden md:inline text-slate-400">•</span>
            <span>No advance needed for student-led projects</span>
            <a href="#contact" className="btn-outline text-indigo-700 dark:text-indigo-200 border-indigo-100 dark:border-slate-600 hover:-translate-y-0.5">Claim the slot →</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

