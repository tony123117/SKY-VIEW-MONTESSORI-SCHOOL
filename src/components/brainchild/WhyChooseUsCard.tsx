import { WhyChooseUsCardProps } from "@/types/whychooseuscard";

export default function WhyChooseUsCard({
  number,
  title,
  description,
}: WhyChooseUsCardProps) {
  return (
    <div className="relative bg-card border border-border rounded-2xl p-6 pt-8 shadow-sm">
      <div className="absolute -top-5 right-0 bg-primary text-primary-foreground w-12 h-12 rounded-[27px] flex items-center justify-center font-semibold shadow-md p-10 border border-foreground text-[44px]">
        {number}
      </div>
      <h3 className="text-[22px] mb-2 max-w-[194px]">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
