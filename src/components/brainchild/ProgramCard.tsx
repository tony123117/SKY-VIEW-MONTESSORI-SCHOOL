import { Program } from "@/types/programcard";

export default function ProgramCard({ title, description, cta }: Program) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 w-full max-w-[422px] shadow-sm min-h-[266px]">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <a href="#" className="text-sm text-primary font-medium">
        {cta}
      </a>
    </div>
  );
}
