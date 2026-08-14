'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Command, Menu, Moon, Sun, X } from 'lucide-react';
import { nav } from '@/lib/data';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

export function Navigation({ onCommand }: { onCommand: () => void }) {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cn(
            'flex items-center justify-between rounded-full border px-4 py-2.5 transition-all',
            scrolled ? 'glass shadow-lg shadow-black/5' : 'border-transparent',
          )}
        >
          <Link href="/" className="group flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-fg text-bg text-xs font-semibold">
              A
            </span>
            <span className="text-sm font-medium tracking-tight">Aboorvan</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative rounded-full px-3.5 py-1.5 text-sm transition-colors',
                    active ? 'text-fg' : 'text-fg-muted hover:text-fg',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-fg/5"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onCommand}
              className="hidden items-center gap-2 rounded-full border border-border bg-bg-subtle px-2.5 py-1.5 text-xs text-fg-muted transition-colors hover:text-fg md:flex"
              aria-label="Open command palette"
            >
              <Command className="h-3.5 w-3.5" />
              <span className="font-mono">⌘K</span>
            </button>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full text-fg-muted hover:bg-bg-subtle hover:text-fg md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 flex flex-col rounded-2xl glass p-2 md:hidden"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-xl px-3 py-2.5 text-sm',
                    pathname === item.href ? 'bg-fg/5 text-fg' : 'text-fg-muted',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
