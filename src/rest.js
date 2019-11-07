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
    return fetch('http://localhost/api/'+url, {
      headers: {
        'Authorization': `Basic ${token}`
      },
      responseType: type
    });
}