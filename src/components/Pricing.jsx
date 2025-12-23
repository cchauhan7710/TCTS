import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  {
    title: 'Launch Fast',
    tagline: '1–3 pages, copy + launch support',
    benefits: ['Ready in days', 'Responsive & SEO basics', '1 round of edits included']
  },
  {
    title: 'Grow Online',
    tagline: 'Multi-section site with CMS/Blog',
    benefits: ['Lead forms + tracking', 'CMS for easy updates', 'Performance tuned']
  },
  {
    title: 'Custom Experience',
    tagline: 'Web app or tailored flow',
    benefits: ['Feature planning', 'Scalable tech stack', 'Ongoing optimization']
  }
]

export default function Pricing(){
  return (
    <section id="pricing">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Budget-friendly websites that still feel premium</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">Tell us your goals and budget — we’ll shape the scope to fit, with transparent timelines and no surprise add-ons.</p>
        </div>
        <a href="#contact" className="btn-primary">Get a tailored plan →</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier,i)=> (
          <motion.div
            key={tier.title}
            initial={{y:24, opacity:0}}
            whileInView={{y:0, opacity:1}}
            viewport={{once:true, amount:0.3}}
            transition={{delay:i*0.08, duration:0.6, ease:[0.22,1,0.36,1]}}
            className="pricing-card tilt-card p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md dark:shadow-none border border-slate-100 dark:border-slate-700 card"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{tier.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">{tier.tagline}</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-slate-700 dark:text-indigo-200">Budget-first</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-200">
              {tier.benefits.map(item=> (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-indigo-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-sm text-slate-500 dark:text-slate-300">We align scope to your budget and confirm everything before we start.</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-indigo-500/10 via-cyan-400/10 to-transparent border border-indigo-100 dark:border-slate-700">
        <p className="text-slate-800 dark:text-slate-100 font-semibold">Need a budget-friendly site? Share a number, we’ll design the best version of it — and keep you updated at every milestone.</p>
      </div>
    </section>
  )
}
