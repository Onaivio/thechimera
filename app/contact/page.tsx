import { Contact } from "@/components/pages/Contact";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      {/* Fixed Navigation Header */}
      <Header />
      <Contact />
      {/* Footer with CTA and links */}
      <Footer />
    </div>
  );
};

export default ContactPage;
