export async function json(url) {
    const response = await sendRequest(url, "json");
    return await response.json();
}

export async function blob(url) {
    const response = await sendRequest(url, "blob");
    return await response.blob();
}

async function sendRequest(url, type) {
    const token = localStorage.getItem("token");
    return sendRequestWithToken(url, type, token);
}

export function sendRequestWithToken(url, type, token) {
    return fetch('http://35.158.118.93:8081/api/' + url, {
        headers: {
            'Authorization': `Basic ${token}`
        },
        responseType: type
    });
}
