import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://github.com/pkdam2302"; // Replace with live URL on deployment

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
