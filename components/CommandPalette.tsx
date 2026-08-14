'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Github, Home, Linkedin, Mail, Search, Sparkles } from 'lucide-react';
import { nav, projects, site } from '@/lib/data';

type Item = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  keywords: string;
};

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);

  const items: Item[] = useMemo(() => {
    const nav_items: Item[] = nav.map((n) => ({
      id: `nav:${n.href}`,
      label: n.label,
      hint: 'Page',
      icon: Home,
      keywords: `${n.label} ${n.href}`,
      action: () => router.push(n.href),
    }));
    const project_items: Item[] = projects.map((p) => ({
      id: `proj:${p.slug}`,
      label: p.name,
      hint: 'Project',
      icon: Sparkles,
      keywords: `${p.name} ${p.tag} ${p.tech.join(' ')}`,
      action: () => router.push(`/projects#${p.slug}`),
    }));
    const links: Item[] = [
      { id: 'gh', label: 'GitHub', hint: 'External', icon: Github, keywords: 'github code', action: () => window.open(site.github, '_blank') },
      { id: 'in', label: 'LinkedIn', hint: 'External', icon: Linkedin, keywords: 'linkedin', action: () => window.open(site.linkedin, '_blank') },
      { id: 'mail', label: 'Email me', hint: 'Action', icon: Mail, keywords: 'contact email mail', action: () => window.open(`mailto:${site.email}`) },
    ];
    return [...nav_items, ...project_items, ...links];
  }, [router]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((i) => i.keywords.toLowerCase().includes(s) || i.label.toLowerCase().includes(s));
  }, [items, q]);

  useEffect(() => {
    if (open) {
      setQ(''); setActive(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
      if (e.key === 'Enter') {
        e.preventDefault();
        const item = filtered[active];
        if (item) { item.action(); onClose(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, active, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 p-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 text-fg-subtle" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => { setQ(e.target.value); setActive(0); }}
                placeholder="Search pages, projects, actions…"
                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-fg-subtle"
              />
              <kbd className="hidden rounded border border-border bg-bg-subtle px-1.5 py-0.5 text-[10px] text-fg-subtle sm:inline">ESC</kbd>
            </div>
            <ul className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-fg-subtle">No results</li>
              )}
              {filtered.map((it, i) => {
                const Icon = it.icon;
                return (
                  <li key={it.id}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={() => { it.action(); onClose(); }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${i === active ? 'bg-fg/5 text-fg' : 'text-fg-muted'}`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="flex-1">{it.label}</span>
                      {it.hint && <span className="text-xs text-fg-subtle">{it.hint}</span>}
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
