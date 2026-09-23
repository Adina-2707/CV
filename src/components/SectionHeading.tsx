type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-charcoal sm:text-4xl">{title}</h2>
    </div>
  );
}
