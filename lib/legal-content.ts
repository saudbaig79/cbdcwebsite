export type LegalSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LegalDocument = {
  slug: string
  title: string
  description: string
  category: string
  reviewed: string
  sections: LegalSection[]
}

const contact = "CBDC LLC, Company No. 002064943, 5830 E 2ND ST, STE 7000, CASPER, WY 82609. Contact: info@cbdc.ac."

export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description: "How CBDC LLC handles information when you browse, contact us, or use our research tools.",
    category: "Privacy and data",
    reviewed: "21 October 2026",
    sections: [
      { heading: "Scope", paragraphs: ["This policy applies to the public information resources, research tools, forms, and communications operated by CBDC LLC. It is written for general information and does not replace advice about your specific rights.", contact] },
      { heading: "Information we may receive", paragraphs: ["We may receive information you choose to send by email or through a form, such as your name, contact details, message, and the context needed to respond. Our hosting environment may also process ordinary technical information needed to deliver pages, protect services, diagnose faults, and understand aggregate usage.", "Please do not send sensitive personal information unless it is necessary for your enquiry."] },
      { heading: "Why we use information", bullets: ["To respond to enquiries and requests for corrections or accessibility support.", "To operate, secure, maintain, and improve the research resources.", "To understand broad usage patterns where analytics are enabled by the deployed configuration.", "To comply with legal obligations or protect the rights, safety, and integrity of the service."] },
      { heading: "Lawful bases", paragraphs: ["Where privacy law requires a lawful basis, the basis will depend on the context: responding to a request, pursuing legitimate interests in operating and improving an information resource, complying with a legal obligation, or obtaining consent where consent is required. We do not rely on consent where another lawful basis is more appropriate."] },
      { heading: "Cookies and third parties", paragraphs: ["The site may use essential technologies required for operation and may use analytics supplied through the deployed hosting configuration. Embedded media, maps, or external links can involve the provider receiving technical information when you interact with them. See the Cookie Policy for controls and the Third-Party Links & Sources policy for external services."] },
      { heading: "Sharing, retention, and security", paragraphs: ["We do not sell personal information. Information may be processed by service providers that host, secure, deliver, or support the site, subject to their own obligations. We retain enquiries and operational records only for as long as reasonably needed for the purpose collected, legal obligations, dispute handling, and service security. No internet transmission or storage method can be guaranteed completely secure."] },
      { heading: "Your choices and rights", paragraphs: ["Depending on where you live, you may have rights to access, correct, delete, restrict, object to, or receive a copy of personal information, and to withdraw consent where processing relies on consent. To exercise a right or ask a question, contact info@cbdc.ac. You may also have the right to complain to a relevant privacy regulator."] },
      { heading: "Children and international processing", paragraphs: ["The service is intended for a general audience and is not directed at children. We do not knowingly request personal information from children. Service providers may process information in countries different from yours; applicable providers are responsible for using appropriate safeguards where required."] },
    ],
  },
  {
    slug: "terms", title: "Terms of Use", description: "The rules for using the information, research, and tools provided by CBDC LLC.", category: "Website terms", reviewed: "21 October 2026", sections: [
      { heading: "Agreement and purpose", paragraphs: ["By using this service, you agree to these Terms of Use. The service provides general educational and research information about central bank digital currencies; it is not a financial, investment, legal, tax, or professional advisory service."] },
      { heading: "Permitted use", paragraphs: ["You may browse, quote, and share reasonable extracts for lawful, non-deceptive purposes with clear attribution. You must not misrepresent our research, imply endorsement, or use the service in a way that could damage its availability or security."] },
      { heading: "Your responsibilities", bullets: ["Use the service in compliance with applicable law.", "Do not attempt unauthorised access, interference, probing, or circumvention of security controls.", "Do not submit malicious code, unlawful material, or another person’s personal information without authority.", "Do not make abusive or disproportionate automated requests."] },
      { heading: "Content and availability", paragraphs: ["Research is prepared from public and third-party sources and may contain errors, omissions, delays, or classifications that change as evidence develops. We may update, suspend, or remove features without guaranteeing uninterrupted availability."] },
      { heading: "Intellectual property and external resources", paragraphs: ["Original content and presentation belong to their respective rights holders. Third-party names, marks, data, and linked material remain the property of their owners. External resources are provided for convenience and are not controlled or endorsed merely because they are referenced."] },
      { heading: "Changes and contact", paragraphs: ["We may revise these terms when the service or legal requirements change. The latest version will be published on this page. Questions may be sent to info@cbdc.ac. These terms are drafts for publication and should be reviewed by qualified counsel before being relied upon."] },
    ] },
  { slug: "cookies", title: "Cookie Policy", description: "A clear explanation of essential technologies, analytics, embedded content, and browser controls.", category: "Privacy and data", reviewed: "21 October 2026", sections: [
    { heading: "What cookies are", paragraphs: ["Cookies are small files or similar technologies stored by a browser. Some are necessary for a page or interaction to work; others can help measure use or remember preferences."] },
    { heading: "Categories", bullets: ["Essential technologies: required for core delivery, security, navigation, or requested functionality.", "Analytics technologies: may provide aggregated information about page performance and usage where enabled in the deployed configuration.", "Third-party content: video, mapping, or other embedded services may set or read technologies under their own policies when loaded or used."] },
    { heading: "Your controls", paragraphs: ["You can delete existing cookies and block future cookies through browser settings. Blocking essential technologies may affect functionality. Where consent is required, the relevant control should be presented before non-essential technologies are used; the available controls depend on the current deployment and your location."] },
    { heading: "More information", paragraphs: ["For questions about privacy or a particular technology, contact info@cbdc.ac. This policy should be checked against the final production configuration before publication so that named vendors and retention details are accurate."] },
  ] },
  { slug: "disclaimer", title: "Disclaimer", description: "Important limits on the use of CBDC LLC research and educational material.", category: "Website terms", reviewed: "21 October 2026", sections: [
    { heading: "General information only", paragraphs: ["The content is provided for education and general information. It does not constitute financial, investment, legal, tax, accounting, monetary-policy, or other professional advice, and it is not an offer or recommendation to buy, sell, hold, or use any financial product or service."] },
    { heading: "Accuracy and currency", paragraphs: ["We aim to present useful, attributed information, but public programmes change and source material can be incomplete, conflicting, translated, delayed, or withdrawn. A status, date, classification, or link should be independently checked before being used for a decision."] },
    { heading: "No affiliation", paragraphs: ["CBDC LLC is an independent information resource and is not affiliated with any central bank or government. References to organisations, products, programmes, or providers do not imply endorsement."] },
    { heading: "Use at your own judgement", paragraphs: ["You are responsible for assessing whether information is suitable for your circumstances and for obtaining professional advice when needed. To the extent permitted by law, CBDC LLC is not responsible for decisions made solely from general information on the service."] },
  ] },
  { slug: "research-methodology", title: "Research Methodology", description: "How the tracker approaches sources, classifications, updates, and uncertainty.", category: "Research and editorial", reviewed: "21 October 2026", sections: [
    { heading: "Purpose", paragraphs: ["The tracker organises publicly available information about central bank digital currency initiatives so readers can compare broad stages and follow meaningful changes. It is a research aid, not an official registry."] },
    { heading: "Sources and verification", paragraphs: ["Sources may include official central bank, government, legislative, programme, technical, academic, and reputable reporting materials. We seek primary material where available, compare significant claims, record source links, and avoid treating a single unverified statement as conclusive."] },
    { heading: "Classifications", paragraphs: ["Labels such as Research, Proof of concept, Pilot, Launched, and Cancelled are editorial classifications based on the available evidence. They simplify different national terminology and should not be read as legal or official designations."] },
    { heading: "Conflicting information and history", paragraphs: ["When sources disagree, the conflict may be noted or the most authoritative and recent evidence may be used with appropriate caution. Historical changes are recorded when the underlying information is available; a missing historical record does not mean that no earlier change occurred."] },
    { heading: "Limitations and updates", paragraphs: ["Coverage, timing, translations, source accessibility, and changing programme language create limitations. Records are updated as information is reviewed, without promising a fixed schedule. Readers can report an error or outdated item at info@cbdc.ac."] },
  ] },
  { slug: "editorial-policy", title: "Editorial Policy", description: "Standards for accuracy, attribution, independence, uncertainty, and review.", category: "Research and editorial", reviewed: "21 October 2026", sections: [
    { heading: "Accuracy and attribution", paragraphs: ["We aim to describe evidence fairly, use precise language, link to relevant sources, and distinguish sourced facts from editorial explanation. We correct material errors when identified."] },
    { heading: "Independence and conflicts", paragraphs: ["Editorial decisions are intended to serve readers rather than a central bank, vendor, political group, or commercial interest. Any material conflict known to affect a published item should be disclosed or managed. Sponsorship, if introduced, should not purchase a research conclusion."] },
    { heading: "Fact, analysis, and uncertainty", paragraphs: ["Factual claims, interpretation, and opinion should be distinguishable from one another. Where evidence is incomplete or contested, the wording should reflect uncertainty rather than create false precision."] },
    { heading: "Review", paragraphs: ["Research records and explanatory pages may be reviewed when new evidence, a correction request, or a material change comes to attention. The depth and timing of review depends on the significance and verifiability of the issue."] },
  ] },
  { slug: "corrections-policy", title: "Corrections Policy", description: "How to report errors, outdated information, and broken references.", category: "Research and editorial", reviewed: "21 October 2026", sections: [
    { heading: "Report an issue", paragraphs: ["Send a clear report to info@cbdc.ac with the page or record, the specific statement or link, what appears incorrect, and a reliable supporting source where possible. Reports about accessibility barriers are also welcome through the same address."] },
    { heading: "Review process", paragraphs: ["We may verify the report against primary material, compare other reliable sources, check the date and context, and contact the reporter for clarification. A report is not automatically accepted, and we do not promise a response time."] },
    { heading: "Material corrections", paragraphs: ["When a material error is confirmed, we may update the content, clarify the wording, repair the reference, add a note about the correction, or adjust an associated record. Minor typographical fixes may be made without a separate notice."] },
    { heading: "Good-faith requests", paragraphs: ["Please do not use the correction process to request favourable treatment or removal of accurate information. We consider evidence and editorial standards consistently."] },
  ] },
  { slug: "copyright", title: "Copyright & Intellectual Property", description: "Ownership, permitted reuse, attribution, and rights enquiries.", category: "Accessibility and intellectual property", reviewed: "21 October 2026", sections: [
    { heading: "Our content", paragraphs: ["Unless stated otherwise, original text, arrangement, interface design, and other materials created for CBDC LLC are protected by applicable intellectual property law. Ownership of a particular asset should not be assumed where third-party material is identified."] },
    { heading: "Permitted reuse", paragraphs: ["You may link to pages and quote reasonable excerpts for commentary, education, or reporting with accurate attribution and without suggesting endorsement. Do not reproduce a substantial part of the database or republish content as your own without permission."] },
    { heading: "Third-party material", paragraphs: ["Logos, names, datasets, photographs, reports, video, and quoted material may belong to third parties and may be subject to separate licences or terms. Check the relevant source before copying or redistributing them."] },
    { heading: "Rights enquiries", paragraphs: ["For permission requests, attribution questions, or a rights concern, contact info@cbdc.ac with the material, your intended use, and your relationship to the rights holder where relevant."] },
  ] },
  { slug: "accessibility", title: "Accessibility Statement", description: "Our current accessibility approach, known limitations, and how to report a barrier.", category: "Accessibility and intellectual property", reviewed: "21 October 2026", sections: [
    { heading: "Our approach", paragraphs: ["CBDC LLC aims to make its research readable and usable across common browsers, screen sizes, keyboard navigation, and assistive technologies. The interface uses semantic headings, labelled controls, responsive layouts, visible focus styles, and text alternatives where appropriate."] },
    { heading: "Known limitations", paragraphs: ["Accessibility can vary by page, browser, assistive technology, embedded third-party content, map interaction, and data visualisation. Some complex charts or external media may not provide an equivalent experience in every mode."] },
    { heading: "Report a barrier", paragraphs: ["Email info@cbdc.ac with the page, the barrier, the device or assistive technology involved if relevant, and an accessible alternative way to receive the information if you have one. We will use reports to guide improvements, but do not claim certification or conformance beyond what has been tested."] },
  ] },
  { slug: "external-links", title: "Third-Party Links & Sources", description: "How external references are used and what they mean for endorsement, privacy, and reliability.", category: "Accessibility and intellectual property", reviewed: "21 October 2026", sections: [
    { heading: "Why we link", paragraphs: ["External links help readers inspect primary evidence, locate further research, verify a claim, or access a referenced organisation. A link is provided for information and does not by itself indicate approval, partnership, or endorsement."] },
    { heading: "Third-party control", paragraphs: ["External sites and embedded services have their own content, security, accessibility, privacy practices, cookies, and availability. We do not control changes made after a link is published and cannot guarantee that an external page remains accurate or accessible."] },
    { heading: "Sources and attribution", paragraphs: ["We aim to identify sources fairly and preserve useful references. A source may be official, academic, journalistic, technical, or otherwise relevant; readers should consider its authority, date, methodology, and context."] },
    { heading: "Broken or changed links", paragraphs: ["Report a broken, misleading, or materially changed reference to info@cbdc.ac. We may repair, replace, annotate, or remove it after review."] },
  ] },
  { slug: "acceptable-use", title: "Acceptable Use Policy", description: "Uses that protect the service, its users, and the integrity of its research.", category: "Website terms", reviewed: "21 October 2026", sections: [
    { heading: "You may not use the service to", bullets: ["Break the law, facilitate fraud, harassment, abuse, or infringement of another person’s rights.", "Attempt unauthorised access, probe or bypass security, disrupt availability, or interfere with another user’s access.", "Upload or transmit malware, malicious code, destructive content, or credentials obtained without permission.", "Send abusive, deceptive, or disproportionate automated requests that impair the service.", "Scrape, copy, or republish substantial content in a way that violates applicable law or intellectual property rights."] },
    { heading: "Protecting the service", paragraphs: ["We may investigate suspected misuse, limit requests, suspend access to a feature, or preserve relevant information where reasonably necessary to protect the service, users, or legal rights. We do not promise to monitor every use or to provide advance notice in every circumstance."] },
    { heading: "Reporting misuse", paragraphs: ["Report suspected security or acceptable-use issues to info@cbdc.ac with enough detail to investigate safely. Do not include secrets or personal information that is not necessary."] },
  ] },
]

export const legalCentreCategories = [
  { title: "Website terms", slugs: ["terms", "disclaimer", "acceptable-use"] },
  { title: "Privacy and data", slugs: ["privacy", "cookies"] },
  { title: "Research and editorial standards", slugs: ["research-methodology", "editorial-policy", "corrections-policy"] },
  { title: "Accessibility and intellectual property", slugs: ["accessibility", "copyright", "external-links"] },
]

export function getLegalDocument(slug: string) {
  return legalDocuments.find((document) => document.slug === slug)
}
