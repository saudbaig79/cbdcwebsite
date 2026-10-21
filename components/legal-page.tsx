import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CalendarDays, Mail, ShieldCheck } from "lucide-react"
import type { LegalDocument } from "@/lib/legal-content"

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <article className="min-w-0">
          <Link href="/legal" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to Legal Centre
          </Link>
          <header className="mt-10 border-b border-border/80 pb-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{document.category}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{document.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{document.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-primary" aria-hidden="true" /> Last reviewed {document.reviewed}</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-primary" aria-hidden="true" /> Draft for legal review</span>
            </div>
          </header>
          <nav aria-label="On this page" className="mt-8 rounded-xl border border-border bg-card/50 p-5 lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">On this page</p>
            <ol className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {document.sections.map((section, index) => <li key={section.heading}><a className="hover:text-foreground" href={`#section-${index + 1}`}>{index + 1}. {section.heading}</a></li>)}
            </ol>
          </nav>
          <div className="mt-10 space-y-10">
            {document.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">{index + 1}. {section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul className="list-disc space-y-2 pl-5">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm leading-7 text-muted-foreground">
            <p><strong className="text-foreground">Questions or corrections?</strong> Contact <a className="font-medium text-primary hover:underline" href="mailto:info@cbdc.ac">info@cbdc.ac</a>.</p>
          </div>
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border border-border bg-card/50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">On this page</p>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              {document.sections.map((section, index) => <li key={section.heading}><a className="hover:text-foreground" href={`#section-${index + 1}`}>{index + 1}. {section.heading}</a></li>)}
            </ol>
            <div className="mt-6 border-t border-border/70 pt-5 text-sm">
              <Link href="/legal" className="inline-flex items-center gap-2 text-primary hover:underline">All legal documents <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
              <a href="mailto:info@cbdc.ac" className="mt-3 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"><Mail className="size-4" aria-hidden="true" /> Contact legal team</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
