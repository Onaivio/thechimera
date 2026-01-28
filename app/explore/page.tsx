import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";
import { ExploreWaitlist } from "@/components/pages/ExploreWaitlist";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <ExploreWaitlist />
      </main>
      <Footer />
    </div>
  );
}
