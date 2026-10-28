export function SponsorSection() {
  return (
    <section id="advertising" aria-labelledby="advertising-heading" className="scroll-mt-24">
      <div className="grid gap-3 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-end">
        <h2 id="advertising-heading" className="text-2xl font-semibold tracking-tight text-foreground">
          Advertise or sponsor
        </h2>
        <div className="grid gap-3 text-sm leading-7 text-muted-foreground">
          <p>
            We offer display advertising and sponsored content to organisations relevant to our readers.
          </p>
          <p>
            Sponsored content is always clearly labelled and does not influence our research or tracker data.
          </p>
          <p>
            To enquire about advertising or sponsorship opportunities, contact us at{" "}
            <a className="font-medium text-primary underline-offset-4 hover:underline" href="mailto:info@cbdc.ac">
              info@cbdc.ac
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
