'use client';
import { ArrowRight, ArrowUpRight, ChevronDown, Github, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { TypingAnimation } from '@/components/TypingAnimation';
import { Button, Chip, Reveal, SectionHeader } from '@/components/ui';
import { capabilities, enjoyBuilding, projects, site } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="mx-auto max-w-6xl px-6 pb-28 pt-16 md:pb-40 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle/60 px-3 py-1 text-xs text-fg-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </div>

            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
              <span className="gradient-text">Aboorvan M G</span>
            </h1>

            <div className="mt-6 text-lg text-fg-muted sm:text-xl md:text-2xl">
              <TypingAnimation
                className="font-mono text-fg"
                words={['AI Developer', 'Full Stack Developer', 'Python Developer']}
              />
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
              I build production-ready AI applications, full-stack web platforms,
              automation systems and intelligent workflows — the kind that ship,
              scale and stay reliable in the wild.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href="/projects" variant="primary" icon={ArrowRight}>View Projects</Button>
              <Button href={site.github} external variant="ghost" icon={Github}>GitHub</Button>
              <Button href={site.linkedin} external variant="ghost" icon={Linkedin}>LinkedIn</Button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="mt-20 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="flex flex-col items-center gap-2 text-xs text-fg-subtle"
            >
              <span className="font-mono uppercase tracking-widest">Scroll</span>
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability.title} className="rounded-2xl border border-border bg-bg-subtle/40 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-fg-subtle">Focus</p>
              <h2 className="mt-3 text-lg font-semibold tracking-tight">{capability.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{capability.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Building */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="What I build"
          title="Systems that outlive the demo."
          description="I care about the boring parts: correctness, latency, observability, and code that other engineers actually enjoy inheriting."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enjoyBuilding.slice(0, 6).map((f, i) => (
            <Reveal key={f.title} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-border bg-bg-subtle/40 p-6 transition-all hover:border-border-strong hover:bg-bg-elevated">
                <div className="flex items-center gap-2 text-fg-muted">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-mono uppercase tracking-wider">{f.title}</span>
                </div>
                <p className="mt-4 text-pretty text-base leading-relaxed text-fg">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected work"
            title="A slice of what I've shipped."
            description="A selection of web, mobile, desktop, and AI-related development work."
          />
          <Link href="/projects" className="hidden shrink-0 items-center gap-1 text-sm text-fg-muted hover:text-fg md:inline-flex">
            All projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                href={`/projects#${p.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-border bg-bg-subtle/40 transition-all hover:border-border-strong hover:bg-bg-elevated"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-sky-500/10">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="rounded-full border border-border bg-bg/60 px-3 py-1 text-xs text-fg-muted backdrop-blur">
                      Project overview
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-fg-subtle">
                    <span>{p.tag}</span>
                  </div>
                  <h3 className="mt-3 flex items-center gap-2 text-xl font-semibold tracking-tight">
                    {p.name}
                    <ArrowUpRight className="h-4 w-4 translate-y-[1px] text-fg-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-fg-muted">{p.solution}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 5).map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-32 pt-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-bg-subtle to-bg-elevated p-10 md:p-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-sky-500/25 to-fuchsia-500/25 blur-3xl" />
            <div className="relative">
              <h3 className="max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Building something ambitious? Let&apos;s talk.
              </h3>
              <p className="mt-4 max-w-lg text-fg-muted">
                I&apos;m open to software-development and AI-related opportunities and collaborations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" icon={ArrowRight}>Get in touch</Button>
                <Button href={`mailto:${site.email}`} external variant="secondary">{site.email}</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
