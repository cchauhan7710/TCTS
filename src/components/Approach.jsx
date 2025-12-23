import React from 'react'

const steps = ['Discovery & Planning','Design & Approval','Development & Testing','Delivery & Support']

export default function Approach(){
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Our Approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((s,i)=> (
          <div key={s} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow dark:shadow-none hover:scale-[1.01] transition">
            <div className="text-sm text-slate-400 dark:text-slate-400">Step {i+1}</div>
            <h3 className="mt-2 font-medium text-slate-900 dark:text-slate-100">{s}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
