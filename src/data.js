// ─────────────────────────────────────────────
//  SITE DATA  –  edit everything marked ← here
// ─────────────────────────────────────────────

export const profile = {
  name: 'Your Name',              // ← your full name
  tagline: 'Tech Repair · Dev · Cybersecurity',
  role: 'IT Specialist & Security Enthusiast',  // ← shown under name in sidebar
  avatar: '',                     // ← path to your photo, e.g. '/photo.jpg'
  bio: `Write a short personal bio here. Mention what you do, what drives you,
and what kind of work or opportunities you're looking for.
Keep it direct and genuine — a few sentences is perfect.`,  // ← your bio

  contact: {
    email: 'you@example.com',     // ← replace
    phone: '+XX XXX XXX XXXX',    // ← replace or set to '' to hide
    location: 'City, Country',    // ← replace
    website: 'yourdomain.com',    // ← replace or set to '' to hide
  },

  social: [
    { label: 'LinkedIn',  href: 'https://linkedin.com/in/yourprofile',  icon: 'linkedin'  },  // ← replace href
    { label: 'GitHub',    href: 'https://github.com/yourusername',       icon: 'github'    },  // ← replace href
    { label: 'Instagram', href: 'https://instagram.com/yourprofile',     icon: 'instagram' },  // ← replace href
    { label: 'Business',  href: 'https://yourbusiness.com',              icon: 'briefcase' },  // ← replace href
    // Add more: { label: 'HTB', href: 'https://app.hackthebox.com/profile/...', icon: 'terminal' },
  ],

  cvFile: '/cv.pdf',  // ← place cv.pdf in /public folder
}

export const services = [
  {
    icon: '🔧',
    title: 'Hardware Repair',
    desc: 'Diagnosing and repairing computers, laptops, and smartphones. Component-level troubleshooting.',
  },
  {
    icon: '💻',
    title: 'Development',
    desc: 'Building tools, scripts, and applications across multiple languages.',
  },
  {
    icon: '🔐',
    title: 'Cybersecurity',
    desc: 'Actively learning offensive & defensive security through Hack The Box labs and CTFs.',
  },
  {
    icon: '🖥️',
    title: 'Self-Hosting',
    desc: 'Running home lab infrastructure and self-hosted services on Proxmox.',
  },
]

export const experience = [
  // ← replace with your real experience
  {
    date: 'Jan 2023 — Present',
    title: 'Job Title',
    org: 'Company / Freelance',
    desc: 'Brief description of your role and key achievements.',
  },
  {
    date: '2020 — 2022',
    title: 'Previous Role',
    org: 'Previous Company',
    desc: 'Brief description of responsibilities and impact.',
  },
]

export const education = [
  // ← replace with your real education
  {
    date: 'Year — Year',
    title: 'Degree / Certification',
    org: 'Institution Name',
    desc: '',
  },
  {
    date: '2025 — Ongoing',
    title: 'Hack The Box',
    org: 'Self-study · Cybersecurity',
    desc: 'Penetration testing labs, CTF challenges, and security fundamentals.',
  },
]

export const skills = [
  // ← adjust names and level (0–100)
  { name: 'Hardware Repair',    level: 90, label: 'Expert'       },
  { name: 'Linux / CLI',        level: 75, label: 'Advanced'     },
  { name: 'Python',             level: 60, label: 'Intermediate' },
  { name: 'Networking',         level: 65, label: 'Intermediate' },
  { name: 'Web (HTML/CSS/JS)',  level: 60, label: 'Intermediate' },
  { name: 'Docker / Proxmox',   level: 60, label: 'Intermediate' },
  { name: 'Cybersecurity / HTB',level: 45, label: 'Learning'     },
]

// Portfolio filter categories must match data-cat values below
export const filterCats = ['All', 'Security', 'Dev', 'Home Lab']

export const projects = [
  // ← replace with your real projects
  {
    cat: 'Security',
    icon: '🔐',
    // image: '/projects/htb.png',  // ← optional: uncomment and add image to /public
    title: 'HTB Machine Write-up',
    desc: 'Walkthrough of a retired Hack The Box machine — recon, exploitation, privilege escalation.',
    href: '#',  // ← link to your write-up or repo
  },
  {
    cat: 'Dev',
    icon: '💻',
    title: 'Project Name',        // ← replace
    desc: 'Short description of what this does and the tech stack used.',
    href: '#',
  },
  {
    cat: 'Home Lab',
    icon: '🌍',
    title: 'TERRA LIVE Map',
    desc: 'Self-hosted global intelligence map with live flight & satellite tracking on Cesium.js.',
    href: '#',
  },
  {
    cat: 'Dev',
    icon: '⚙️',
    title: 'Another Project',     // ← replace
    desc: 'What it does, why you built it, what you learned.',
    href: '#',
  },
]
