import { profile, services } from '../data'

function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-3">
      <span className="w-1 h-5 bg-amber-400 rounded-full inline-block" />
      {children}
    </h2>
  )
}

export default function About() {
  return (
    <div className="animate-fadeUp fill-mode-both">
      {/* Bio */}
      <p className="text-sm leading-relaxed text-slate-400 mb-8 max-w-xl whitespace-pre-line">
        {profile.bio}
      </p>

      {/* Services */}
      <SectionTitle>What I Do</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-slate-800/50 border border-slate-700/60 rounded-lg p-5 hover:border-amber-400/30 hover:bg-slate-800 transition-all duration-200 group"
          >
            <div className="text-2xl mb-3">{s.icon}</div>
            <h3 className="font-display font-semibold text-white text-sm mb-1.5 group-hover:text-amber-300 transition-colors">
              {s.title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
