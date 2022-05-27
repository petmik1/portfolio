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
            const mediaUrl = result[i]._links["wp:attachment"][0].href;
            const responseMedia = await fetch(mediaUrl);
            const resultMedia = await responseMedia.json();
            

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
            createHtmlIndex(result, i, selected, resultMedia);
        }
 
    } catch (error) {
        console.log("failed to load", error);
        carrusel.innerHTML = "There appers to be a problem, please try again"
    }
}
getBlog();


// makes the carrusel go rigth
rightBtn.addEventListener("keydown", right)
rightBtn.addEventListener("click", right)

function right(e) {
  let active = document.querySelector(".selected");
  let nextSibling = active.nextElementSibling;
  let activeDot = document.querySelector(".selectedDot");
  let nextSiblingDot = activeDot.nextElementSibling;

  // checks if the "next item is first item"
  if (nextSibling === null) {
    nextSibling = active.parentElement.firstElementChild;
    nextSiblingDot = activeDot.parentElement.firstElementChild;
  } else {
    nextSibling = active.nextElementSibling;
    nextSiblingDot = activeDot.nextElementSibling;
  }

  // adds and removes classes form blog conteiner
  active.classList.toggle("selected");
  active.classList.toggle("notSelected");
  nextSibling.classList.toggle("notSelected");
  nextSibling.classList.toggle("selected");

  // adds and removes classes form dots
  activeDot.classList.toggle("selectedDot");
  activeDot.classList.toggle("notSelectedDot");
  nextSiblingDot.classList.toggle("notSelectedDot");
  nextSiblingDot.classList.toggle("selectedDot");
}

// makes the carrusel go left
leftBtn.addEventListener("keydown", left)
leftBtn.addEventListener("click", left)

function left(e) {
  let active = document.querySelector(".selected");
  let previusSibling = active.previousElementSibling;

  let activeDot = document.querySelector(".selectedDot");
  let previusSiblingDot = activeDot.previousElementSibling;

  // checks if the "next" item is the last item
  if (previusSibling === null) {
    previusSibling = active.parentElement.lastElementChild;
    previusSiblingDot = activeDot.parentElement.lastElementChild;
  } else {
    nextSibling = active.nextElementSibling;
    nextSibling = activeDot.nextElementSibling;
  }

  // adds and removes classes form blog conteiner
  active.classList.toggle("selected");
  active.classList.toggle("notSelected");
  previusSibling.classList.toggle("notSelected");
  previusSibling.classList.toggle("selected");

  // adds and removes classes form dots
  activeDot.classList.toggle("selectedDot");
  activeDot.classList.toggle("notSelectedDot");
  previusSiblingDot.classList.toggle("notSelectedDot");
  previusSiblingDot.classList.toggle("selectedDot");
};