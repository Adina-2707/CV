import SectionHeading from './SectionHeading';

const experienceItems = [
  {
    name: 'ENACTUS ENGINEERING COLLEGE',
    role: 'Vice Captain | PR & Project Team',
    period: 'Oct 2025 — Present',
    description:
      'Coordinate PR and project-related activities within a student entrepreneurship team. Plan content workflows, coordinate team members and contribute to student projects and competitions.',
  },
  {
    name: 'SMM — PERSONAL BRAND',
    role: 'SMM Specialist',
    period: '2026 — Present',
    description:
      'Manage social media content and weekly publishing workflows, create Reels and posts, develop content ideas and coordinate content production with the client.',
  },
  {
    name: 'KELECHEK NOVA EDUCATIONAL CENTER',
    role: 'SMM Specialist',
    period: '2026',
    description:
      'Managed daily Stories, developed Reels and promotional content, edited videos and supported the promotion of educational programs.',
  },
  {
    name: 'VI WORLD NOMAD GAMES 2026',
    role: 'Volunteer',
    period: '2026',
    description:
      'Participated as a volunteer at the VI World Nomad Games 2026, supporting event-related activities, communication and coordination as part of a volunteer team.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-border bg-white/20 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Experience" />

        <div className="relative mt-12 space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border lg:ml-8">
          {experienceItems.map((item) => (
            <article key={`${item.name}-${item.period}`} className="relative pl-12">
              <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-gold bg-ivory text-gold">
                <span className="h-2.5 w-2.5 rounded-full bg-gold" />
              </span>

              <div className="rounded-2xl border border-border bg-ivory-soft/80 p-6 shadow-soft">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">{item.name}</p>
                    <h3 className="mt-3 text-xl font-semibold text-charcoal">{item.role}</h3>
                  </div>
                  <p className="text-sm font-medium text-muted">{item.period}</p>
                </div>

                <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
