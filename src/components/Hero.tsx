import { ArrowRight, Download } from 'lucide-react';
import { cvPdfUrl } from '../data/site';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-10">
        <div className="max-w-3xl animate-reveal">
          <div className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Cybersecurity Student
          </div>

          <h1 className="text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-charcoal sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Adina.
          </h1>

          <p className="mt-5 text-xl font-medium text-charcoal sm:text-2xl">
            Cybersecurity Student
            <span className="mx-2 text-gold">·</span>
            Project Management
            <span className="mx-2 text-gold">·</span>
            Technology
            <span className="mx-2 text-gold">·</span>
            Digital Projects
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Third-year Cybersecurity student building experience across technology, student projects,
            digital media and team leadership.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-ivory transition hover:bg-charcoal/90"
            >
              View my projects
              <ArrowRight size={16} />
            </a>
            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/40 px-6 py-3 text-sm font-medium text-charcoal transition hover:border-gold/60 hover:text-gold"
            >
              Download CV
              <Download size={16} />
            </a>
          </div>
        </div>

        <div className="hidden min-w-[240px] flex-1 items-center justify-center lg:flex">
          <div className="relative flex h-72 w-72 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-gold/60" />
            <div className="absolute inset-5 rounded-full border border-border" />
            <div className="absolute h-40 w-40 rounded-full border border-gold/40" />
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-ivory-soft text-sm font-medium uppercase tracking-[0.25em] text-charcoal">
              ADINA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
