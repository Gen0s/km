import { experience, education, skills, profile } from '../data'
import { IconDownload } from './Icons'

function SectionTitle({ children }) {
  return (
    <h3 className="text-[11px] uppercase tracking-[0.2em] text-amber-400 font-semibold mb-4 pb-2 border-b border-slate-700/60">
      {children}
    </h3>
  )
}

function TimelineItem({ date, title, org, desc }) {
  return (
    <div className="relative pl-4 border-l border-slate-700">
      <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-slate-900" />
      <div className="text-[11px] text-amber-400/80 tracking-wide mb-1">{date}</div>
      <div className="font-display font-semibold text-white text-sm leading-tight mb-0.5">{title}</div>
      <div className="text-xs text-slate-500 italic mb-1">{org}</div>
      {desc && <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>}
    </div>
  )
}

function SkillBar({ name, level, label }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-slate-300 mb-1.5">
        <span>{name}</span>
        <span className="text-slate-500 text-[11px]">{label}</span>
      </div>
      <div className="h-[3px] bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill bg-gradient-to-r from-amber-600 to-amber-400"
          style={{ '--skill-width': `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <div className="animate-fadeUp fill-mode-both">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

        {/* Left col */}
        <div className="flex flex-col gap-7">
          <div>
            <SectionTitle>Experience</SectionTitle>
            <div className="flex flex-col gap-5">
              {experience.map((e, i) => <TimelineItem key={i} {...e} />)}
            </div>
          </div>
          <div>
            <SectionTitle>Education</SectionTitle>
            <div className="flex flex-col gap-5">
              {education.map((e, i) => <TimelineItem key={i} {...e} />)}
            </div>
          </div>
        </div>

        {/* Right col */}
        <div>
          <SectionTitle>Skills</SectionTitle>
          <div className="flex flex-col gap-4">
            {skills.map((s, i) => <SkillBar key={i} {...s} />)}
          </div>
        </div>
      </div>

      {/* Download */}
      <a
        href={profile.cvFile}
        download
        className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-widest rounded transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
      >
        <IconDownload size={13} />
        Download CV
      </a>
    </div>
  )
}
