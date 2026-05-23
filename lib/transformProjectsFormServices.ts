// utils/transformProjectsFromServices.ts
import { ServiceItem } from "@/service/Services/services";

export interface TransformedProject {
  id: string;
  title: string;
  category: string; // ← this will be the service title (plain string)
  percentage: string;
  description: string;
  imageUrl: string;
}

export function buildProjectsFromServices(services: ServiceItem[]): TransformedProject[] {
  const seen = new Set<string>();
  const result: TransformedProject[] = [];

  for (const service of services) {
    for (const { projects_id } of service.projects ?? []) {
      const id = projects_id.title; // use title as dedup key (no _id on nested)

      if (seen.has(id)) continue; // avoid duplicates across services
      seen.add(id);

      result.push({
        id,
        title: projects_id.title,
        category: service.title, // ← plain string, matches filter buttons exactly
        percentage: projects_id.case_study_results?.[0]?.value || "+50%",
        description: projects_id.case_study_results?.[0]?.description || "Project description",
        imageUrl: projects_id.main_image_url || "/assets/ProjectImage.png",
      });
    }
  }

  return result;
}