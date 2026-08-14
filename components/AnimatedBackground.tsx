export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/25 via-indigo-500/20 to-fuchsia-500/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-emerald-500/15 to-sky-500/15 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      <div className="absolute -bottom-32 -right-40 h-[440px] w-[440px] rounded-full bg-gradient-to-tr from-fuchsia-500/15 to-amber-500/10 blur-3xl animate-blob" style={{ animationDelay: '8s' }} />
    </div>
  );
}
