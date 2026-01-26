import { EventsSection } from "@/components/shared/EventsSection";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";
import React from "react";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-7xl font-light mb-6 uppercase tracking-tight">
                Our Events
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed">
                From intimate celebrations to grand destination events, we create refined, unforgettable experiences that reflect your vision.
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <EventsSection />
      </main>

      <Footer />
    </div>
  );
}
