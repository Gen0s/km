import { useState } from 'react'
import { projects, filterCats } from '../data'

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = projects.filter(p =>
    active === 'All' || p.cat === active
  )

  return (
    <div className="animate-fadeUp fill-mode-both">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterCats.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-[11px] uppercase tracking-widest px-3 py-1.5 rounded border transition-all duration-200 ${
              active === cat
                ? 'bg-amber-500 text-slate-900 border-amber-500 font-bold'
                : 'bg-transparent text-slate-500 border-slate-700 hover:border-slate-500 hover:text-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((p, i) => (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 border border-slate-700/60 rounded-lg overflow-hidden hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-200 flex flex-col"
          >
            {/* Thumbnail */}
            <div className="aspect-video bg-slate-800 flex items-center justify-center text-4xl border-b border-slate-700/60 overflow-hidden">
              {p.image
                ? <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                : <span>{p.icon}</span>
              }
            </div>
            {/* Info */}
            <div className="p-4">
              <div className="text-[10px] uppercase tracking-widest text-amber-400 mb-1">{p.cat}</div>
              <div className="font-display font-semibold text-white text-sm mb-1.5 group-hover:text-amber-300 transition-colors">
                {p.title}
              </div>
              <div className="text-xs text-slate-500 leading-relaxed">{p.desc}</div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-slate-600 py-8 text-center">No projects in this category yet.</p>
      )}
    </div>
  )
}
