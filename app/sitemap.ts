import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dev-tool-box-murex.vercel.app";
  const currentDate = new Date();

  // High-priority tool pages with detailed metadata
  const primaryTools = [
    { slug: "json-formatter", priority: 0.9, changeFreq: "weekly" as const },
    { slug: "regex-tester", priority: 0.9, changeFreq: "weekly" as const },
    { slug: "base64-encoder", priority: 0.9, changeFreq: "weekly" as const },
    { slug: "jwt-decoder", priority: 0.9, changeFreq: "weekly" as const },
    { slug: "url-encoder", priority: 0.9, changeFreq: "weekly" as const },
    { slug: "timestamp-converter", priority: 0.9, changeFreq: "weekly" as const },
  ];

  const toolPages = primaryTools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: currentDate,
    changeFrequency: tool.changeFreq,
    priority: tool.priority,
  }));

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    // All tool pages
    ...toolPages,
  ];
}
