

const API_BASE = 'https://back-end-axuraa.fly.dev/api/v1';

export const ENDPOINTS = {
    Home:{

    },
    Services:{

    },
    BusinessSolutions:{

    },
    Contact:{
        create:`${API_BASE}/contact-requests`, // POST
        getAll:`${API_BASE}/contact-requests`, // GET
        getById:`${API_BASE}/contact-requests`, // GET
        update:`${API_BASE}/contact-requests`, // PUT
        delete:`${API_BASE}/contact-requests`, // DELETE
    },
    AboutUs:{
        history:`${API_BASE}/site/about/history`
    }
}