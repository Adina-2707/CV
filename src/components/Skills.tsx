import SectionHeading from './SectionHeading';

const skillGroups = [
  {
    title: 'Cybersecurity',
    items: ['Cybersecurity Fundamentals', 'Computer Networks', 'Security Concepts'],
  },
  {
    title: 'Technical',
    items: ['Linux', 'PostgreSQL', 'Git / GitHub', 'Database Fundamentals', 'Web Technologies'],
  },
  {
    title: 'Professional',
    items: ['Project Management', 'Team Coordination', 'Communication', 'Problem Solving', 'Organization'],
  },
  {
    title: 'Digital',
    items: ['Social Media Management', 'Content Planning', 'Reels', 'Video Editing', 'Visual Content'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-border bg-white/20 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-ivory-soft/80 p-6 shadow-soft">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">{group.title}</p>
              <ul className="mt-5 space-y-3 text-base text-charcoal">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
