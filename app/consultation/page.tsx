import { Consultation } from "@/components/pages/Consultation";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
