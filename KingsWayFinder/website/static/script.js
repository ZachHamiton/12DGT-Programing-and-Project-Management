// gets constants for closeLeftSidebar and openLeftSidebar functions
const leftSidePanelCloseButton = document.getElementById("left_sidebar_close_button");
const leftSidePanelOpenButton = document.getElementById("left_sidebar_open_button");
const leftSidebar = document.getElementById("left_sidebar");
const map = document.getElementById("map");

// Polygon buildings
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
const sanfordLayoutMapBackButton = document.getElementById("sanford_layout_map_back_button");
const allenLayoutMapBackButton = document.getElementById("allen_layout_map_back_button");
const bolamLayoutMapBackButton = document.getElementById("bolam_layout_map_back_button");
const ecLayoutMapBackButton = document.getElementById("ec_layout_map_back_button");
const teKaingaLayoutMapBackButton = document.getElementById("te-kainga_layout_map_back_button");
const artsBlockLayoutMapBackButton = document.getElementById("arts_block_layout_map_back_button");


// constants for changing the position of the finder input
const mediaQuery1024px = window.matchMedia("(max-width: 1024px)");
const contentDiv = document.querySelector(".content");

// enables the code to put back the finder input to where it started
const finderOriginalParent = finderInput.parentElement;
const finderOriginalNextSibling = finderInput.nextElementSibling;


// button to return to the areas map
const navbarTextButton = document.getElementById("navbar_text_button");



const s101Outer = document.getElementById("s101_outer_indecator");


let classesData = [];


// code from async function loadJSON(file)  catch(err) {myDisplayer(err.message)} is from https://www.w3schools.com/js/js_json_server.asp
// load the JSON file

async function loadJSON(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        classesData = await response.json();

        // run the function as soon as the JSON is finished so that the highlighting updates. 
        // The rest of the code runs while the const response = await fetch(file); is running. if you type before it is finished the highlights will not update until you type again.
        checkJsonforhighlights();
    } catch (err) {
        console.error(err.message);
    }
}

loadJSON("/static/classes.json");


function checkJsonforhighlights(){
    if (!finderInput) {
        return;
    }

    // get the value of the input in lowercase with surrounding whitespace trimmed
    const finderInputValue = finderInput.value.trim().toLowerCase();

    // finds the object that matches the input value
    const selectedRoom = classesData.find(item => item.code === finderInputValue);

    // checks which room the selectedRoom matches and highlights it
    // also checks other ways the building can be highlighted, such as by typing its name
    if(selectedRoom?.building === "sanford" || finderInputValue === "s" || finderInputValue === "sanford"){
        sanfordPolygon.classList.add("highlighted");
    }else{
        sanfordPolygon.classList.remove("highlighted");
    }

    if(selectedRoom?.building === "allen" || finderInputValue === "a" || finderInputValue === "allen"){
        allenPolygon.classList.add("highlighted");
    }else{
        allenPolygon.classList.remove("highlighted");
    }

    if(selectedRoom?.building === "bolam" || finderInputValue === "b" || finderInputValue === "bolam"){
        bolamPolygon.classList.add("highlighted");
    }else{
        bolamPolygon.classList.remove("highlighted");
    }

    if(selectedRoom?.building === "event centre" || finderInputValue === "g" || finderInputValue === "event centre" || finderInputValue === "event center"){
        ecPolygon.classList.add("highlighted");
    }else{
        ecPolygon.classList.remove("highlighted");
    }

    if(selectedRoom?.building === "te kainga" || finderInputValue === "k" || finderInputValue === "te kainga"){
        teKaingaPolygon.classList.add("highlighted");
    }else{
        teKaingaPolygon.classList.remove("highlighted");
    }

     if(selectedRoom?.building === "arts block" || finderInputValue === "d" || finderInputValue === "arts block" || finderInputValue === "arts"){
        artsPolygon.classList.add("highlighted");
    }else{
        artsPolygon.classList.remove("highlighted");
    }


    // These ones are not in the JSON file and only highlight when their names are inputted
    if(finderInputValue === "field"){
        fieldPolygon.classList.add("highlighted");
    }else{
        fieldPolygon.classList.remove("highlighted");
    }

    if (finderInputValue === "cola" || finderInputValue === "covered outdoor learning area"){
        colaPolygon.classList.add("highlighted");
    } else{
        colaPolygon.classList.remove("highlighted");
    }

    if (finderInputValue === "astro" || finderInputValue === "bolam court"){
        astroPolygon.classList.add("highlighted");
    } else{
        astroPolygon.classList.remove("highlighted");
    }
}

// whenever the input is typed in/ changed the checkJsonforhighlights function runs
finderInput.addEventListener("input", checkJsonforhighlights);






// when activated it will close the left sidebar and make the map take up the full screen. The width of the sidebar would get smaller and it will be translated to the right
function closeLeftSidebar() {
    if (leftSidePanelOpenButton){
        leftSidePanelOpenButton.classList.remove("hidden");
        leftSidePanelOpenButton.classList.add("hidden_animation");
    }

    if (leftSidebar){
        leftSidebar.classList.remove("opening");
        leftSidebar.classList.add("closing");
    }
}

// when activated it will open the left sidebar. the width of the sidebar will grow and it will be translated to the right
function openLeftSidebar(){
    if(leftSidePanelOpenButton){
        leftSidePanelOpenButton.classList.remove("hidden_animation");
        leftSidePanelOpenButton.classList.add("hidden");
    }

    if(leftSidebar){
        leftSidebar.classList.remove("closing");
        leftSidebar.classList.add("opening");
    }
    
}


// when the left sidebar close button is clicked it will run the closeLeftSidebar function, which will close the left sidebar and make the map take up the whole screen
leftSidePanelCloseButton.addEventListener("click", closeLeftSidebar);

// when the left sidebar open button is clicked it will run the openLeftSidebar function, which will open the left sidebar
leftSidePanelOpenButton.addEventListener("click", openLeftSidebar);





// each function changes which maps are being shown.
// it toggles between whether the areas map is showing or whether one of the layout maps is showing
// from the areas map you can go to all the layout maps, but from the layout maps you can only go to the areas map

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
sanfordLayoutMapBackButton.addEventListener("click", showSanfordLayoutMap);



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




// universal home button
function showAreaMap(){
    if(map){
        map.classList.remove("hidden");
    }
    if(artsBlockLayoutMap){
        artsBlockLayoutMap.classList.add("hidden");
    }
    if(teKaingaLayoutMap){
        teKaingaLayoutMap.classList.add("hidden");
    }
    if(ecLayoutMap){
        ecLayoutMap.classList.add("hidden");
    }
    if(bolamLayoutMap){
        bolamLayoutMap.classList.add("hidden");
    }
    if(allenLayoutMap){
        allenLayoutMap.classList.add("hidden");
    }
    if(sanfordLayoutMap){
        sanfordLayoutMap.classList.add("hidden");
    }
        

}

navbarTextButton.addEventListener("click", showAreaMap);







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




























 

 





