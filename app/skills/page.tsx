import type { Metadata } from 'next';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Reveal, SectionHeader } from '@/components/ui';
import { skills } from '@/lib/data';
import { Code2, Database, Cloud, Cpu, Layers, Terminal, Wrench } from 'lucide-react';

const iconFor = (cat: string) => {
  if (cat === 'Languages') return Code2;
  if (cat === 'Frontend') return Layers;
  if (cat === 'Backend') return Terminal;
  if (cat === 'Databases') return Database;
  if (cat === 'AI' || cat === 'AI Development') return Cpu;
  if (cat.startsWith('Cloud')) return Cloud;
  return Wrench;
};

export const metadata: Metadata = {
  title: 'Skills',
  description: 'The tools, languages and platforms I use to ship production software.',
};

export default function SkillsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-subtle">Skills</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            The tools I reach for to ship real software.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
            The languages, frameworks, platforms, and application-development tools I work with.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group, i) => {
            const Icon = iconFor(group.category);
            return (
              <Reveal key={group.category} delay={i * 0.04}>
                <div className="group h-full rounded-3xl border border-border bg-bg-subtle/40 p-8 transition-all hover:border-border-strong hover:bg-bg-elevated">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-bg-elevated">
                      <Icon className="h-4 w-4 text-fg-muted" />
                    </span>
                    <h2 className="text-lg font-semibold tracking-tight">{group.category}</h2>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-sm text-fg transition-colors hover:border-border-strong"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeader
          eyebrow="Approach"
          title="Engineering priorities."
          description="The practical concerns I bring to application development."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {[
            { title: 'Clear workflows', body: 'Modeling the real work an application needs to support before adding complexity.' },
            { title: 'Reliable integrations', body: 'Connecting applications, APIs, automation, and data sources with maintainability in mind.' },
            { title: 'Useful AI', body: 'Applying RAG, agents, and LLM integrations where they improve a product or workflow.' },
            { title: 'Appropriate architecture', body: 'Selecting web, mobile, desktop, or PWA delivery based on the use case.' },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <div className="rounded-2xl border border-border bg-bg-subtle/40 p-6">
                <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
