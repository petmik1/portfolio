// html for the blog specific page
function createHtmlIndex(result, i, selected, resultMedia) {
    carrusel.innerHTML += `
    <a href="pages/blog-spesific.html?id=${result[i].id}" class="carruselContainer ${selected}">
        <h1>${result[i].title.rendered}</h1>
        <img src="${resultMedia[0].source_url}" class="carruselImage" alt="">
        <p>${result[i].excerpt.rendered}</p>
        
    </a>
    `
    dotSection.innerHTML += `<div class="dot ${selected}Dot"></div>`;
}
// html for the blog specific page
function createHtmlBlogSpecific  (result, mediaUrl, i) {
    content.innerHTML = `
    <h2>${result[i].title.rendered}</h2>
    <div class="figure">${result[i].content.rendered}</div>
    `
}

// html for the portfolio page
function createHtmlPortfolio(result, i){
    content.innerHTML += `
    <div class="portfolioCard">
        <a href="blog-spesific.html?id=${result[i].id}" class="portfolioCardLink">
            <h2>${result[i].title.rendered}</h2>
            <div class="figure">${result[i].content.rendered}</div>
        </a>
    </div>
    `
}
