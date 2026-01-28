import { notFound } from "next/navigation";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";
import { ServiceDetail } from "@/components/pages/service-detail";
import { getAllServices, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <div>
      <Header />
      <ServiceDetail service={service} />
      <Footer />
    </div>
  );
}
