'use client';
import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send, Check } from 'lucide-react';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Button, Reveal } from '@/components/ui';
import { site } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || 'Anonymous'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} <${form.email}>`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <AnimatedBackground />
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-fg-subtle">Contact</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s build something worth shipping.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
            The best way to reach me is email.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <aside className="rounded-3xl border border-border bg-bg-subtle/40 p-8 md:p-10">
              <h2 className="text-lg font-semibold tracking-tight">Channels</h2>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href={`mailto:${site.email}`} className="group flex items-center gap-3 text-fg-muted hover:text-fg">
                    <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-bg-elevated"><Mail className="h-4 w-4" /></span>
                    <span><span className="block text-xs text-fg-subtle">Email</span>{site.email}</span>
                  </a>
                </li>
                <li>
                  <a href={site.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-fg-muted hover:text-fg">
                    <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-bg-elevated"><Linkedin className="h-4 w-4" /></span>
                    <span><span className="block text-xs text-fg-subtle">LinkedIn</span>linkedin.com/in/aboorvan-m-g-187328129/</span>
                  </a>
                </li>
                <li>
                  <a href={site.github} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-fg-muted hover:text-fg">
                    <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-bg-elevated"><Github className="h-4 w-4" /></span>
                    <span><span className="block text-xs text-fg-subtle">GitHub</span>github.com/aboorvang-96</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-fg-muted">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-bg-elevated"><MapPin className="h-4 w-4" /></span>
                  <span><span className="block text-xs text-fg-subtle">Based in</span>{site.location} · Open to remote</span>
                </li>
              </ul>

            </aside>
          </Reveal>

          <Reveal delay={0.05}>
            <form onSubmit={submit} className="rounded-3xl border border-border bg-bg-subtle/40 p-8 md:p-10">
              <h2 className="text-lg font-semibold tracking-tight">Send a message</h2>
              <p className="mt-2 text-sm text-fg-muted">Opens your mail client with the message prefilled.</p>

              <div className="mt-8 grid gap-5">
                <label className="block">
                  <span className="text-xs font-mono uppercase tracking-widest text-fg-subtle">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm outline-none focus:border-border-strong"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-mono uppercase tracking-widest text-fg-subtle">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm outline-none focus:border-border-strong"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-mono uppercase tracking-widest text-fg-subtle">Message</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm outline-none focus:border-border-strong"
                    placeholder="What are you building?"
                  />
                </label>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <Button icon={sent ? Check : Send}>{sent ? 'Email draft opened' : 'Send message'}</Button>
                <span className="text-xs text-fg-subtle">Or email me directly at {site.email}</span>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
