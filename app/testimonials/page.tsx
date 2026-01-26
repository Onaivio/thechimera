import { TestimonialsSection } from "@/components/shared/TestimonialsSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";
import React from "react";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-light mb-6 uppercase tracking-tight">
                Words From Our Clients
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed">
                Because the best stories come from those who&apos;ve experienced Chimera.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}
