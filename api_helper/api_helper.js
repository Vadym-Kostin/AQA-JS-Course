import fetch from "node-fetch";

export async function getPosts(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const results = await response.json();
        return results;
    } catch(error) {
        console.error("Error:", error);
        throw error;
    }
}

export async function postNewPost(url, body) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const results = await response.json();
        return results;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}