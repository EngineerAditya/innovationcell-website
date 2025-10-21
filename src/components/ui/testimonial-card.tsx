import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  role: string;
  avatar?: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const CardContent = (
    <div
      className={cn(
        "group relative flex w-[350px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg sm:w-[400px]",
        className
      )}
    >
      {/* Quote Icon */}
      <div className="text-4xl text-gray-300">"</div>

      {/* Testimonial Text */}
      <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
        {text}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white font-semibold">
            {author.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-black">{author.name}</p>
          <p className="text-sm text-gray-600">{author.role}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
