import type { Metadata } from "next"
import { Mail } from "lucide-react"
import { ContentPage, ContentSection, InfoCard } from "@/components/content-page"
import { Button } from "@/components/ui/button"
import { companyDetails } from "@/lib/company-details"

export const metadata: Metadata = {
  title: "Advertise or Sponsor — CBDC LLC",
  description:
    "Display advertising and clearly labelled sponsored-content opportunities from CBDC LLC, with terms that protect editorial independence.",
}

const opportunities = [
  {
    label: "Display advertising",
    title: "Relevant placements",
    description:
      "CBDC LLC offers display placements on appropriate pages as availability allows. Format, placement, schedule and any measurement are agreed in writing before a campaign begins. This page is not a rate card and does not promise impressions, traffic or results.",
  },
  {
    label: "Sponsored content",
    title: "Clearly disclosed partnerships",
    description:
      "CBDC LLC accepts proposals for relevant sponsored explainers or other written resources. Accepted paid content will be clearly labelled as Sponsored or Advertisement and will identify the sponsor. Sponsorship does not influence CBDC World Tracker classifications, status assessments, methodology or research conclusions.",
  },
]

const advertiserTerms = [
  {
    label: "Content standards",
    title: "Accurate, lawful and relevant",
    description:
      "Advertising and sponsored material must be lawful, accurate, substantiated, rights-cleared and appropriate for an independent information resource. CBDC LLC may request supporting evidence and may decline or remove material that is misleading, unlawful or unsuitable.",
  },
  {
    label: "Disclosure and independence",
    title: "Readers can identify paid content",
    description:
      "Paid content will carry a clear Sponsored or Advertisement label and identify the sponsor. Advertisers cannot buy or direct tracker classifications, status assessments, research methodology or editorial conclusions. CBDC LLC retains editorial control.",
  },
  {
    label: "Review and approval",
    title: "Written approval before publication",
    description:
      "Enquiries should include the advertiser identity, proposed material, supporting evidence, destination links, requested placement and schedule. Publication requires written acceptance and approval of the final copy and creative. An enquiry alone does not reserve inventory or constitute approval.",
  },
  {
    label: "Pricing and payment",
    title: "Agreed case by case",
    description:
      "Pricing, currency, deliverables, invoice timing, due dates, taxes, cancellation and any refund terms are set out in a written proposal or agreement. No rate, payment deadline or refund promise is created by this page; no public rate card is provided.",
  },
]

export default function AdvertisePage() {
  return (
    <ContentPage
      eyebrow="Commercial opportunities"
      title="Advertise or Sponsor"
      intro="CBDC LLC offers display advertising and sponsored content opportunities to organizations whose products or services are relevant to our readers. Availability, format, schedule and terms are confirmed individually in writing."
    >
      <ContentSection title="Opportunities">
        <div className="grid gap-4 md:grid-cols-2">
          {opportunities.map((opportunity) => (
            <InfoCard
              key={opportunity.label}
              label={opportunity.label}
              title={opportunity.title}
            >
              <p>{opportunity.description}</p>
            </InfoCard>
          ))}
        </div>
      </ContentSection>

      <div id="advertiser-terms" className="scroll-mt-24">
        <ContentSection title="Advertiser terms">
          <p className="mb-4 text-xs text-muted-foreground">Last updated: 28 October 2026</p>
          <div className="grid gap-4 md:grid-cols-2">
            {advertiserTerms.map((term) => (
              <InfoCard key={term.label} label={term.label} title={term.title}>
                <p>{term.description}</p>
              </InfoCard>
            ))}
          </div>
        </ContentSection>
      </div>

      <ContentSection title="Commercial enquiries">
        <p>
          To discuss a proposal, email {companyDetails.email}. CBDC LLC will review the request and confirm any accepted scope, pricing, approvals and payment arrangements in writing.
        </p>
        <Button
          className="mt-4"
          render={<a href={`mailto:${companyDetails.email}`} />}
          nativeButton={false}
        >
          <Mail data-icon="inline-start" />
          {companyDetails.email}
        </Button>
      </ContentSection>
    </ContentPage>
  )
}
