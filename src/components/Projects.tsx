import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Dev Club Hub',
    category: 'Technical Project · Project Management',
    description: 'Student platform for students, mentors and companies.',
    role: 'Project Management & Technical Coordination',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Railway', 'Vercel'],
    linkLabel: 'Case study',
    linkUrl: '#',
    accent: 'border-gold/40 bg-gradient-to-br from-ivory-soft to-white/60',
  },
  {
    title: 'EcoBrew',
    category: 'Enactus · Environmental Project',
    description: 'An environmental project focused on repurposing used coffee grounds and organic waste.',
    role: 'Project Team · PR · Development',
    tech: [],
    linkLabel: 'Case study',
    linkUrl: '#',
    accent: 'border-border bg-ivory-soft/70',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Technical Projects" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group rounded-[28px] border bg-white/30 p-6 shadow-soft sm:p-8 ${project.accent}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">{project.category}</span>
                <span className="rounded-full border border-border bg-white/50 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-muted">
                  {project.title === 'Dev Club Hub' ? '01' : '02'}
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-charcoal">{project.title}</h3>

              <p className="mt-4 text-base leading-7 text-muted">{project.description}</p>

              <div className="mt-6 rounded-2xl border border-border bg-white/40 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">Role</p>
                <p className="mt-2 text-base text-charcoal">{project.role}</p>
              </div>

              {project.tech.length > 0 ? (
                <div className="mt-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">Tech</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded-full border border-border bg-white/40 px-3 py-1.5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <a
                  href={project.linkUrl}
                  target={project.linkUrl.startsWith('http') ? '_blank' : undefined}
                  rel={project.linkUrl.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm font-medium text-charcoal transition group-hover:text-gold"
                >
                  {project.linkLabel}
                  <ArrowUpRight size={16} />
                </a>

                {project.title === 'EcoBrew' ? (
                  <div className="flex h-24 w-32 items-center justify-center rounded-2xl border border-dashed border-border bg-white/30 text-xs uppercase tracking-[0.18em] text-muted">
                    Image
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
