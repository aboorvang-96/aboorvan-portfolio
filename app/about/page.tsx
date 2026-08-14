import type { Metadata } from 'next';
import { Reveal, SectionHeader, Chip } from '@/components/ui';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { capabilities, enjoyBuilding, site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${site.name} — software developer working across applications, APIs, and AI-related systems.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="mx-auto max-w-4xl px-6 pb-20 pt-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-subtle">About</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Engineer, builder, and a long-time believer in shipping.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
            I&apos;m Aboorvan — a software developer working across Python, web and mobile applications, APIs,
            and AI-related systems. I enjoy turning practical workflows into clear, dependable software.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-invert max-w-none space-y-6 text-pretty text-base leading-relaxed text-fg-muted">
          <p>
            My work spans business applications, mobile and desktop software, and AI-assisted systems. I am
            especially interested in the point where sound application engineering meets useful automation.
          </p>
          <p>
            Projects such as <span className="text-fg">SPIM Suite</span>, <span className="text-fg">SPIM Lite</span>,
            <span className="text-fg"> SPIM Expense Manager</span>, and <span className="text-fg">Stock Lite</span>
            reflect that range: Django and PostgreSQL business software, React Native and Flutter apps, and
            Python-based desktop tools. I also build with RAG pipelines, AI agents, LLM integrations,
            scraping, and workflow automation.
          </p>
          <p>
            I care about understandable architecture, reliable integrations, and interfaces that make
            complicated work feel straightforward.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeader eyebrow="Focus" title="How I approach engineering work." />
        <div className="relative mt-14 border-l border-border pl-8">
          {capabilities.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <div className="relative pb-12">
                <span className="absolute -left-[38px] top-1.5 grid h-4 w-4 place-items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-fg" />
                  <span className="absolute h-4 w-4 rounded-full border border-border" />
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-3 text-pretty text-base leading-relaxed text-fg-muted">{t.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{t.stack.map((item) => <Chip key={item}>{item}</Chip>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeader eyebrow="What I enjoy" title="Areas I love building in." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enjoyBuilding.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.03}>
              <div className="h-full rounded-2xl border border-border bg-bg-subtle/40 p-6">
                <Chip>{f.title}</Chip>
                <p className="mt-4 text-pretty text-base leading-relaxed text-fg">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
