const shareButton = document.querySelector(".share")
const toolTip = document.querySelector(".tooltip")
const shareMobile = document.querySelector(".share-mobile")

shareButton.addEventListener("click", () => {
    toolTip.classList.toggle("tooltip-on")
    shareMobile.classList.toggle("share-mobile-on")
    console.log("turned on")
})