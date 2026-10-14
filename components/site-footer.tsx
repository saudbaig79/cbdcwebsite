export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 text-xs leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground">CBDC LLC · Company No. 002064943 · 5830 E 2ND ST, STE 7000, CASPER, WY 82609</p>
          <p><a className="text-primary hover:underline" href="mailto:info@cbdc.ac">info@cbdc.ac</a></p>
          <p>CBDC is an independent information resource. It is not affiliated with any central bank or government. Content is general information, not financial, investment or legal advice.</p>
        </div>
      </div>
    </footer>
  )
}
