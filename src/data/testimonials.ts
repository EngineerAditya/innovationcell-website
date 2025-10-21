import type { TestimonialAuthor } from "@/components/ui/testimonial-card";

export interface Testimonial {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    author: {
      name: "Priya Sharma",
      role: "Founder, EduTech Solutions",
    },
    text: "MIC provided the perfect environment to transform our idea into a thriving business. The mentorship and resources were invaluable in our journey from concept to market.",
  },
  {
    author: {
      name: "Arjun Patel",
      role: "CEO, GreenEnergy Innovations",
    },
    text: "The collaborative ecosystem at MIC connected us with industry experts and investors who believed in our vision. We secured our seed funding within 6 months of joining.",
  },
  {
    author: {
      name: "Sneha Reddy",
      role: "Co-founder, HealthTech Labs",
    },
    text: "From ideation to prototype development, MIC's state-of-the-art facilities and support system accelerated our growth. We're now impacting thousands of lives.",
  },
  {
    author: {
      name: "Rahul Kumar",
      role: "Product Lead, FinTech Startup",
    },
    text: "The networking opportunities at MIC are unmatched. Every workshop, event, and mentorship session added tremendous value to our startup journey.",
  },
  {
    author: {
      name: "Ananya Iyer",
      role: "Founder, Social Impact Ventures",
    },
    text: "MIC doesn't just support startups—it nurtures a mindset of innovation and resilience. The community here has become our extended family.",
  },
  {
    author: {
      name: "Vikram Singh",
      role: "CTO, AI Solutions Inc",
    },
    text: "Access to cutting-edge technology and guidance from seasoned entrepreneurs helped us pivot quickly and find product-market fit within our first year.",
  },
];

/**
 * TO ADD A NEW TESTIMONIAL:
 * 1. Copy the template below
 * 2. Replace the placeholder text with actual testimonial content
 * 3. Add it to the testimonialsData array above
 * 
 * TEMPLATE:
 * {
 *   author: {
 *     name: "Full Name",
 *     role: "Position, Company Name",
 *     avatar: "/path/to/image.jpg", // Optional - if not provided, will show initial
 *   },
 *   text: "The testimonial text goes here. Keep it concise and impactful.",
 *   href: "https://linkedin.com/in/profile", // Optional - link to profile
 * },
 * 
 * TO EDIT: Simply find the testimonial in the array above and modify the text
 * TO REMOVE: Delete the entire object from the array (including the comma)
 */
