import React from 'react'
import { motion } from 'framer-motion'

const points = [
  'Affordable student pricing',
  'On-time delivery',
  'Transparent workflow',
  'AI-powered client handling',
  'Quality-focused development'
]

export default function WhyChooseUs(){
  return (
    <section className="relative">
      <div className="md:flex md:gap-12">
        <div className="md:w-1/3 sticky top-28">
          <h2 className="text-2xl font-semibold">Why Choose Us</h2>
          <p className="text-slate-600 mt-4">Student-driven, quality-focused, and affordable solutions.</p>
        </div>

        <div className="md:flex-1 mt-8 md:mt-0 grid gap-6">
          {points.map((p,i)=> (
            <motion.div key={p} initial={{x:40, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}} transition={{delay:i*0.08}} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow dark:shadow-none">
              <h3 className="font-medium text-slate-900 dark:text-slate-100">{p}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-300 mt-2">We make sure {p.toLowerCase()} is part of every project.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
