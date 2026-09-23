import { Instagram, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { socialLinks } from '../data/site';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const socialItems = [
    { label: 'Instagram', href: socialLinks.instagram, icon: Instagram },
    { label: 'Telegram', href: socialLinks.telegram, icon: Send },
    { label: 'LinkedIn', href: socialLinks.linkedin, icon: Linkedin },
  ];

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Let&apos;s connect." align="center" />

        <div className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-muted sm:text-lg">
          I&apos;m open to internships, student projects, digital collaborations, and opportunities in cybersecurity,
          technology and project coordination.
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-border bg-white/30 p-7 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">Email</p>
            <a href="mailto:adinaduishobecova@gmail.com" className="mt-3 block text-lg font-medium text-charcoal transition hover:text-gold">
              adinaduishobecova@gmail.com
            </a>
          </div>

          <div className="rounded-[28px] border border-border bg-white/30 p-7 shadow-soft">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">Phone</p>
            <a href="tel:+996502080677" className="mt-3 block text-lg font-medium text-charcoal transition hover:text-gold">
              +996 502 080 677
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {socialItems.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/40 px-5 py-3 text-sm font-medium text-charcoal transition hover:border-gold/60 hover:text-gold"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-charcoal">
          <Mail size={16} className="text-gold" />
          <span className="text-sm uppercase tracking-[0.2em] text-muted">Open for opportunities</span>
        </div>
      </div>
    </section>
  );
}
