export const API_URL = 'http://localhost:3000'

export function TOKEN_POST(body) {
    return {
        url: API_URL + '/login',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export function TOKEN_VALIDATE_POST(token) {
    return {
        url: API_URL + '/token_validation',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        },
    };
}

export function PEXEL_BY_ID_GET(token,id) {
    return {
        url: `${API_URL}/pexels/${id}`,
        options: {
            method: 'GET',
            cache: 'no-store',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        },
    };
}

export function PEXELS_GET(token, page, per_page,search) {
    return {
        url: `${API_URL}/pexels/?search=${search}&&page=${page}&&per_page=${per_page}&&${search}`,
        options: {
            method: 'GET',
            cache: 'no-store',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        },
    };
}
