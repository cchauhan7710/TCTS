import React from 'react'
import { motion } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import OurWorks from './components/OurWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Pricing from './components/Pricing'
import Approach from './components/Approach'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

export default function App(){
  const sectionMotion = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <div className="font-sans text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-900 antialiased">
      <Nav />
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
        <Hero />

        <main className="space-y-28">
          {[Services, OurWorks, WhyChooseUs, Pricing, Approach, FAQ, CTA].map((Section, i) => (
            <motion.section
              key={Section.name}
              className="px-6 md:px-16 lg:px-28"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.24 }}
              transition={{ delay: i * 0.05 }}
              variants={sectionMotion}
            >
              <Section />
            </motion.section>
          ))}
        </main>
      </motion.div>
    </div>
  )
}
