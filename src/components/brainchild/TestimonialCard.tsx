import { Testimonial } from "@/types/testimonialcard";

export function TestimonialCard({
  testimonial,
  profileImage,
  name,
  description,
}: Testimonial) {
  return (
    <div className="w-full h-[248px] rounded-[20px] p-10 flex flex-col gap-5 shadow-sm bg-card">
      <p>{testimonial}</p>
      <div className="flex items-center mt-auto">
        <img
          src={profileImage}
          alt={name}
          className="w-[60px] h-[60px] rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
