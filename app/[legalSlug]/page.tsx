import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LegalPage } from "@/components/legal-page"
import { getLegalDocument, legalDocuments } from "@/lib/legal-content"

export function generateStaticParams() {
  return legalDocuments.map(({ slug }) => ({ legalSlug: slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ legalSlug: string }> }): Promise<Metadata> {
  const { legalSlug } = await params
  const document = getLegalDocument(legalSlug)
  return document ? { title: `${document.title} | CBDC LLC`, description: document.description } : {}
}

export default async function PolicyPage({ params }: { params: Promise<{ legalSlug: string }> }) {
  const { legalSlug } = await params
  const document = getLegalDocument(legalSlug)
  if (!document) notFound()
  return <LegalPage document={document} />
}
