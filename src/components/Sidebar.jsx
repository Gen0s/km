import { useState } from 'react'
import { profile } from '../data'
import {
  IconEmail, IconPhone, IconLocation, IconGlobe, SocialIcon, IconUser
} from './Icons'

function ContactItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 flex-shrink-0 bg-slate-800 border border-slate-700 rounded flex items-center justify-center text-amber-400">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">{label}</div>
        <div className="text-sm text-slate-300">{children}</div>
      </div>
    </div>
  )
}

export default function Sidebar() {
  const [contactsOpen, setContactsOpen] = useState(false)
  const { name, role, avatar, contact, social } = profile

  return (
    <aside className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col animate-fadeIn fill-mode-both">

      {/* Top: avatar + name */}
      <div className="relative px-7 pt-8 pb-6 border-b border-slate-800 grid-texture">
        {/* amber top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-60" />

        <div className="relative w-24 h-24 mb-4">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-2 border-slate-700 ring-2 ring-amber-500/20 ring-offset-2 ring-offset-slate-900">
            {avatar ? (
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 gap-1">
                <IconUser size={34} />
                <span className="text-[9px] uppercase tracking-widest opacity-60">Photo</span>
              </div>
            )}
          </div>
          {/* amber dot */}
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-900" />
        </div>

        <h1 className="font-display text-xl font-bold text-white leading-tight mb-1">
          {name}
        </h1>
        <span className="inline-block text-[11px] tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded">
          {role}
        </span>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setContactsOpen(o => !o)}
        className="md:hidden mx-6 mt-4 text-[11px] uppercase tracking-widest text-slate-400 border border-slate-700 rounded px-3 py-2 hover:border-amber-400 hover:text-amber-400 transition-colors"
      >
        {contactsOpen ? 'Hide Contacts ▴' : 'Show Contacts ▾'}
      </button>

      {/* Contact info */}
      <div className={`px-7 py-5 flex flex-col gap-4 border-b border-slate-800 ${contactsOpen ? 'flex' : 'hidden md:flex'}`}>
        <ContactItem label="Email" icon={<IconEmail size={13} />}>
          <a href={`mailto:${contact.email}`} className="hover:text-amber-400 transition-colors break-all">
            {contact.email}
          </a>
        </ContactItem>
        {contact.phone && (
          <ContactItem label="Phone" icon={<IconPhone size={13} />}>
            <a href={`tel:${contact.phone}`} className="hover:text-amber-400 transition-colors">
              {contact.phone}
            </a>
          </ContactItem>
        )}
        <ContactItem label="Location" icon={<IconLocation size={13} />}>
          {contact.location}
        </ContactItem>
        {contact.website && (
          <ContactItem label="Website" icon={<IconGlobe size={13} />}>
            <a href={`https://${contact.website}`} target="_blank" rel="noopener" className="hover:text-amber-400 transition-colors">
              {contact.website}
            </a>
          </ContactItem>
        )}
      </div>

      {/* Social icons */}
      <div className="mt-auto px-7 py-5 flex flex-wrap gap-2">
        {social.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            className="w-9 h-9 flex items-center justify-center border border-slate-700 rounded text-slate-500 hover:border-amber-400 hover:text-amber-400 hover:bg-amber-400/5 transition-all duration-200"
          >
            <SocialIcon name={s.icon} size={15} />
          </a>
        ))}
      </div>
    </aside>
  )
}
