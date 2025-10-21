"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc space-y-2">
                <li>
                  <span className="font-bold">Phone: </span>
                  <a href={`tel:${phone}`} className="hover:underline">
                    {phone}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline hover:no-underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto w-full max-w-screen-md flex-col gap-6 rounded-lg border p-6 sm:p-10">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email-input">Email</Label>
                <Input
                  type="email"
                  id="email-input"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  aria-required="true"
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  placeholder="Type your message here. Tell us about your idea, question, or collaboration opportunity..."
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                />
              </div>
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
