export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
          <div>
            <p className="text-sm font-semibold leading-6 text-foreground">
              CBDC LLC · Company No. 2026-002064943 · 5830 E 2nd St, Ste 7000 #38378, Casper, WY 82609
            </p>
            <a
              className="mt-2 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
              href="mailto:info@cbdc.ac"
            >
              info@cbdc.ac
            </a>
          </div>
          <div className="grid gap-3 text-xs leading-6 text-muted-foreground">
            <p>
              CBDC is an independent information resource. It is not affiliated with any central bank or government. Content is general information, not financial, investment or legal advice.
            </p>
            <p>
              CBDC LLC does not issue, sell, exchange, hold or transmit any digital currency, cryptoasset or token, and does not handle client funds.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
