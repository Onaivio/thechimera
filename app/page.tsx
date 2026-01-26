import { Articles } from "@/components/shared/Articles";
import ClientsV3 from "@/components/shared/ClientsV3";
import { EventsSection } from "@/components/shared/EventsSection";
import { FaqSection } from "@/components/shared/faq-section";
import { Footer } from "@/components/shared/Footer";
import { GallerySection } from "@/components/shared/GallerySection";
import { Header } from "@/components/shared/header";
import { Hero } from "@/components/shared/Hero";
import { Process } from "@/components/shared/Process";
import { Projects } from "@/components/shared/Projects";
import ServiceSection from "@/components/shared/service-section";
import { Services } from "@/components/shared/Services";
import { Showcase } from "@/components/shared/Showcase";
import { Testimonials } from "@/components/shared/Testimonials";
import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { ValueStatement } from "@/components/shared/ValueStatement";
import { VideoBanner } from "@/components/shared/VideoBanner";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fixed Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Large typography with hero image */}
        <Hero />

        {/* Events Section - Comprehensive events showcase */}
        {/* <EventsSection /> */}
        <ServiceSection />

        {/* Clients Marquee - Brand positioning */}
        <ClientsV3 />

        {/* Projects Section - Featured project carousel */}
        <Projects />

        {/* Services Section - Three column grid with icon cards */}
        {/* <Services /> */}

        {/* Process Section - Two column layout with steps */}
        <Process />

        {/* Showcase Section - Portfolio grid preview */}
        {/* <Showcase /> */}

        {/* Gallery Section */}
        {/* <GallerySection /> */}

        {/* Video Banner - Full width image with parallax */}
        {/* <VideoBanner /> */}

        {/* Testimonials Section - Client reviews with marquee */}
        <TestimonialsSection />

        <FaqSection  />

        {/* Articles Section - Blog grid in multiple layouts */}
        {/* <Articles /> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
