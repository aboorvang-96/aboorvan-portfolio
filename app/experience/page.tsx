import type { Metadata } from 'next';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Chip, Reveal } from '@/components/ui';
import { capabilities } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Capabilities',
  description: 'Software-development capabilities across business applications, AI-related work, and cross-platform delivery.',
};

export default function ExperiencePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-subtle">Capabilities</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Engineering work across applications, integrations, and automation.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-6">
          {capabilities.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05}>
              <article className="rounded-3xl border border-border bg-bg-subtle/40 p-8 md:p-10">
                <h2 className="text-2xl font-semibold tracking-tight">{e.title}</h2>
                <p className="mt-5 text-pretty text-base leading-relaxed text-fg-muted">{e.body}</p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {e.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

    </>
  );
}
