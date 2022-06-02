const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".sidebar")

// adds eventlistener to the hambuer-menu
hamburger.addEventListener("click", () => {
    navigation.classList.toggle("toggle");
    console.log(navigation.classList)
})