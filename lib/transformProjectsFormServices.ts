// lib/transformProjects.ts
import { ProjectItem } from "@/service/Projects/projects";
import { ServiceItem } from "@/service/Services/services";

export interface TransformedProject {
    id: string;
    title: string;
    category: string;
    percentage: string;
    description: string;
    imageUrl: string;
}

// Handles both plain strings and LocalizedField objects
function getString(field: unknown, locale: 'en' | 'ar'): string {
    if (!field) return '';
    if (typeof field === 'string') return field;
    if (typeof field === 'object') {
        const f = field as Record<string, string>;
        return f[locale] || f['en'] || Object.values(f)[0] || '';
    }
    return '';
}

export function transformProjects(
    projects: ProjectItem[],
    services: ServiceItem[],
    locale: 'en' | 'ar' = 'en'
): TransformedProject[] {
    const serviceTitleMap = new Map<string, string>();
    for (const service of services) {
        serviceTitleMap.set(service._id, getString(service.title, locale));
    }

    return projects.map(project => {
        const firstService = project.services?.[0]?.services_id;
        const category = firstService
            ? serviceTitleMap.get(getString(firstService._id, locale))
              || getString(firstService.title, locale)
              || 'General'
            : 'General';

        return {
            id:          project._id,
            title:       getString(project.title, locale) || 'Untitled',
            category,
            percentage:  project.case_study_results?.[0]?.value || '+50%',
            description: getString(project.case_study_results?.[0]?.description, locale) || 'Project description',
            imageUrl:    project.main_image_url || '/assets/ProjectImage.png',
        };
    });
}