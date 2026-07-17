
// gets constants for closeLeftSidebar and openLeftSidebar functions
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

// when activeated it will open the left sidebar
function openLeftSidebar(){
    leftSidebar.classList.remove("hidden");
    leftSidePannelOpenButton.classList.add("hidden");
    map.classList.remove("width100");
}


// when the left sidebar close button it click it wil run the closeLeftSidebar which will close the leftsidebar and make the map take up the whole screen
leftSidePannelCloseButton.addEventListener("click", closeLeftSidebar);

// when the left sidebar open button it click it wil run the LeftSidebar which will open the leftsidebar
leftSidePannelOpenButton.addEventListener("click", openLeftSidebar);



// gets all constances needed for the checkForHighlights function
const stanfordPolygon = document.getElementById("stanford_polygon");
const allenPolygon = document.getElementById("allen_polygon");
const bolamPolygon = document.getElementById("bolam_polygon");
const ecPolygon = document.getElementById("ec_polygon");
const teKiangaPolygon = document.getElementById("te-kianga_polygon");
const artsPolygon = document.getElementById("arts_polygon");

const finderInput = document.getElementById("finder_input");

const listOfValidSecondCharacters = ["1", "2", ""] // check if this is the best way to do this
let firstCharacterFinderInput = "";
let secondCharacterFinderInput = "";




// the perpose for of this function check the 1st digit of the input and highlight the building on the map associated with that number
function checkForHighlights(){

    // get the value of the input
    const finderInputValue = finderInput.value;

    // checks that there in information and set constants to the value of the first and second digits
    if (finderInputValue.length > 0 ) {
        firstCharacterFinderInput = String(finderInputValue[0]).toLowerCase();
    } else{
        firstCharacterFinderInput = ""
    }

    if (finderInputValue.length > 1 ) {
        secondCharacterFinderInput = String(finderInputValue[1]);
    }else{
        secondCharacterFinderInput = ""
    }

    // This portion of code relates to the classroom codes and prevents people from typeing any word starting with s and the building starting with s highlighting. 
    // When a valid letter is typed in and a valid second charater (can be nothing) is typed in then a corisponding building will highlight. 
    if (finderInputValue.length < 6 &&  listOfValidSecondCharacters.includes(secondCharacterFinderInput)){
        // causes the corisponding building to highlight or unhighlight. 
        if (firstCharacterFinderInput === "s" ){
            stanfordPolygon.classList.add("highlighted");
        }else{
            stanfordPolygon.classList.remove("highlighted");
        }

        if (firstCharacterFinderInput === "a"){
            allenPolygon.classList.add("highlighted");
        }else{
            allenPolygon.classList.remove("highlighted");
        }

        if (firstCharacterFinderInput === "b"){
            bolamPolygon.classList.add("highlighted");
        }else{
            bolamPolygon.classList.remove("highlighted");
        }

        if (firstCharacterFinderInput === "g"){
            ecPolygon.classList.add("highlighted");
        }else{
            ecPolygon.classList.remove("highlighted");
        }

        if (firstCharacterFinderInput === "k"){
            teKiangaPolygon.classList.add("highlighted");
        }else{
            teKiangaPolygon.classList.remove("highlighted");
        }

        if (firstCharacterFinderInput === "d"){
            artsPolygon.classList.add("highlighted");
        }else{
            artsPolygon.classList.remove("highlighted");
        }

    }else{ 
        // checks if the full name has been written out
        // if so that building is highlighted
        if(String(finderInputValue).toLowerCase() === "stanford"){
            stanfordPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "allen"){
            allenPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "bolam"){
            bolamPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "event centre" || String(finderInputValue).toLowerCase() === "event center" || String(finderInputValue).toLowerCase() === "gym"){
            ecPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "te kianga"){
            teKiangaPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "arts" || String(finderInputValue).toLowerCase() === "arts block"){
            artsPolygon.classList.add("highlighted");
        // if nothing has triggered any highlighting everything is unhighlighted
        }else{    
            stanfordPolygon.classList.remove("highlighted");
            allenPolygon.classList.remove("highlighted");
            bolamPolygon.classList.remove("highlighted");
            ecPolygon.classList.remove("highlighted");
            teKiangaPolygon.classList.remove("highlighted");
            artsPolygon.classList.remove("highlighted");
        }
    }
   




}


// every time that the finder input is changed the checkForHighlights function runs
finderInput.addEventListener("input", checkForHighlights);

 

 





