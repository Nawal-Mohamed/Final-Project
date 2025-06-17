export function getStrapiMedia(url) {
    if (!url) return null;
    if (url.startsWith("http")) return url;
    return `http://localhost:1337${url}`;
}
