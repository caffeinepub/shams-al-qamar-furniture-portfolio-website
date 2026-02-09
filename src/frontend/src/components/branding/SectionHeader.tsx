interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
