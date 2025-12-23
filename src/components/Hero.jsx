import React from 'react'
import { motion } from 'framer-motion'

const title = {
  hidden: { opacity:0, y:18 },
  show: { opacity:1, y:0, transition:{ duration:0.7 } }
}

export default function Hero(){
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      <div className="blob pointer-events-none" aria-hidden />
      <div className="mx-auto px-6 md:px-16 lg:px-28 z-10" style={{maxWidth:'var(--container)'}}>
        <motion.div initial="hidden" animate="show" variants={title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 tracking-wide">Student-led • Affordable • Professional</p>
            <h1 className="hero-title text-slate-900 dark:text-slate-50">Crafting Digital Experiences<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-400">That Convert & Inspire</span></h1>

            <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg max-w-2xl">We design fast, modern, and affordable websites, web apps and AI tools that help small businesses and students get results.</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Start Free Consultation</a>
              <a href="#works" className="btn-outline">See Real Projects</a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="rounded-xl shadow-lg overflow-hidden tilt-card" style={{width:360}}>
              <img src="/shot1.svg" alt="Project screenshot" className="w-full h-auto block" />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
