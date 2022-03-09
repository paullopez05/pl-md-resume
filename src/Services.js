export async function getGistData(gid) {
    try {
        const url = `https://api.github.com/gists/${gid}`
        const response = await fetch(url);
        return await response.json()
    } catch (error) {
        return [];
    }
}

