'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Loading() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 650);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-bg"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-center gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-fg text-bg font-semibold">A</span>
            <span className="text-sm tracking-tight text-fg-muted">Loading…</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
