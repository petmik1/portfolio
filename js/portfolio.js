const url = "https://portfolio.petter-mikalsen.no/wp-json/wp/v2/posts?per_page=100&_embed";
const content = document.querySelector(".content")
// using the try/catch metod to fetch information from WP API
async function getBlog() {
    try {
        const response = await fetch(url);
        const result = await response.json();
       
        for (let i = 0; i < result.length; i++) {
            createHtmlPortfolio(result, i)
        }
    } catch (error) {
        console.log("failed to load", error);
        textWrapper.innerHTML = "There appers to be a problem, please try again"
    }
}
getBlog();