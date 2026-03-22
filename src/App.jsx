import { useState } from 'react'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const TABS = [
  { id: 'about',     label: 'About'    },
  { id: 'resume',    label: 'Résumé'   },
  { id: 'portfolio', label: 'Portfolio'},
  { id: 'contact',   label: 'Contact'  },
]

const PANELS = {
  about:     <About />,
  resume:    <Resume />,
  portfolio: <Portfolio />,
  contact:   <Contact />,
}

export default function App() {
  const [tab, setTab] = useState('about')

  return (
    <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[270px_1fr] gap-5 animate-fadeIn fill-mode-both">

        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col min-h-[600px]">

          {/* Tab bar */}
          <nav className="flex border-b border-slate-800 px-6 overflow-x-auto scrollbar-hide">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`text-[11px] uppercase tracking-widest py-4 px-4 border-b-2 whitespace-nowrap transition-colors duration-200 -mb-px ${
                  tab === t.id
                    ? 'border-amber-400 text-amber-400'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>

          {/* Panel */}
          <div className="flex-1 overflow-y-auto p-7">
            {/* key forces remount/re-animation on tab switch */}
            <div key={tab}>
              {PANELS[tab]}
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
