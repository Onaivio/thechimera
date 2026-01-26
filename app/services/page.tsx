import { ServicesPage } from "@/components/pages/services";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";
const Services = () => {
  return (
    <div>
      {/* Fixed Navigation Header */}
      <Header />
      <ServicesPage />
      {/* Footer with CTA and links */}
      <Footer />
    </div>
  );
};

export default Services;
