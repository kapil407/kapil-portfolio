import { GitBranch, Network } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
            {portfolio.name}
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {portfolio?.navItems?.map((item) => (
              <NavLink key={item} item={item} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-emerald-300/50 hover:text-emerald-300"
            >
              <GitBranch size={18} aria-hidden="true" />
            </a>
            <a
              href={portfolio?.socials?.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-emerald-300/50 hover:text-emerald-300"
            >
              <Network size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-1 lg:hidden">
          {portfolio?.navItems?.map((item) => (
            <NavLink key={item} item={item} className="shrink-0" />
          ))}
        </div>
      </nav>
    </header>
  )
}

function NavLink({ item, className = '' }) {
  return (
    <a
      href={`#${createSectionId(item)}`}
      className={`text-sm text-slate-300 transition hover:text-emerald-300 focus:outline-none focus:text-emerald-300 ${className}`}
    >
      {item}
    </a>
  )
}

function createSectionId(item) {
  return item.toLowerCase().replaceAll(' ', '-').replaceAll('/', '')
}
