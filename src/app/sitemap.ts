import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/coaching", priority: 0.95, changeFrequency: "weekly" as const },
    {
      path: "/transformations",
      priority: 0.85,
      changeFrequency: "weekly" as const,
    },
    { path: "/resources", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.95, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
