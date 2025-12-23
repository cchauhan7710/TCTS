import React from 'react'
import { motion } from 'framer-motion'

const works = [
  {title:'Business website', img:'/shot1.svg'},
  {title:'Portfolio website', img:'/shot2.svg'},
  {title:'School / college website', img:'/shot3.svg'},
  {title:'Dashboard / admin panel', img:'/shot4.svg'}
]

export default function OurWorks(){
  return (
    <section id="works">
      <h2 className="text-2xl font-semibold mb-6">Real projects. Real impact.</h2>
      <div className="horizontal-scroll py-6">
        {works.map((w,i)=> (
          <motion.div key={w.title} whileHover={{scale:1.04}} transition={{type:'spring', stiffness:280}} className="min-w-[320px] md:min-w-[420px] bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg dark:shadow-none hover:shadow-2xl transform-gpu">
            <div className="h-48 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-slate-50 dark:bg-slate-700">
              <img src={w.img} alt={w.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{w.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-300 mt-2">Example project showcasing UI, speed and conversions.</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
