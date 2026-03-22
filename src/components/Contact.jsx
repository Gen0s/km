import { useState } from 'react'
import { profile } from '../data'
import {
  IconEmail, IconLocation, IconGlobe, IconLinkedin, IconGithub, IconSend
} from './Icons'

function InfoItem({ icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 flex-shrink-0 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-amber-400 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">{label}</div>
        <div className="text-sm text-slate-300">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  const { contact, social } = profile
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  /*
    To make the form actually send emails on GitHub Pages, use Formspree (free):
    1. Sign up at formspree.io → create a form → copy your form ID
    2. Replace the action URL below with: https://formspree.io/f/YOUR_FORM_ID
    3. The fetch below will POST to Formspree and redirect on success
  */
  const submit = async e => {
    e.preventDefault()
    // Uncomment and configure when you have a Formspree ID:
    // const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })
    // if (res.ok) setSent(true)
    setSent(true) // remove this line once Formspree is configured
  }

  const li = social.find(s => s.icon === 'linkedin')
  const gh = social.find(s => s.icon === 'github')

  const inputCls = `w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-amber-400 transition-colors font-body`

  return (
    <div className="animate-fadeUp fill-mode-both">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

        {/* Info */}
        <div>
          <h2 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-3">
            <span className="w-1 h-5 bg-amber-400 rounded-full inline-block" />
            Get In Touch
          </h2>
          <div className="flex flex-col gap-4">
            <InfoItem label="Email" icon={<IconEmail size={14} />}>
              <a href={`mailto:${contact.email}`} className="hover:text-amber-400 transition-colors break-all">
                {contact.email}
              </a>
            </InfoItem>
            <InfoItem label="Location" icon={<IconLocation size={14} />}>
              {contact.location}
            </InfoItem>
            {contact.website && (
              <InfoItem label="Website" icon={<IconGlobe size={14} />}>
                <a href={`https://${contact.website}`} target="_blank" rel="noopener" className="hover:text-amber-400 transition-colors">
                  {contact.website}
                </a>
              </InfoItem>
            )}
            {li && (
              <InfoItem label="LinkedIn" icon={<IconLinkedin size={14} />}>
                <a href={li.href} target="_blank" rel="noopener" className="hover:text-amber-400 transition-colors break-all">
                  {li.href.replace('https://', '')}
                </a>
              </InfoItem>
            )}
            {gh && (
              <InfoItem label="GitHub" icon={<IconGithub size={14} />}>
                <a href={gh.href} target="_blank" rel="noopener" className="hover:text-amber-400 transition-colors break-all">
                  {gh.href.replace('https://', '')}
                </a>
              </InfoItem>
            )}
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8 gap-3">
              <div className="text-3xl">✅</div>
              <p className="font-display text-white font-semibold">Message sent!</p>
              <p className="text-xs text-slate-500">I'll get back to you soon.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 text-xs text-amber-400 hover:text-amber-300 underline underline-offset-2"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500">Name</label>
                  <input name="name" value={form.name} onChange={handle} required
                    className={inputCls} placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handle} required
                    className={inputCls} placeholder="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-widest text-slate-500">Subject</label>
                <input name="subject" value={form.subject} onChange={handle}
                  className={inputCls} placeholder="What's this about?" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-widest text-slate-500">Message</label>
                <textarea name="message" value={form.message} onChange={handle} required rows={5}
                  className={`${inputCls} resize-none`} placeholder="Your message..." />
              </div>
              <button
                type="submit"
                className="self-start inline-flex items-center gap-2 mt-1 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-widest rounded transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <IconSend size={12} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
