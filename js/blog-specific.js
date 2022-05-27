const params = new URLSearchParams(document.location.search);
const id = parseInt(params.get("id"));
const url = "https://portfolio.petter-mikalsen.no/wp-json/wp/v2/posts?per_page=100&_embed"

// using the try/catch metod to fetch information from WP API
async function getBlog() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        for (let i = 0; i < result.length; i++) {
            const mediaUrl = result[i]._links["wp:attachment"][0].href;
            if (result[i].id === id) {
                createHtmlBlogSpecific(result, mediaUrl, i);
            }w
        }
    } catch (error) {
        console.log("failed to load", error);
        textWrapper.innerHTML = "There appers to be a problem, please try again"
    }
}
getBlog();