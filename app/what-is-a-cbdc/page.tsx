import { ContentPage, ContentSection, InfoCard } from "@/components/content-page"

const rows = [
  ["Issuer", "Central bank", "Commercial bank", "Private company", "No issuer (protocol)"],
  ["Value", "Always 1:1 with national currency", "1:1, backed by the bank", "Aims for 1:1, depends on reserves", "Floats freely"],
  ["Credit risk", "None (state-backed)", "Low, covered by deposit insurance up to a limit", "Issuer and reserve risk", "Market risk"],
  ["Legal tender", "Usually yes", "No (but universally accepted)", "No", "No (rare exceptions)"],
  ["Who sees your data", "Your wallet provider; central bank access limited by design and law", "Your bank", "Issuer and, on public chains, anyone", "Public ledger (pseudonymous)"],
  ["Earns interest", "Usually no; China's e-CNY is the exception from 2026", "Often", "Restricted in the US under the GENIUS Act", "No"],
]

export default function WhatIsCbdcPage() {
  return <ContentPage eyebrow="The basics" title="What is a CBDC?" intro="A central bank digital currency is a digital form of a country's official money, issued directly by its central bank. One digital pound would always equal one pound in notes, and it would be a claim on the Bank of England itself, not on a commercial bank.">
    <ContentSection title="Central bank money, in digital form"><p>Today most of the money you use is commercial bank money: the balance in your current account is a promise from your bank. Cash is the only central bank money the public can hold. A retail CBDC would give the public a digital version of that safest form of money.</p><p>Almost every design under discussion is intermediated. You would not open an account with the central bank. Banks and payment firms would provide the wallets, apps and cards, while the central bank issues the money and runs the core settlement system.</p></ContentSection>
    <div className="grid gap-5 md:grid-cols-2"><InfoCard label="Type 01" title="Retail CBDC">For everyday use by households and businesses: paying in shops, online and between friends. Examples include the digital euro proposal, the digital pound, China's e-CNY and the Bahamas' Sand Dollar.</InfoCard><InfoCard label="Type 02" title="Wholesale CBDC">Used only between banks and financial institutions to settle large payments and trades in tokenised assets. You would never see it directly. Examples include BIS Project Agorá, Project mBridge and the first phase of Brazil's Drex.</InfoCard></div>
    <ContentSection title="CBDC, bank money, stablecoins and crypto"><p>These are often lumped together. They are very different things in law and in risk.</p><div className="overflow-x-auto rounded-xl border border-border"><table className="min-w-[760px] w-full text-left text-sm"><thead className="bg-secondary text-foreground"><tr><th className="p-4">Feature</th><th className="p-4">Retail CBDC</th><th className="p-4">Bank deposit</th><th className="p-4">Stablecoin</th><th className="p-4">Cryptocurrency</th></tr></thead><tbody>{rows.map((row) => <tr key={row[0]} className="border-t border-border">{row.map((cell, i) => <td key={cell} className={`p-4 ${i === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{cell}</td>)}</tr>)}</tbody></table></div></ContentSection>
  </ContentPage>
}
