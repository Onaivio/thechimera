import type { MetadataRoute } from "next";

function siteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000";
  return raw.replace(/\/+$/, "");
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
