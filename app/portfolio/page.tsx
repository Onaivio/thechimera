import { Portfolio } from "@/components/pages/portfolio";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";
import React from "react";

const PortfolioPage = () => {
  return (
    <div>
      {/* Fixed Navigation Header */}
      <Header />
      <Portfolio />
      {/* Footer with CTA and links */}
      <Footer />
    </div>
  );
};

export default PortfolioPage;
