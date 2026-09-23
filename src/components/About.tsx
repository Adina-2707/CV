import SectionHeading from './SectionHeading';

const infoCards = [
  {
    title: 'Education',
    value: 'Engineering College Light Academy',
    meta: 'Cybersecurity · 2024–2027',
  },
  {
    title: 'Based in',
    value: 'Bishkek, Kyrgyzstan',
    meta: '',
  },
  {
    title: 'Focus',
    value: 'Cybersecurity · Technology · Project Management',
    meta: '',
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About me" />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
          <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
            <p>
              I&apos;m a third-year Cybersecurity student at Engineering College Light Academy in Bishkek.
              Alongside my technical education, I have developed practical experience in project coordination,
              social media management, student entrepreneurship and leadership.
            </p>
            <p>
              I enjoy working at the intersection of technology, creativity and people. My current interests
              include cybersecurity, computer networks, digital projects and project management.
            </p>
          </div>

          <div className="space-y-4">
            {infoCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-border bg-white/30 p-5 shadow-soft">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">{card.title}</p>
                <p className="mt-3 text-base font-medium text-charcoal">{card.value}</p>
                {card.meta ? <p className="mt-1 text-sm text-muted">{card.meta}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
