import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = { title: "What is a CBDC? | CBDC LLC", description: "A plain-English guide to central bank digital currencies." }

export default function WhatIsCbdcPage() {
  return <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
    <header className="max-w-3xl"><p className="text-sm font-medium text-primary">THE BASICS</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">What is a CBDC?</h1><p className="mt-5 text-lg leading-relaxed text-muted-foreground">A central bank digital currency is a digital form of a country&apos;s official money, issued directly by its central bank.</p></header>
    <section className="mt-12 space-y-5 text-base leading-relaxed text-muted-foreground"><p>One digital pound would always equal one pound in notes, and it would be a claim on the Bank of England itself, not on a commercial bank. Today most of the money you use is commercial bank money: the balance in your current account is a promise from your bank. Cash is the only central bank money the public can hold. A retail CBDC would give the public a digital version of that safest form of money.</p><p>Almost every design under discussion is intermediated. You would not open an account with the central bank. Banks and payment firms would provide the wallets, apps and cards, while the central bank issues the money and runs the core settlement system.</p></section>
    <div className="mt-12 grid gap-5 md:grid-cols-2"><Card><CardHeader><CardTitle>Retail CBDC</CardTitle></CardHeader><CardContent className="text-sm leading-relaxed text-muted-foreground">For everyday use by households and businesses: paying in shops, online, and between friends. Examples include the digital euro proposal, the digital pound, China&apos;s e-CNY, and the Bahamas&apos; Sand Dollar.</CardContent></Card><Card><CardHeader><CardTitle>Wholesale CBDC</CardTitle></CardHeader><CardContent className="text-sm leading-relaxed text-muted-foreground">Used only between banks and financial institutions to settle large payments and trades in tokenised assets. You would never see it directly. Examples include BIS Project Agorá, Project mBridge, and the first phase of Brazil&apos;s Drex.</CardContent></Card></div>
  </main>
}
