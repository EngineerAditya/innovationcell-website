import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import type { TestimonialAuthor } from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className={cn(
        "bg-white text-black",
        "px-0 py-12 sm:py-24 md:py-32",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-600 sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            {/* First set of testimonials */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={`set1-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row" aria-hidden="true">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={`set2-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white" />
        </div>
      </div>
    </section>
  );
}
