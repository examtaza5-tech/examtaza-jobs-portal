import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const states = [
  "andhra-pradesh","arunachal-pradesh","assam","bihar","chhattisgarh","goa","gujarat",
  "haryana","himachal-pradesh","jharkhand","karnataka","kerala","madhya-pradesh",
  "maharashtra","manipur","meghalaya","mizoram","nagaland","odisha","punjab","rajasthan",
  "sikkim","tamil-nadu","telangana","tripura","uttar-pradesh","uttarakhand","west-bengal",
  "andaman-and-nicobar-islands","chandigarh","dadra-and-nagar-haveli-and-daman-and-diu",
  "delhi","jammu-and-kashmir","ladakh","lakshadweep","puducherry",
];

const paths = [
  "/", "/latest-jobs", "/admit-card", "/results", "/answer-key", "/syllabus",
  "/admission", "/state-jobs", "/about", "/contact", "/privacy-policy",
  "/disclaimer", "/terms", "/sitemap",
  ...states.map((s) => `/state-jobs/${s}`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
