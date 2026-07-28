import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://github.com/pkdam2302"; // Replace with live URL on deployment
  
  const routes = ["", "/about", "/projects", "/blog", "/services", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
