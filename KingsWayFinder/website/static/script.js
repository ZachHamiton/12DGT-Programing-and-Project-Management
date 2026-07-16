
// geting constants for closeLeftSidebar and openLeftSidebar functions
const leftSidePannelCloseButton = document.getElementById("left_sidebar_close_button");
const leftSidePannelOpenButton = document.getElementById("left_sidebar_open_button");
const leftSidebar = document.getElementById("left_sidebar");
const map = document.getElementById("map");

// when activeated it will close the left sidebar and make the map take up the full screen
function closeLeftSidebar() {
    leftSidebar.classList.add("hidden");
    leftSidePannelOpenButton.classList.remove("hidden");
    map.classList.add("width100");
}

// when the left sidebar close button it click it wil run the closeLeftSidebar which will close the leftsidebar and make the map take up the whole screen
leftSidePannelCloseButton.addEventListener("click", closeLeftSidebar);

// when activeated it will open the left sidebar
function openLeftSidebar(){
    leftSidebar.classList.remove("hidden");
    leftSidePannelOpenButton.classList.add("hidden");
    map.classList.remove("width100");
}

// when the left sidebar open button it click it wil run the LeftSidebar which will open the leftsidebar
leftSidePannelOpenButton.addEventListener("click", openLeftSidebar);




