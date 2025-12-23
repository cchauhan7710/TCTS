import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {title:'Website Development', desc:'Fast, responsive websites designed for conversions.'},
  {title:'Web Apps & Dashboards', desc:'Feature-rich admin panels and internal tools.'},
  {title:'AI Chatbots & Automation', desc:'Smart assistants and automated workflows.'},
  {title:'Hosting & Domain Setup', desc:'Hassle-free deploys and DNS management.'}
]

export default function Services(){
  return (
    <section id="services">
      <h2 className="text-2xl font-semibold mb-6">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s,i)=> (
          <motion.div key={s.title} whileInView={{y:[36,0], opacity:[0,1]}} viewport={{once:true}} transition={{delay:i*0.12}} className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md dark:shadow-none hover:shadow-xl transform-gpu hover:-translate-y-1">
            <div className="h-14 w-14 bg-gradient-to-br from-indigo-100 to-cyan-50 dark:from-slate-700 dark:to-slate-700 rounded-xl flex items-center justify-center mb-4 text-xl">⚡</div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{s.title}</h3>
            <p className="mt-2 text-slate-500 dark:text-slate-300 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
