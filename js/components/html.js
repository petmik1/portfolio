// html for the blog specific page
function createHtmlIndex(result, i, selected, resultMedia) {
    console.log(resultMedia)
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
function createHtmlBlogSpecific  (result, i) {
    console.log(result[i].title)
    content.innerHTML = `<h2>${result[i].title.rendered}</h2>
    <div class="figure">${result[i].content.rendered}</div>`
    
}