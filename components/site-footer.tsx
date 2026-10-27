export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(16rem,0.85fr)_minmax(0,1.5fr)] lg:items-center">
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-base" aria-hidden="true">
                🏢
              </span>
              <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <p className="text-sm font-semibold text-foreground">CBDC LLC</p>
                <p className="font-mono text-xs text-muted-foreground">Company No. 2026-002064943</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-base" aria-hidden="true">
                📍
              </span>
              <address className="not-italic text-sm leading-6 text-muted-foreground">
                5830 E 2nd St, Ste 7000 #38378
                <br />
                Casper, WY 82609, USA
              </address>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-base" aria-hidden="true">
                ✉️
              </span>
              <a
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                href="mailto:info@cbdc.ac"
              >
                info@cbdc.ac
              </a>
            </div>
          </div>

          <div className="grid gap-4 border-t border-border pt-6 text-xs leading-6 text-muted-foreground sm:grid-cols-2 lg:border-l lg:border-t-0 lg:py-2 lg:pl-8">
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
