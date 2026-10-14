import type { ReactNode } from "react"

export function ContentPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 text-lg leading-8 text-muted-foreground">{intro}</p>}
      </div>
      <div className="mt-12 space-y-10">{children}</div>
    </main>
  )
}

export function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return <section><h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2><div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">{children}</div></section>
}

export function InfoCard({ label, title, children }: { label?: string; title: string; children: ReactNode }) {
  return <article className="rounded-xl border border-border bg-card p-6 shadow-sm"><div className="text-xs font-mono uppercase tracking-[0.16em] text-primary">{label}</div><h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3><div className="mt-3 text-sm leading-7 text-muted-foreground">{children}</div></article>
}
