import Link from "next/link"
import { ArrowRight, BookOpen, Globe2, Landmark, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "~137", label: "countries exploring a CBDC", note: "covering about 98% of world GDP" },
  { value: "3", label: "fully launched retail CBDCs", note: "The Bahamas, Jamaica, Nigeria" },
  { value: "3.48bn", label: "e-CNY transactions", note: "processed in China by November 2025" },
  { value: "2029", label: "earliest digital euro issuance", note: "if EU legislation is in place" },
]

export const metadata = {
  title: "CBDC LLC | Plain-English Digital Currency Intelligence",
  description: "Independent, plain-English information about central bank digital currencies and where each programme stands.",
}

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-border/70 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
          <div className="flex flex-col items-start justify-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <Landmark className="size-3.5" />
              CBDC LLC · independent information resource
            </span>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Your plain guide to digital central bank money.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              A central bank digital currency is a digital form of a country&apos;s official money, issued directly by its central bank. CBDC LLC explains what they are, where each country stands, and what the shift could mean for you, your savings, and your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" render={<Link href="/tracker" />} nativeButton={false}>
                Explore the World Tracker <ArrowRight data-icon="inline-end" />
              </Button>
              <Button size="lg" variant="outline" render={<Link href="/what-is-a-cbdc" />} nativeButton={false}>
                What is a CBDC?
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden border-primary/20 bg-card/80 shadow-2xl shadow-primary/5">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-border/70 pb-5">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary"><Globe2 className="size-5" /></div>
                <div><p className="font-semibold text-foreground">The world is moving</p><p className="text-sm text-muted-foreground">Research, pilots, launches, and legislation</p></div>
              </div>
              <div className="grid gap-4 pt-6 sm:grid-cols-2">
                {stats.map((stat) => <div key={stat.label} className="rounded-lg border border-border/70 bg-background/60 p-4"><p className="font-mono text-2xl font-semibold text-primary">{stat.value}</p><p className="mt-1 text-sm font-medium text-foreground">{stat.label}</p><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.note}</p></div>)}
              </div>
              <p className="mt-6 text-xs text-muted-foreground">Figures and statuses reviewed 14 October 2026. They can change quickly.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <Card><CardContent className="p-6"><BookOpen className="size-5 text-primary" /><h2 className="mt-4 text-lg font-semibold">Understand the basics</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Learn how CBDCs differ from bank deposits, stablecoins, and cryptocurrencies.</p><Link href="/what-is-a-cbdc" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Read the guide <ArrowRight className="size-4" /></Link></CardContent></Card>
        <Card><CardContent className="p-6"><Globe2 className="size-5 text-primary" /><h2 className="mt-4 text-lg font-semibold">Track every programme</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Search 177 projects across the world, from early research to full-scale launch.</p><Link href="/tracker" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Open World Tracker <ArrowRight className="size-4" /></Link></CardContent></Card>
        <Card><CardContent className="p-6"><ShieldCheck className="size-5 text-primary" /><h2 className="mt-4 text-lg font-semibold">Stay informed, not alarmed</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Clear context on privacy, holding limits, programmability, and what changes for businesses.</p><Link href="/getting-ready" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Get ready <ArrowRight className="size-4" /></Link></CardContent></Card>
      </section>
    </main>
  )
}
