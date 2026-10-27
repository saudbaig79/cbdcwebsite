import Image from "next/image"
import { ExternalLink } from "lucide-react"

const sponsors = [
  {
    name: "Amazon",
    href: "https://www.amazon.com/",
    logo: "/logos/sponsors/amazon.svg",
    width: 603,
    height: 182,
  },
  {
    name: "CaixaBank",
    href: "https://www.caixabank.com/",
    logo: "/logos/sponsors/caixabank.svg",
    width: 24,
    height: 24,
  },
  {
    name: "Visa",
    href: "https://www.visa.com/",
    logo: "/logos/sponsors/visa.svg",
    width: 24,
    height: 24,
  },
  {
    name: "Google Pay",
    href: "https://pay.google.com/about/",
    logo: "/logos/sponsors/google-pay.svg",
    width: 24,
    height: 24,
  },
  {
    name: "Santander",
    href: "https://www.santander.com/",
    logo: "/logos/sponsors/santander.svg",
    width: 400,
    height: 90,
  },
]

export function SponsorSection() {
  return (
    <section id="sponsors" aria-labelledby="sponsors-heading" className="scroll-mt-24">
      <div className="grid gap-3 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Supporters</p>
          <h2 id="sponsors-heading" className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
            Our Sponsors
          </h2>
        </div>
        <div className="max-w-2xl space-y-3 text-sm leading-7 text-muted-foreground">
          <p>
            We are grateful to the organisations that support independent research and plain-English information about central bank digital currencies.
          </p>
          <p>
            Please support our sponsors — their support helps us keep this resource free and independent.
          </p>
        </div>
      </div>

      <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        {sponsors.map((sponsor) => (
          <li key={sponsor.name}>
            <a
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${sponsor.name} website (opens in a new tab)`}
              className="group flex h-full min-h-36 flex-col items-center justify-between gap-3 rounded-xl border border-border bg-card/60 p-4 text-center transition-colors hover:border-primary/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="flex min-h-16 w-full items-center justify-center rounded-lg bg-white px-4 py-3">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="h-10 w-auto max-w-full object-contain"
                />
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                {sponsor.name}
                <ExternalLink className="size-3.5 text-muted-foreground" aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
