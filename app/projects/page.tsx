'use client';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Chip, Reveal } from '@/components/ui';
import { projects } from '@/lib/data';

const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tech))).sort()];

export default function ProjectsPage() {
  const [q, setQ] = useState('');
  const [tag, setTag] = useState('All');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesTag = tag === 'All' || p.tech.includes(tag);
      const matchesQ =
        !q.trim() ||
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.tag.toLowerCase().includes(q.toLowerCase()) ||
        p.solution.toLowerCase().includes(q.toLowerCase()) ||
        p.tech.join(' ').toLowerCase().includes(q.toLowerCase());
      return matchesTag && matchesQ;
    });
  }, [q, tag]);

  return (
    <>
      <section className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-subtle">Projects</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Applications and systems I have worked on.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
            A cross-section of business software, mobile and desktop applications, and AI-related development.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-subtle" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects, tech, keywords…"
              className="w-full rounded-full border border-border bg-bg-subtle/60 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-border-strong"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {allTags.slice(0, 12).map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  tag === t
                    ? 'border-fg bg-fg text-bg'
                    : 'border-border bg-bg-subtle/60 text-fg-muted hover:text-fg'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <AnimatePresence mode="popLayout">
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((p, i) => (
              <motion.article
                key={p.slug}
                id={p.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="group scroll-mt-32 overflow-hidden rounded-3xl border border-border bg-bg-subtle/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-sky-500/10">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="rounded-full border border-border bg-bg/60 px-3 py-1 text-xs text-fg-muted backdrop-blur">
                      Project overview
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs text-fg-subtle">
                    <span>{p.tag}</span>
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">{p.name}</h2>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-fg-subtle">Problem</p>
                      <p className="mt-1.5 text-pretty text-sm leading-relaxed text-fg-muted">{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-fg-subtle">Solution</p>
                      <p className="mt-1.5 text-pretty text-sm leading-relaxed text-fg-muted">{p.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-fg-subtle">Key features</p>
                      <ul className="mt-2 grid list-inside list-disc gap-1 text-sm text-fg-muted marker:text-fg-subtle">
                        {p.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-fg-subtle">Architecture</p>
                      <p className="mt-1.5 text-pretty text-sm leading-relaxed text-fg-muted">{p.architecture}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>

                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
        {filtered.length === 0 && (
          <Reveal>
            <p className="py-24 text-center text-sm text-fg-muted">No projects match that filter.</p>
          </Reveal>
        )}
      </section>
    </>
  );
}
