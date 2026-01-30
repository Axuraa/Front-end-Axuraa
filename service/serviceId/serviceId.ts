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

export interface ServiceApiResult {
  success: boolean;
  data?: ServiceItem;
  error?: string;
}

export const getServiceById = async (
  id: string,
  lang: 'en' | 'ar' = 'en'
): Promise<ServiceApiResult> => {
  try {
    const url = `${ENDPOINTS.Services.getById(id)}?lang=${lang}`;
    console.log('Calling API URL:', url);

    const response = await fetch(url, {
      method: 'GET',
    });

    const json = (await response.json()) as any;
    console.log('API Response:', json);
    console.log('Response status:', response.status, response.ok);

    if (!response.ok) {
      return {
        success: false,
        error: json?.message || `Failed to load service: ${response.status}`,
      };
    }

    const service = json?.data ?? null;
    console.log('Extracted service:', service);

    return {
      success: true,
      data: service,
    };
  } catch (error) {
    console.log('API call error:', error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred while loading the service',
    };
  }
};