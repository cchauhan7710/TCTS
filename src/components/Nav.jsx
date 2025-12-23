import React from 'react'
import useDarkMode from '../hooks/useDarkMode'

export default function Nav(){
  const [theme, toggle] = useDarkMode()

  return (
    <nav className="w-full py-6 px-6 md:px-16 lg:px-28 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold">TC</div>
        <div className="font-semibold text-slate-900 dark:text-slate-100">The Chosen Tech Studio</div>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
        <a href="#services" className="link-underline">Services</a>
        <a href="#works" className="link-underline">Work</a>
        <a href="#contact" className="link-underline">Contact</a>
        <button onClick={toggle} aria-label="Toggle dark mode" className="ml-4 p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
