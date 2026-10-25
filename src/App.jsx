import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, Sparkle } from './components/Icons'

const navItems = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact']

// Replace these placeholders with Aminul's actual contact details before publishing.
const contactDetails = {
  email: { label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  github: { label: 'GitHub', value: 'github.com/your-username', href: 'https://github.com/your-username' },
  linkedin: { label: 'LinkedIn', value: 'linkedin.com/in/your-username', href: 'https://www.linkedin.com/in/your-username' },
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
      <a className="group inline-flex items-center gap-2 text-sm font-semibold tracking-[-0.03em] text-white" href="#top" aria-label="Aminul Islam — home">
        <span className="grid size-7 place-items-center rounded-full bg-lime-300 text-[11px] font-extrabold text-zinc-950 transition-transform group-hover:rotate-12">A</span>
        AMINUL<span className="text-zinc-500">.ISLAM</span>
      </a>
      <nav className="hidden items-center gap-7 text-sm text-zinc-400 lg:flex" aria-label="Primary navigation">
        {navItems.map((item) => <a key={item} className="transition-colors hover:text-white focus-visible:text-white" href={`#${item.toLowerCase()}`}>{item}</a>)}
      </nav>
      <a className="hidden rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:border-lime-300 hover:bg-lime-300 hover:text-zinc-950 lg:inline-flex" href={contactDetails.email.href}>Let&apos;s talk <ArrowUpRight /></a>
      <button className="grid size-10 place-items-center rounded-full border border-zinc-800 text-white lg:hidden" aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}><Menu /></button>
      {menuOpen && <nav id="mobile-navigation" className="absolute left-6 right-6 top-[72px] rounded-2xl border border-zinc-800 bg-zinc-900 p-3 shadow-2xl lg:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => <a key={item} className="block rounded-xl px-4 py-3 text-sm text-zinc-200 transition hover:bg-zinc-800 hover:text-lime-300" href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
      </nav>}
    </header>
  )
}

function HeroArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden="true">
      <div className="absolute inset-[7%] rounded-full border border-zinc-800/80" />
      <div className="absolute inset-[15%] rounded-full border border-dashed border-zinc-700/80" />
      <div className="absolute inset-[24%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#e5ff62,transparent_27%),radial-gradient(circle_at_68%_75%,#a3e635,transparent_32%),linear-gradient(135deg,#3f3f46,#09090b_68%)] shadow-[0_0_100px_-28px_rgba(190,242,100,.65)]" />
      <div className="absolute left-[33%] top-[27%] size-[14%] rounded-full bg-lime-100 opacity-90 blur-[1px]" />
      <div className="absolute bottom-[28%] right-[24%] size-[19%] rounded-full bg-zinc-950/80 ring-1 ring-white/30" />
      <div className="absolute right-[2%] top-[22%] grid size-12 place-items-center rounded-2xl border border-zinc-700 bg-zinc-900/90 text-lime-300 shadow-xl"><Sparkle /></div>
      <div className="absolute bottom-[9%] left-[1%] rounded-xl border border-zinc-700 bg-zinc-900/95 px-3 py-2 shadow-xl">
        <p className="font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500">Currently</p>
        <p className="mt-0.5 text-xs font-medium text-zinc-100">Building better web</p>
      </div>
    </div>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()
  const fadeUp = { hidden: { opacity: 0, y: reduceMotion ? 0 : 18 }, visible: { opacity: 1, y: 0 } }
  return (
    <main id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(ellipse_at_70%_30%,rgba(163,230,53,.11),transparent_36%)]" />
      <section className="relative mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl items-center gap-12 px-6 pb-14 pt-10 sm:px-10 md:grid-cols-[1.1fr_.9fr] md:pt-4 lg:px-12">
        <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }} className="order-2 md:order-1">
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300"><span className="size-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_3px_rgba(190,242,100,.4)]" /> Available for select projects</motion.p>
          <motion.h1 variants={fadeUp} transition={{ duration: 0.55 }} className="max-w-3xl text-[clamp(3.2rem,8vw,7.4rem)] font-semibold leading-[.91] tracking-[-.075em] text-zinc-100">Designing digital<br /><span className="text-lime-300">experiences</span> that matter.</motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: 0.5 }} className="mt-7 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">I&apos;m Aminul, a frontend, Shopify, and full stack developer turning ambitious ideas into clear, considered digital products.</motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">Explore my work <ArrowDown /></a>
            <a href={contactDetails.email.href} className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-zinc-200 transition hover:text-lime-300">Get in touch <ArrowUpRight /></a>
          </motion.div>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="mt-14 flex items-center gap-5 text-zinc-500">
            <span className="text-xs uppercase tracking-[.16em]">Find me</span><span className="h-px w-8 bg-zinc-700" />
            <a className="transition hover:text-white" href={contactDetails.github.href} aria-label="GitHub"><Github /></a>
            <a className="transition hover:text-white" href={contactDetails.linkedin.href} aria-label="LinkedIn"><Linkedin /></a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: reduceMotion ? 1 : .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .18 }} className="order-1 md:order-2"><HeroArt /></motion.div>
      </section>
    </main>
  )
}

const profileDetails = [
  { label: 'Based in', value: 'Dhaka, Bangladesh' },
  { label: 'Education', value: 'B.Sc. in Computer Science & Engineering, Northern University Bangladesh' },
  { label: 'Focus', value: 'Frontend Development · Shopify Development · Full Stack Development' },
]

function ProfileDetail({ label, value }) {
  return (
    <div className="grid gap-2 border-t border-zinc-800 py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
      <dt className="text-xs font-medium uppercase tracking-[.16em] text-zinc-500">{label}</dt>
      <dd className="max-w-xl text-sm leading-6 text-zinc-300 sm:text-base">{value}</dd>
    </div>
  )
}

function About() {
  const reduceMotion = useReducedMotion()
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0 } }
  const animation = { duration: 0.55, ease: [0.22, 1, 0.36, 1] }

  return (
    <section id="about" className="relative overflow-hidden border-t border-zinc-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-48 top-24 size-96 rounded-full bg-lime-300/[.035] blur-3xl" />
      <motion.div
        className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={reveal} transition={animation} className="grid gap-10 md:grid-cols-[.72fr_1.28fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[.18em] text-lime-300">01 / About</p>
            <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-[.95] tracking-[-.06em] text-zinc-100 sm:text-5xl">Building the web with care and clarity.</h2>
          </div>
          <div className="max-w-2xl pt-1">
            <p className="text-xl leading-8 tracking-[-.025em] text-zinc-200 sm:text-2xl sm:leading-9">I&apos;m Aminul Islam, a developer focused on building thoughtful, reliable, and user-friendly web experiences.</p>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">I value clean code, attention to detail, and practical problem-solving—bringing a strong focus on quality and continuous improvement to every project.</p>
            <p className="mt-6 text-sm font-medium text-lime-300">Most recently: Shopify Developer at A.M. London Fashion Ltd.</p>
          </div>
        </motion.div>

        <motion.div variants={reveal} transition={animation} className="mt-16 grid gap-12 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
          <dl className="border-b border-zinc-800">
            {profileDetails.map((detail) => <ProfileDetail key={detail.label} {...detail} />)}
          </dl>
          <div className="lg:pt-5">
            <p className="text-xs font-medium uppercase tracking-[.16em] text-zinc-500">Core toolkit</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-300">JavaScript, React.js, HTML5, CSS3, SCSS, Tailwind CSS, Node.js, Express.js, MongoDB, Shopify Liquid, and Git.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

const experience = [
  {
    title: 'Shopify Developer',
    workStyle: 'Hybrid',
    company: 'A.M. London Fashion Ltd.',
    location: 'Dhaka, Bangladesh',
    startDate: '2024-12',
    endDate: '2026-05',
    startLabel: 'December 2024',
    endLabel: 'May 2026',
    responsibilities: [
      'Developed and customized Shopify themes for Threadbare.com using HTML, CSS, JavaScript, and Shopify Liquid.',
      'Built custom storefront features including product filtering, dynamic sections, and cart enhancements based on business requirements.',
      'Improved website performance and Core Web Vitals through image compression, lazy loading, and theme code optimization.',
      'Collaborated with UK-based teams in a hybrid environment, translating design requirements into production-ready features.',
      'Used Git for version control and followed structured development workflows.',
    ],
  },
]

function ExperienceEntry({ role }) {
  return (
    <article className="relative pl-9 sm:pl-12">
      <span className="absolute left-0 top-2.5 size-3 rounded-full border-[3px] border-zinc-950 bg-lime-300 shadow-[0_0_14px_2px_rgba(190,242,100,.2)]" aria-hidden="true" />
      <div className="grid gap-9 lg:grid-cols-[minmax(15rem,.78fr)_minmax(0,1.22fr)] lg:gap-16">
        <header>
          <p className="text-xs font-medium uppercase tracking-[.16em] text-zinc-500"><time dateTime={role.startDate}>{role.startLabel}</time><span aria-hidden="true"> — </span><time dateTime={role.endDate}>{role.endLabel}</time></p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-.04em] text-zinc-100 sm:text-3xl">{role.title} <span className="whitespace-nowrap text-base font-medium tracking-normal text-lime-300 sm:text-lg">({role.workStyle})</span></h3>
          <p className="mt-3 text-base font-medium text-zinc-300">{role.company}</p>
          <p className="mt-1 text-sm text-zinc-500">{role.location}</p>
        </header>
        <div>
          <p className="text-xs font-medium uppercase tracking-[.16em] text-zinc-500">Selected responsibilities</p>
          <ul className="mt-5 space-y-4" role="list">
            {role.responsibilities.map((responsibility) => (
              <li key={responsibility} className="relative pl-5 text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
                <span className="absolute left-0 top-[.72em] size-1 rounded-full bg-lime-300" aria-hidden="true" />
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function Experience() {
  const reduceMotion = useReducedMotion()
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0 } }
  const animation = { duration: 0.55, ease: [0.22, 1, 0.36, 1] }

  return (
    <section id="experience" className="border-t border-zinc-900 py-24 sm:py-32" aria-labelledby="experience-heading">
      <motion.div
        className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={reveal} transition={animation} className="grid gap-6 md:grid-cols-[.72fr_1.28fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[.18em] text-lime-300">03 / Experience</p>
            <h2 id="experience-heading" className="mt-5 text-4xl font-semibold leading-[.95] tracking-[-.06em] text-zinc-100 sm:text-5xl">Where ideas became live experiences.</h2>
          </div>
          <p className="max-w-xl self-end text-base leading-7 text-zinc-400 sm:text-lg">A focused record of hands-on product work, from theme customization and storefront features to performance-minded implementation.</p>
        </motion.div>

        <motion.div variants={reveal} transition={animation} className="relative mt-16 border-l border-zinc-800 py-1">
          {experience.map((role) => <ExperienceEntry key={`${role.company}-${role.startDate}`} role={role} />)}
        </motion.div>
      </motion.div>
    </section>
  )
}

const skillGroups = [
  {
    category: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Angular', 'SCSS', 'Tailwind CSS'],
    featured: true,
  },
  {
    category: 'Shopify Development',
    skills: ['Shopify', 'Shopify Liquid', 'Theme Customization', 'Storefront Development', 'E-commerce Features'],
  },
  {
    category: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'Oracle SQL (Basic)'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

function SkillGroup({ category, skills, index, featured }) {
  const number = String(index + 1).padStart(2, '0')
  return (
    <article className={`group rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6 transition duration-300 hover:border-lime-300/50 hover:bg-zinc-900 sm:p-7 ${featured ? 'lg:col-span-2' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-[-.04em] text-zinc-100">{category}</h3>
        <span className="font-mono text-xs text-zinc-600 transition-colors group-hover:text-lime-300">{number}</span>
      </div>
      <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${category} skills`}>
        {skills.map((skill) => (
          <li key={skill} className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors group-hover:border-zinc-600 group-hover:text-zinc-100 sm:text-sm">{skill}</li>
        ))}
      </ul>
    </article>
  )
}

function Skills() {
  const reduceMotion = useReducedMotion()
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0 } }
  const animation = { duration: 0.55, ease: [0.22, 1, 0.36, 1] }

  return (
    <section id="skills" className="border-t border-zinc-900 py-24 sm:py-32" aria-labelledby="skills-heading">
      <motion.div
        className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={reveal} transition={animation} className="grid gap-6 md:grid-cols-[.72fr_1.28fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[.18em] text-lime-300">02 / Skills</p>
            <h2 id="skills-heading" className="mt-5 max-w-sm text-4xl font-semibold leading-[.95] tracking-[-.06em] text-zinc-100 sm:text-5xl">Tools for building useful things.</h2>
          </div>
          <p className="max-w-xl self-end text-base leading-7 text-zinc-400 sm:text-lg">A practical toolkit for crafting responsive storefronts, polished interfaces, and dependable web applications.</p>
        </motion.div>

        <motion.div variants={reveal} transition={animation} className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => <SkillGroup key={group.category} {...group} index={index} />)}
        </motion.div>
      </motion.div>
    </section>
  )
}

function Projects() {
  const reduceMotion = useReducedMotion()
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0 } }
  const animation = { duration: 0.55, ease: [0.22, 1, 0.36, 1] }

  return (
    <section id="projects" className="border-t border-zinc-900 py-24 sm:py-32" aria-labelledby="projects-heading">
      <motion.div
        className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={reveal} transition={animation} className="grid gap-8 md:grid-cols-[.72fr_1.28fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[.18em] text-lime-300">05 / Projects</p>
            <h2 id="projects-heading" className="mt-5 text-4xl font-semibold leading-[.95] tracking-[-.06em] text-zinc-100 sm:text-5xl">Projects.</h2>
          </div>
          <div className="self-end border-b border-zinc-800 pb-8 sm:pb-10">
            <p className="max-w-xl text-xl leading-8 tracking-[-.025em] text-zinc-300 sm:text-2xl sm:leading-9">Selected projects will be showcased here soon.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

const education = [
  {
    qualification: 'Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)',
    institution: 'Northern University Bangladesh',
    location: 'Dhaka, Bangladesh',
    year: '2026',
    resultLabel: 'CGPA',
    result: '3.25 / 4.00',
  },
  {
    qualification: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'National Ideal College',
    location: 'Dhaka, Bangladesh',
    year: '2021',
    resultLabel: 'GPA',
    result: '5.00 / 5.00',
  },
  {
    qualification: 'Secondary School Certificate (SSC) — Science',
    institution: 'Pirojpur Government High School',
    location: 'Pirojpur, Bangladesh',
    year: '2019',
    resultLabel: 'GPA',
    result: '5.00 / 5.00',
  },
]

function EducationEntry({ qualification, institution, location, year, resultLabel, result }) {
  return (
    <article className="relative pl-9 sm:pl-12">
      <span className="absolute left-0 top-2.5 size-3 rounded-full border-[3px] border-zinc-950 bg-lime-300 shadow-[0_0_14px_2px_rgba(190,242,100,.2)]" aria-hidden="true" />
      <div className="grid gap-7 lg:grid-cols-[minmax(15rem,1.12fr)_minmax(0,.88fr)] lg:gap-16">
        <header>
          <time className="text-xs font-medium uppercase tracking-[.16em] text-zinc-500" dateTime={year}>{year}</time>
          <h3 className="mt-4 max-w-2xl text-xl font-semibold leading-tight tracking-[-.04em] text-zinc-100 sm:text-2xl">{qualification}</h3>
          <p className="mt-3 text-base font-medium text-zinc-300">{institution}</p>
        </header>
        <div className="lg:pt-8">
          <p className="text-sm leading-6 text-zinc-500">{location}</p>
          <p className="mt-4 text-sm text-zinc-400"><span className="font-medium text-zinc-500">{resultLabel}</span> <span className="text-zinc-300">{result}</span></p>
        </div>
      </div>
    </article>
  )
}

function Education() {
  const reduceMotion = useReducedMotion()
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0 } }
  const animation = { duration: 0.55, ease: [0.22, 1, 0.36, 1] }

  return (
    <section id="education" className="border-t border-zinc-900 py-24 sm:py-32" aria-labelledby="education-heading">
      <motion.div
        className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={reveal} transition={animation} className="grid gap-6 md:grid-cols-[.72fr_1.28fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[.18em] text-lime-300">04 / Education</p>
            <h2 id="education-heading" className="mt-5 text-4xl font-semibold leading-[.95] tracking-[-.06em] text-zinc-100 sm:text-5xl">Education.</h2>
          </div>
          <p className="max-w-xl self-end text-base leading-7 text-zinc-400 sm:text-lg">Academic foundations in computer science, technology, and analytical problem-solving.</p>
        </motion.div>

        <motion.div variants={reveal} transition={animation} className="relative mt-16 space-y-14 border-l border-zinc-800 py-1 sm:space-y-16">
          {education.map((item) => <EducationEntry key={`${item.institution}-${item.year}`} {...item} />)}
        </motion.div>
      </motion.div>
    </section>
  )
}

function ContactOption({ option, icon: Icon, external = false }) {
  return (
    <a
      className="group grid gap-3 py-5 transition sm:grid-cols-[9rem_1fr_auto] sm:items-center sm:gap-6 sm:py-6"
      href={option.href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.16em] text-zinc-500 transition-colors group-hover:text-lime-300"><Icon /> {option.label}</span>
      <span className="min-w-0 break-words text-base font-medium tracking-[-.02em] text-zinc-200 transition-colors group-hover:text-white sm:text-lg">{option.value}</span>
      <span className="hidden text-zinc-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-lime-300 sm:block"><ArrowUpRight /></span>
    </a>
  )
}

function Contact() {
  const reduceMotion = useReducedMotion()
  const reveal = { hidden: { opacity: 0, y: reduceMotion ? 0 : 20 }, visible: { opacity: 1, y: 0 } }
  const animation = { duration: 0.55, ease: [0.22, 1, 0.36, 1] }

  return (
    <section id="contact" className="border-t border-zinc-900 py-24 sm:py-32" aria-labelledby="contact-heading">
      <motion.div
        className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={reveal} transition={animation} className="grid gap-8 md:grid-cols-[.72fr_1.28fr] md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[.18em] text-lime-300">06 / Contact</p>
            <h2 id="contact-heading" className="mt-5 max-w-sm text-4xl font-semibold leading-[.95] tracking-[-.06em] text-zinc-100 sm:text-5xl">Let&apos;s work together.</h2>
          </div>
          <p className="max-w-xl self-end text-xl leading-8 tracking-[-.025em] text-zinc-300 sm:text-2xl sm:leading-9">Open to discussing job opportunities, development projects, and thoughtful collaborations.</p>
        </motion.div>

        <motion.div variants={reveal} transition={animation} className="mt-16 divide-y divide-zinc-800 border-y border-zinc-800">
          <ContactOption option={contactDetails.email} icon={Mail} />
          <ContactOption option={contactDetails.github} icon={Github} external />
          <ContactOption option={contactDetails.linkedin} icon={Linkedin} external />
        </motion.div>
      </motion.div>
    </section>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
          <div>
            <a className="group inline-flex items-center gap-2 text-sm font-semibold tracking-[-0.03em] text-white transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300" href="#top" aria-label="Aminul Islam — back to top">
              <span className="grid size-7 place-items-center rounded-full bg-lime-300 text-[11px] font-extrabold text-zinc-950 transition-transform group-hover:rotate-12">A</span>
              AMINUL<span className="text-zinc-500 transition-colors group-hover:text-lime-300">.ISLAM</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-400">Frontend Developer &amp; Shopify Developer</p>
            <div className="mt-7 flex items-center gap-3">
              <a className="grid size-10 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-lime-300 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300" href={contactDetails.email.href} aria-label={`Email Aminul Islam at ${contactDetails.email.value}`}><Mail /></a>
              <a className="grid size-10 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-lime-300 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300" href={contactDetails.github.href} aria-label="Aminul Islam on GitHub" target="_blank" rel="noreferrer"><Github /></a>
              <a className="grid size-10 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-lime-300 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300" href={contactDetails.linkedin.href} aria-label="Aminul Islam on LinkedIn" target="_blank" rel="noreferrer"><Linkedin /></a>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-xs font-medium uppercase tracking-[.16em] text-zinc-500">Navigate</p>
            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3 sm:max-w-sm">
              {navItems.map((item) => <a key={item} className="w-fit text-sm text-zinc-400 transition-colors hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300" href={`#${item.toLowerCase()}`}>{item}</a>)}
            </div>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Aminul Islam. All rights reserved.</p>
          <p>Crafted with care in Dhaka, Bangladesh.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-lime-300 selection:text-zinc-950"><Header /><Hero /><About /><Skills /><Experience /><Education /><Projects /><Contact /><Footer /></div>
}
