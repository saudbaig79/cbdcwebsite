import type { Metadata } from "next"
import { BookOpenText, CircleDollarSign, UsersRound } from "lucide-react"
import { ContentPage, ContentSection, InfoCard } from "@/components/content-page"
import { SponsorSection } from "@/components/sponsor-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About CBDC LLC",
  description:
    "CBDC LLC is an independent digital-currency research and information company. We publish plain-English guides, country and project trackers, and updates.",
}

const sectionLinks = [
  { href: "#founder", label: "Founder" },
  { href: "#our-role", label: "Our role" },
  { href: "#important", label: "Important" },
  { href: "#company-details", label: "Company details" },
  { href: "#services", label: "Services & funding" },
  { href: "#sponsors", label: "Our sponsors" },
]

const services = [
  {
    title: "Research and information",
    description:
      "CBDC LLC operates an independent digital-currency research and information website. Our main services are educational articles, research, and searchable tracking information about central bank digital currencies.",
    Icon: BookOpenText,
  },
  {
    title: "Our readers",
    description:
      "We reach readers interested in finance, technology, policy and business through our website and online content.",
    Icon: UsersRound,
  },
  {
    title: "Funding",
    description:
      "We earn revenue through advertising and sponsored articles. This support allows us to keep the core research and tracking information free for the public.",
    Icon: CircleDollarSign,
  },
]

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About CBDC LLC"
      title="Who we are"
      intro="CBDC LLC is an independent digital-currency research and information company. We research central bank digital currency developments and publish plain-English guides, country and project trackers, and updates explaining what these developments may mean for individuals and businesses."
    >
      <nav aria-label="About page sections" className="flex flex-wrap gap-2">
        {sectionLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div id="founder" className="scroll-mt-24">
        <ContentSection title="Founder">
          <InfoCard label="Founder and managing member" title="Tristan Marsh">
            <p>
              Tristan Marsh is the founder and managing member of CBDC LLC. He leads the company&rsquo;s day-to-day work, including researching developments in the CBDC sector and publishing accessible articles and information for readers.
            </p>
          </InfoCard>
        </ContentSection>
      </div>

      <div id="our-role" className="scroll-mt-24">
        <ContentSection title="Our role">
          <p>
            CBDC LLC is an independent information resource. It is not affiliated with any central bank or government. Content is general information, not financial, investment or legal advice.
          </p>
        </ContentSection>
      </div>

      <div id="important" className="scroll-mt-24">
        <ContentSection title="Important">
          <p className="max-w-4xl text-foreground">
            CBDC LLC does not issue, sell, exchange, hold or transmit any digital currency, cryptoasset or token, and does not handle client funds.
          </p>
        </ContentSection>
      </div>

      <div id="company-details" className="scroll-mt-24">
        <ContentSection title="Company details">
          <dl className="divide-y divide-border rounded-xl border border-border bg-card/50 px-5">
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-xs font-medium text-muted-foreground">Legal name</dt>
              <dd className="text-sm font-medium text-foreground">CBDC LLC</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-xs font-medium text-muted-foreground">Company / Filing ID</dt>
              <dd className="text-sm font-medium text-foreground">2026-002064943</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-xs font-medium text-muted-foreground">Address</dt>
              <dd className="text-sm leading-6 text-foreground">
                5830 E 2nd St, Ste 7000 #38378, Casper, WY 82609, USA
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-xs font-medium text-muted-foreground">Email</dt>
              <dd>
                <a
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  href="mailto:info@cbdc.ac"
                >
                  info@cbdc.ac
                </a>
              </dd>
            </div>
          </dl>
        </ContentSection>
      </div>

      <div id="services" className="scroll-mt-24">
        <ContentSection title="Services & how we’re funded">
          <div className="grid gap-4 md:grid-cols-3">
            {services.map(({ title, description, Icon }) => (
              <Card key={title} className="h-full border-border/80 bg-card/60">
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ContentSection>
      </div>

      <SponsorSection />
    </ContentPage>
  )
}
