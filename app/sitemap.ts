import type { MetadataRoute } from "next";
import { getAllProjects } from "@/data/projects";
import { getAllServices } from "@/data/services";

export const dynamic = "force-static";

function siteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000";
  return raw.replace(/\/+$/, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/events",
    "/testimonials",
    "/contact",
    "/consultation",
    "/explore",
  ];

  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const portfolioPages: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...servicePages, ...portfolioPages];
}
