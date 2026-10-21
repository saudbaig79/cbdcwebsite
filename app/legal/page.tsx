import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Mail, ShieldCheck } from "lucide-react"
import { legalCentreCategories, legalDocuments } from "@/lib/legal-content"

export const metadata = {
  title: "Legal Centre | CBDC LLC",
  description: "Policies, standards, and practical information about using CBDC LLC research resources.",
}

export default function LegalCentrePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Trust & transparency</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Legal Centre</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">A clear home for the policies and standards that guide CBDC LLC research, publishing, accessibility, and use of this information resource.</p>
      </header>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5"><BookOpen className="size-5 text-primary" aria-hidden="true" /><h2 className="mt-4 font-semibold text-foreground">Plain language</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Practical explanations of how the service works and what its content means.</p></div>
        <div className="rounded-xl border border-border bg-card p-5"><ShieldCheck className="size-5 text-primary" aria-hidden="true" /><h2 className="mt-4 font-semibold text-foreground">Independent research</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Standards for sourcing, classification, corrections, and editorial judgement.</p></div>
        <div className="rounded-xl border border-border bg-card p-5"><FileText className="size-5 text-primary" aria-hidden="true" /><h2 className="mt-4 font-semibold text-foreground">Clear policies</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Practical policies covering privacy, cookies, terms, and responsible research.</p></div>
      </div>
      <div className="mt-14 space-y-12">
        {legalCentreCategories.map((category) => (
          <section key={category.title}>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{category.title}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {category.slugs.map((slug) => {
                const document = legalDocuments.find((item) => item.slug === slug)
                if (!document) return null
                return <Link key={slug} href={`/${slug}`} className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-primary/5"><div className="flex items-start justify-between gap-4"><div><h3 className="font-semibold text-foreground">{document.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{document.description}</p></div><ArrowRight className="mt-1 size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" /></div></Link>
              })}
            </div>
          </section>
        ))}
      </div>
      <section className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-xl font-semibold text-foreground">Questions, corrections, or accessibility feedback?</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Please include the relevant page and enough detail for us to review the issue.</p></div><a href="mailto:info@cbdc.ac" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"><Mail className="size-4" aria-hidden="true" /> info@cbdc.ac</a></div>
      </section>
    </main>
  )
}
