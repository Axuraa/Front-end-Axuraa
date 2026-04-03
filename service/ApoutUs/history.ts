import { ENDPOINTS } from '../api/APIs';
import { HistoryJourneyData } from '@/types/AboutUsPage/History/JourneyTypes';

/**
 * Response type for history API
 */
export interface HistoryResponse {
  success: boolean;
  data?: HistoryJourneyData;
  message?: string;
  error?: string;
}

/**
 * Get history data from the API
 * @param locale Optional locale for localized data
 */
export const getHistory = async (lang: string = 'en'): Promise<HistoryResponse> => {
  try {
    const url = `${ENDPOINTS.AboutUs.history}?lang=${lang}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = (await response.json()) as any;

    if (!response.ok) {
      return {
        success: false,
        error: json.message || 'Failed to fetch history data',
      };
    }

    const historyData = json?.data ?? json;

    return {
      success: true,
      data: historyData,
      message: 'History data fetched successfully',
    };
  } catch (error) {
    console.error('Error fetching history data:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
};