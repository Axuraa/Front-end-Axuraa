const API_BASE = 'https://back-end-axuraa.fly.dev/api/v1';

export const ENDPOINTS = {
    Home: {

    },
    Services: {

    },
    BusinessSolutions: {

    },
    Contact: {
        create: `${API_BASE}/contact-requests`, // POST
        getAll: `${API_BASE}/contact-requests`, // GET
        getById: `${API_BASE}/contact-requests`, // GET
        update: `${API_BASE}/contact-requests`, // PUT
        delete: `${API_BASE}/contact-requests`, // DELETE
        contactInformation: `${API_BASE}/site/contact`, // GET
    },
    AboutUs: {
        history: `${API_BASE}/site/about/history`, // GET
        trackRecords: `${API_BASE}/site/home/track-record`, // GET
        partners: `${API_BASE}/site/home/partners` // GET
    }
}