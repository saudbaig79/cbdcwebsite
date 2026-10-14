import { Building2, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] md:items-start">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold tracking-tight text-foreground">CBDC LLC</p>
              <p className="mt-1 text-xs text-muted-foreground">Independent digital currency research and information</p>
            </div>
            <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
              CBDC is an independent information resource. It is not affiliated with any central bank or government. Content is general information, not financial, investment or legal advice.
            </p>
          </div>

          <div className="grid gap-3 text-xs text-muted-foreground sm:grid-cols-2 md:grid-cols-1">
            <div className="flex items-start gap-3">
              <Building2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">CBDC LLC</p>
                <p className="mt-0.5">Company No. 002064943</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <address className="not-italic leading-relaxed">5830 E 2ND ST, STE 7000<br />CASPER, WY 82609</address>
            </div>
            <div className="flex items-center gap-3 sm:col-span-2 md:col-span-1">
              <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a className="font-medium text-primary underline-offset-4 hover:underline" href="mailto:info@cbdc.ac">info@cbdc.ac</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/70 pt-4 text-[11px] text-muted-foreground">
          <p>CBDC LLC · Company No. 002064943 · Casper, Wyoming</p>
        </div>
      </div>
    </footer>
  )
}
