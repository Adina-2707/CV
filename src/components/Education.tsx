import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section className="px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Education / Achievements" />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-border bg-white/30 p-7 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">Education</p>
            <h3 className="mt-4 text-2xl font-semibold text-charcoal">Engineering College Light Academy</h3>
            <p className="mt-3 text-lg text-muted">Cybersecurity</p>
            <p className="mt-2 text-base text-muted">2024–2027</p>
          </div>

          <div className="rounded-[28px] border border-border bg-ivory-soft/80 p-7 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">Achievements</p>
            <ul className="mt-4 space-y-3 text-base text-muted">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />Academic Achievement Certificate</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />3rd place in group ranking during the first semester</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />Final-year student in a 3-year program</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-border bg-white/30 p-7 shadow-soft">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">Languages</p>
          <div className="mt-5 space-y-3 text-base text-muted sm:flex sm:items-center sm:justify-start sm:gap-8 sm:space-y-0">
            <p>Russian — Fluent</p>
            <p>English — Intermediate–Upper-Intermediate</p>
            <p>Kyrgyz — Conversational · Strong comprehension</p>
          </div>
        </div>
      </div>
    </section>
  );
}
