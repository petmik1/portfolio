const carrusel = document.querySelector(".carrusel");
const url = "https://portfolio.petter-mikalsen.no/wp-json/wp/v2/posts?per_page=5&_embed";
const rightBtn = document.querySelector(".rightBtn");
const leftBtn = document.querySelector(".leftBtn");
const dotSection = document.querySelector(".dotSection");


// using the try/catch metod to fetch information from WP API
async function getBlog() {

    try {

        const response = await fetch(url);
        const result = await response.json();
        for (let i = 0; i < result.length; i++) {
            let id = result[i].id;

            // finding the middle ofthe fetched array. 
            let middle = result.length - 1;
            middle = middle / 2;
            middle = Math.round(middle);

            // assigning the selected class to the middle eliment
            let selected;
            if (i === middle) {
                selected = "selected";
            } else {
                selected = "notSelected";
            }
            console.log(selected)
            createHtmlIndex(result, i, selected);
        }
        // for (let i = 0; i < result.length; i++) {
        //     let id = result[i].id;
        //     const mediaUrl = result[i]._links["wp:attachment"][0].href;
        //     const responseMedia = await fetch(mediaUrl);
        //     const resultMedia = await responseMedia.json();

        // // finding the middle ofthe fetched array. 
        // let arrayLength = result.length - 1;
        // arrayLength = arrayLength / 2;
        // arrayLength = Math.round(arrayLength);

        // // assigning the selected class to the middle eliment
        // let selected;
        // if (i === arrayLength) {
        //     selected = "selected";
        // } else {
        //     selected = "notSelected";
        // }
        //     // creating the HTML
        //     createHtmlIndex(result, resultMedia, i, selected);
        // }
    } catch (error) {
        console.log("failed to load", error);
        carrusel.innerHTML = "There appers to be a problem, please try again"
    }
}
getBlog();