import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = { title: "Programmes to Watch | CBDC LLC", description: "The central bank digital currency programmes that matter most." }

const programmes = [
  ["Digital euro", "The European Commission proposed the regulation in June 2023. Parliament backed talks with the Council in July 2026. A pilot is possible in 2027, with first issuance earliest in 2029."],
  ["Digital pound", "The Bank of England and HM Treasury are in the design phase. Private firms would provide wallets, and any launch would require primary legislation."],
  ["China’s e-CNY", "China’s e-CNY is by far the largest CBDC in use. Verified wallets began earning interest in January 2026, with 3.48 billion transactions processed by the end of November 2025."],
  ["United States", "The United States is not pursuing a retail digital dollar. Policy focus has moved to regulated private stablecoins, while the New York Fed continues wholesale work."],
  ["Brazil’s Drex", "Brazil relaunched Drex as conventional wholesale infrastructure for credit collateral after testing blockchain for four years. Retail use is left for a later phase."],
  ["The early adopters", "The Bahamas, Jamaica, and Nigeria show that launching is the easy part. Adoption remains limited by merchant acceptance, integration incentives, and strong existing payment apps."],
] as const

export default function ProgrammesPage() {
  return <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20"><header className="max-w-3xl"><p className="text-sm font-medium text-primary">SPOTLIGHTS</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Programmes to watch</h1><p className="mt-5 text-lg leading-relaxed text-muted-foreground">The programmes that matter most for households, businesses, and the future of money.</p></header><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{programmes.map(([title, body]) => <Card key={title}><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent className="text-sm leading-relaxed text-muted-foreground">{body}</CardContent></Card>)}</div></main>
}
