// lib/transformProjects.ts
import { ProjectItem } from "@/service/Projects/projects";
import { ServiceItem } from "@/service/Services/services";

export interface TransformedProject {
    id: string;
    title: string;
    subTitle: string;
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
    // Map service _id → subtitle
    const serviceSubtitleMap = new Map<string, string>();
    for (const service of services) {
        serviceSubtitleMap.set(service._id, service.subtitle || service.title || 'General');
    }

    return projects.map(project => {
        const firstServiceId = project.services?.[0]?.services_id?._id;
        const category = firstServiceId
            ? serviceSubtitleMap.get(firstServiceId) || 'General'
            : 'General';

        return {
            id:          project._id,
            title:       getString(project.title, locale) || 'Untitled',
            subTitle:    getString(project.subTitle, locale) || '',
            category,
            percentage:  project.case_study_results?.[0]?.value || '+50%',
            description: getString(project.case_study_results?.[0]?.description, locale) || 'Project description',
            imageUrl:    project.main_image_url || '/assets/ProjectImage.png',
        };
    });
}