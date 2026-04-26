import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoWithTagline from '../images/SmartTask_logo_with_text_tag_line.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Domain', to: '/domain' },
  { label: 'Milestones', to: '/milestones' },
  { label: 'Documents', to: '/documents' },
  { label: 'Presentations', to: '/presentations' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function linkClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive ? 'bg-teal-100 text-teal-700' : 'text-slate-700 hover:bg-slate-100 hover:text-teal-700'
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="page-container flex items-center justify-between py-3">
        <NavLink to="/" className="block" onClick={() => setOpen(false)}>
          <img src={logoWithTagline} alt="SmartTask logo" className="h-12 w-auto" />
        </NavLink>

        <button
          className="rounded-lg border border-slate-300 p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-slate-700" />
          <span className="mt-1.5 block h-0.5 w-5 bg-slate-700" />
          <span className="mt-1.5 block h-0.5 w-5 bg-slate-700" />
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="page-container flex flex-col py-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
