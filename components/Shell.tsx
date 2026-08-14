'use client';
import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { MouseFollower } from './MouseFollower';
import { BackToTop } from './BackToTop';
import { CommandPalette } from './CommandPalette';
import { Loading } from './Loading';
import { PageTransition } from './PageTransition';

export function Shell({ children }: { children: React.ReactNode }) {
  const [cmd, setCmd] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault(); setCmd((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <Loading />
      <ScrollProgress />
      <MouseFollower />
      <Navigation onCommand={() => setCmd(true)} />
      <CommandPalette open={cmd} onClose={() => setCmd(false)} />
      <main className="pt-24">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
