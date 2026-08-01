// gets constants for closeLeftSidebar and openLeftSidebar functions
const leftSidePannelCloseButton = document.getElementById("left_sidebar_close_button");
const leftSidePannelOpenButton = document.getElementById("left_sidebar_open_button");
const leftSidebar = document.getElementById("left_sidebar");
const map = document.getElementById("map");

// gets all constances needed for the checkForHighlights function
const sanfordPolygon = document.getElementById("sanford_polygon");
const allenPolygon = document.getElementById("allen_polygon");
const bolamPolygon = document.getElementById("bolam_polygon");
const ecPolygon = document.getElementById("ec_polygon");
const teKaingaPolygon = document.getElementById("te-kainga_polygon");
const artsPolygon = document.getElementById("arts_polygon");
const fieldPolygon = document.getElementById("field_polygon");
const colaPolygon = document.getElementById("cola_polygon");
const astroPolygon = document.getElementById("astro_polygon");
const finderInput = document.getElementById("finder_input");


// layout maps
const sanfordLayoutMap = document.getElementById("sanford_layout_map");
const allenLayoutMap = document.getElementById("allen_layout_map");
const bolamLayoutMap = document.getElementById("bolam_layout_map");
const ecLayoutMap = document.getElementById("ec_layout_map");
const teKaingaLayoutMap = document.getElementById("te-kainga_layout_map");
const artsBlockLayoutMap = document.getElementById("arts_block_layout_map");


// layout maps back buttons
const sanfordLayouMapBackButton = document.getElementById("sanford_layout_map_back_button");
const allenLayoutMapBackButton = document.getElementById("allen_layout_map_back_button");
const bolamLayoutMapBackButton = document.getElementById("bolam_layout_map_back_button");
const ecLayoutMapBackButton = document.getElementById("ec_layout_map_back_button");
const teKaingaLayoutMapBackButton = document.getElementById("te-kainga_layout_map_back_button");
const artsBlockLayoutMapBackButton = document.getElementById("arts_block_layout_map_back_button");


// const for changeing the positon of the finder input
const mediaQuery1024px = window.matchMedia("(max-width: 1024px)");
const contentDiv = document.querySelector(".content");
// enables the code to put back the finder input to where it started
const finderOriginalParent = finderInput.parentElement;
const finderOriginalNextSibling = finderInput.nextElementSibling;














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
            sanfordPolygon.classList.add("highlighted");
        }else{
            sanfordPolygon.classList.remove("highlighted");
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
            teKaingaPolygon.classList.add("highlighted");
        }else{
            teKaingaPolygon.classList.remove("highlighted");
        }

        if (firstCharacterFinderInput === "d"){
            artsPolygon.classList.add("highlighted");
        }else{
            artsPolygon.classList.remove("highlighted");
        }

    }else{
        // checks if the full name has been written out
        // if so that building is highlighted
        if(String(finderInputValue).toLowerCase() === "sanford"){
            sanfordPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "allen"){
            allenPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "bolam"){
            bolamPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "event centre" || String(finderInputValue).toLowerCase() === "event center" || String(finderInputValue).toLowerCase() === "gym"){
            ecPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "te kainga"){
            teKaingaPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "arts" || String(finderInputValue).toLowerCase() === "arts block"){
            artsPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "field"){
            fieldPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "cola"){
            colaPolygon.classList.add("highlighted");
        }else if(String(finderInputValue).toLowerCase() === "astro" || String(finderInputValue).toLowerCase() === "bolam court"){
            astroPolygon.classList.add("highlighted");
        }else{
             // if nothing has triggered any highlighting everything is unhighlighted
            sanfordPolygon.classList.remove("highlighted");
            allenPolygon.classList.remove("highlighted");
            bolamPolygon.classList.remove("highlighted");
            ecPolygon.classList.remove("highlighted");
            teKaingaPolygon.classList.remove("highlighted");
            artsPolygon.classList.remove("highlighted");
            fieldPolygon.classList.remove("highlighted");
            colaPolygon.classList.remove("highlighted");
            astroPolygon.classList.remove("highlighted");
        }
    }
   




}

// every time that the finder input is changed the checkForHighlights function runs
finderInput.addEventListener("input", checkForHighlights);




// when activeated it will close the left sidebar and make the map take up the full screen. The width of the sidebar would get smaller and it will be translated to the right
function closeLeftSidebar() {
    if (leftSidePannelOpenButton){
        leftSidePannelOpenButton.classList.remove("hidden");
        leftSidePannelOpenButton.classList.add("hidden_animation");
    }

    if (leftSidebar){
        leftSidebar.classList.remove("opening");
        leftSidebar.classList.add("closing");
    }
}

// when activeated it will open the left sidebar. the width of the sidebar will grow and it will be translated to the right
function openLeftSidebar(){
    if(leftSidePannelOpenButton){
        leftSidePannelOpenButton.classList.remove("hidden_animation");
        leftSidePannelOpenButton.classList.add("hidden");
    }

    if(leftSidebar){
        leftSidebar.classList.remove("closing");
        leftSidebar.classList.add("opening");
    }
    
}


// when the left sidebar close button it click it wil run the closeLeftSidebar which will close the leftsidebar and make the map take up the whole screen
leftSidePannelCloseButton.addEventListener("click", closeLeftSidebar);

// when the left sidebar open button it click it wil run the LeftSidebar which will open the leftsidebar
leftSidePannelOpenButton.addEventListener("click", openLeftSidebar);





// each function changes which maps is being shown.
// it toggles between whether the areas map is showing or whether one of the layout maps is showing
// from the areas map you can go to all the layout maps but from the layout maps you can only go to the areas map

// Sanford layout map toggle hide function
function showSanfordLayoutMap(){
    if(map){
        map.classList.toggle("hidden");
    }
    if(sanfordLayoutMap){
        sanfordLayoutMap.classList.toggle("hidden");
    }
}
sanfordPolygon.addEventListener("click", showSanfordLayoutMap);
sanfordLayouMapBackButton.addEventListener("click", showSanfordLayoutMap);



// Allen layout map toggle hide function
function showAllenLayoutMap(){
    if(map){
        map.classList.toggle("hidden");
    }
    if(allenLayoutMap){
        allenLayoutMap.classList.toggle("hidden");
    }
}


allenPolygon.addEventListener("click", showAllenLayoutMap);
allenLayoutMapBackButton.addEventListener("click", showAllenLayoutMap);


// Bolam layout map toggle hide  function
function showBolamLayoutMap(){
    if(map){
        map.classList.toggle("hidden");
    }
    if(bolamLayoutMap){
        bolamLayoutMap.classList.toggle("hidden");
    }
}

bolamPolygon.addEventListener("click", showBolamLayoutMap);
bolamLayoutMapBackButton.addEventListener("click", showBolamLayoutMap);



// Event Centre layout map toggle hide  function
function showEcLayoutMap(){
    if(map){
        map.classList.toggle("hidden");
    }
    if(ecLayoutMap){
        ecLayoutMap.classList.toggle("hidden");
    }
}

ecPolygon.addEventListener("click", showEcLayoutMap);
ecLayoutMapBackButton.addEventListener("click", showEcLayoutMap);


// // Te Kainga layout map toggle hide function
function showTeKaingaLayoutMap(){
    if(map){
        map.classList.toggle("hidden");
    }
    if(teKaingaLayoutMap){
        teKaingaLayoutMap.classList.toggle("hidden");
    }
}

teKaingaPolygon.addEventListener("click", showTeKaingaLayoutMap);
teKaingaLayoutMapBackButton.addEventListener("click", showTeKaingaLayoutMap);


// Arts Block layout map toggle hide  function
function showArtsBlockLayoutMap(){
    if(map){
        map.classList.toggle("hidden");
    }
    if(artsBlockLayoutMap){
        artsBlockLayoutMap.classList.toggle("hidden");
    }
}

artsPolygon.addEventListener("click", showArtsBlockLayoutMap);
artsBlockLayoutMapBackButton.addEventListener("click", showArtsBlockLayoutMap);






// function fo move the finder input

function changeInputPosition(screenwidth) {
  
    // if the screen is 1024 pc or less tis runs
    if (screenwidth.matches) {
        
        // move the finder input to the top of the page
        contentDiv.prepend(finderInput);


    } else { // if the screen is larger than 1024px then the input goes back to its original position
            if (finderOriginalNextSibling){

                finderOriginalParent.insertBefore( finderInput, finderOriginalNextSibling );
            } else{
                // fail safe in case there isn't in element behind the finder input
                finderOriginalParent.append( finderInput);
            }
        }
}


// if the screen changegs size the changeInputPosition function is run
mediaQuery1024px.addEventListener("change", changeInputPosition);

// runs it at the start so that if the screen is less then 1024px to begin with the finder is in the right place.
changeInputPosition(mediaQuery1024px);



















 

 





