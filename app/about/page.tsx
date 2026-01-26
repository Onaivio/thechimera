import { About } from "@/components/pages/about";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      {/* Fixed Navigation Header */}
      <Header />
      <About />
      {/* Footer with CTA and links */}
      <Footer />
    </div>
  );
};

export default AboutPage;
