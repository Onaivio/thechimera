import { PortfolioDetail } from "@/components/pages/portfolio-detail";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/header";
import { getAllProjects } from "@/data/projects";
import React from "react";

// Generate static params for static export
export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      {/* Fixed Navigation Header */}
      <Header />
      <PortfolioDetail slug={slug} />
      {/* Footer with CTA and links */}
      <Footer />
    </div>
  );
}
