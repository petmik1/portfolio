// html for the blog specific page
function createHtmlIndex(result, i, selected) {
    carrusel.innerHTML += `
    <a href="#" class="carruselContainer ${selected}">
        <h1>${result[i].title.rendered}</h1>
        <p>${result[i].excerpt.rendered}</p>
    </a>
    

    `
    // carrusel.innerHTML += `
    //         <div class="figure ${selected}">
    //             <a href="pages/blog-spesific.html?id=${result[i].id}">
    //                 <div class="bloginfo">
    //                     <img src="${resultMedia[0].source_url}" alt="${resultMedia[i].alt_text}">
    //                 </div>
    //                 <p>${result[i].title.rendered}</p>
    //             </a>
    //         </div>
    //         `;
    // dotSection.innerHTML += `<div class="dot ${selected}Dot"></div>`;
}