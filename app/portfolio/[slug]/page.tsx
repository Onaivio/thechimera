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

const PortfolioDetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      {/* Fixed Navigation Header */}
      <Header />
      <PortfolioDetail slug={params.slug} />
      {/* Footer with CTA and links */}
      <Footer />
    </div>
  );
};

export default PortfolioDetailPage;
