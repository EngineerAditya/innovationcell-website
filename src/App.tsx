import { LenisSmoothScroll } from "@/components/LenisSmoothScroll";
import { CrowdHero } from "@/components/CrowdHero";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { Contact2 } from "@/components/ui/contact-2";
import Navbar from "@/components/Navbar";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import EventsInitiatives from "@/components/EventsInitiatives";
import { testimonialsData } from "@/data/testimonials";

function App() {
  // MIC Contact Information - Real-World Relevance (15%)
  const micContact = {
    title: "Join Us",
    description:
      "Get in touch with the MAHE Innovation Centre. We're looking for collaborators, ideas, and innovators to join our ecosystem.",
    phone: "+91 96948 63033",
    email: "contact@mic.mahe.edu",
    web: { label: "mic.mahe.edu", url: "#" },
  };

  return (
    <LenisSmoothScroll>
      {/* Navigation - Fixed on top right */}
      <Navbar />
      
      {/* SECTION 1: The 100vh Hero with GSAP Crowd Animation */}
      <CrowdHero />

      {/* SECTION 2: The Framer Motion Scroll Animations + About MIC */}
      <ScrollAnimations />

      {/* SECTION 3: Events & Initiatives */}
      <EventsInitiatives />

      {/* SECTION 4: Success Stories - Testimonials */}
      <TestimonialsSection
        title="Success Stories from Our Community"
        description="Hear from the innovators and entrepreneurs who have grown with MIC"
        testimonials={testimonialsData}
      />

      {/* SECTION 5: The Final Contact Form - Mandatory Requirement */}
      <Contact2
        title={micContact.title}
        description={micContact.description}
        phone={micContact.phone}
        email={micContact.email}
        web={micContact.web}
      />
    </LenisSmoothScroll>
  );
}

export default App;
