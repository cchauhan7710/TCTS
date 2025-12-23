import React, {useState} from 'react'

const faqs = [
  {q:'Are you a student team?', a:'Yes — we are a student-led studio focused on real-world projects.'},
  {q:'How long does delivery take?', a:'Typical websites take 1–3 weeks depending on scope.'},
  {q:'Do you provide maintenance?', a:'Yes — maintenance and support are available.'},
  {q:'Is payment secure?', a:'We use secure payment channels and transparent invoicing.'}
]

export default function FAQ(){
  const [open, setOpen] = useState(null)
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
      <div className="space-y-3">
        {faqs.map((f,i)=> (
          <div key={f.q} className="bg-white dark:bg-slate-800 rounded-md shadow dark:shadow-none p-4">
            <button className="w-full text-left flex justify-between items-center" onClick={()=> setOpen(open===i?null:i)}>
              <span className="font-medium text-slate-900 dark:text-slate-100">{f.q}</span>
              <span className="text-slate-400 dark:text-slate-300">{open===i?'-':'+'}</span>
            </button>
            {open===i && <div className="mt-3 text-slate-600 dark:text-slate-300">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}
