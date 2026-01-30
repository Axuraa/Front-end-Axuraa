import { ENDPOINTS } from '../api/APIs';

export interface LocalizedField {
  en: string;
  ar: string;
}

export interface ServiceUnit {
  en: string;
  ar: string;
}

export interface ServiceItem {
  _id: string;
  icon?: string;
  title: LocalizedField;
  subtitle?: LocalizedField;
  description: LocalizedField;
  what_we_do?: {
    description?: LocalizedField;
    units?: ServiceUnit[];
  };
  description_features?: LocalizedField;
  description_stories?: LocalizedField;
  type?: string;
  is_active?: boolean;
}

export interface ServicesApiResult {
  success: boolean;
  data?: ServiceItem[];
  error?: string;
}

export const getAllServices = async (
  lang: 'en' | 'ar' = 'en'
): Promise<ServicesApiResult> => {
  try {
    const url = `${ENDPOINTS.Services.getAll}?lang=${lang}`;

    const response = await fetch(url, {
      method: 'GET',
    });

    const json = (await response.json()) as any;

    if (!response.ok) {
      return {
        success: false,
        error: json?.message || `Failed to load services: ${response.status}`,
      };
    }

    // IMPORTANT: match your real response: data is an ARRAY
    const services: ServiceItem[] = Array.isArray(json?.data) ? json.data : [];

    return {
      success: true,
      data: services,
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred while loading services',
    };
  }
};