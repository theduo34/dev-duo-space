'use client';

export default function StackCard({tech}: {tech: string}) {
  return (
    <span
      key={tech}
      className="px-3 py-1 text-xs border rounded-md bg-muted text-muted-foreground font-medium hover:bg-muted/80 transition-colors"
    >
      {tech}
    </span>
  );
}