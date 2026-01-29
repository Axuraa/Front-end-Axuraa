import { ENDPOINTS } from '../api/APIs';
import { ContactRequest, ContactResponse } from '@/types/Generals/contactForm';

/**
 * Create a new contact request
 */
export const create = async (contactData: ContactRequest): Promise<ContactResponse> => {
    console.log('Creating contact request with data:', contactData);
  try {
    const response = await fetch(ENDPOINTS.Contact.create, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });



    const data = await response.json();

    console.log('Response data:', data);

    if (!response.ok) {
      return {
        success: false,
        error: data.message || 'Failed to submit contact request',
      };
    }

    return {
      success: true,
      data,
      message: 'Contact request submitted successfully',
    };
  } catch (error) {
    console.error('Error creating contact request:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
};
