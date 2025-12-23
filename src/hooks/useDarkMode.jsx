import { useState, useEffect } from 'react'

function getInitialTheme(){
  try{
    const stored = localStorage.getItem('theme')
    if(stored) return stored
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }catch(e){ return 'light' }
}

export default function useDarkMode(){
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(()=>{
    const root = document.documentElement
    if(theme === 'dark'){
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try{ localStorage.setItem('theme', theme) }catch(e){}
  }, [theme])

  const toggle = ()=> setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  return [theme, toggle]
}
