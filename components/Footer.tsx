import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { site, nav } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-bg-subtle/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-fg text-bg text-xs font-semibold">A</span>
              <span className="text-sm font-medium">Aboorvan M G</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
              Building production-ready AI applications, full-stack web platforms and intelligent workflows.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full border border-border text-fg-muted hover:text-fg hover:border-border-strong transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-border text-fg-muted hover:text-fg hover:border-border-strong transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full border border-border text-fg-muted hover:text-fg hover:border-border-strong transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-fg-subtle">Sitemap</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-fg-muted hover:text-fg transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-wider text-fg-subtle">Elsewhere</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href={site.github} target="_blank" rel="noreferrer" className="text-fg-muted hover:text-fg">GitHub</a></li>
              <li><a href={site.linkedin} target="_blank" rel="noreferrer" className="text-fg-muted hover:text-fg">LinkedIn</a></li>
              <li><a href={`mailto:${site.email}`} className="text-fg-muted hover:text-fg">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-fg-subtle md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Aboorvan M G. Crafted with care.</p>
          <p className="font-mono">Built with Next.js, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
