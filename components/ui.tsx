'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  href?: string;
  external?: boolean;
  variant?: Variant;
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary: 'bg-fg text-bg hover:bg-fg/90',
  secondary: 'border border-border bg-bg-elevated text-fg hover:border-border-strong',
  ghost: 'text-fg-muted hover:text-fg',
};

export function Button({ href, external, variant = 'primary', icon: Icon, className, children, onClick }: ButtonProps) {
  const cls = cn(
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 will-change-transform hover:-translate-y-px active:translate-y-0',
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </>
  );
  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>{content}</a>
    ) : (
      <Link href={href} className={cls}>{content}</Link>
    );
  }
  return <button onClick={onClick} className={cls}>{content}</button>;
}

export function SectionHeader({
  eyebrow, title, description, align = 'left',
}: { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center' }) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-subtle/60 px-3 py-1 text-xs text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn(
      'inline-flex items-center rounded-full border border-border bg-bg-subtle/60 px-2.5 py-1 text-xs text-fg-muted',
      className,
    )}>
      {children}
    </span>
  );
}
