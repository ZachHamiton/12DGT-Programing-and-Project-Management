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


const sanfordIndecator = document.getElementById("indecator_sanford");
const allenIndecator = document.getElementById("indecator_allen");
const bolamIndecator = document.getElementById("indecator_bolam");
const ecIndecator = document.getElementById("indecator_ec");
const teKaingaIndecator = document.getElementById("indecator_te-kainga");
const arksBlockIndecator = document.getElementById("indecator_arts_block");

// use in for loops
const buildingInfo = [
    {name: "sanford", layoutMap: sanfordLayoutMap, backButton: sanfordLayoutMapBackButton, polygon: sanfordPolygon, indecator: sanfordIndecator},
    {name: "allen", layoutMap: allenLayoutMap, backButton: allenLayoutMapBackButton, polygon: allenPolygon, indecator:allenIndecator},
    {name: "bolam", layoutMap: bolamLayoutMap, backButton: bolamLayoutMapBackButton, polygon: bolamPolygon, indecator:bolamIndecator},
    {name: "event centre", layoutMap: ecLayoutMap, backButton: ecLayoutMapBackButton, polygon: ecPolygon, indecator: ecIndecator},
    {name: "te kainga", layoutMap: teKaingaLayoutMap, backButton: teKaingaLayoutMapBackButton, polygon: teKaingaPolygon, indecator:teKaingaIndecator},
    {name: "arts block", layoutMap: artsBlockLayoutMap, backButton: artsBlockLayoutMapBackButton, polygon: artsPolygon, indecator: arksBlockIndecator}
]


let classesData = [];


// code from async function loadJSON(file)  catch(err) {myDisplayer(err.message)} is from https://www.w3schools.com/js/js_json_server.asp
// load the JSON file and saves it as classesData

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
    // get the value of the input in lowercase with surrounding whitespace trimmed
    const finderInputValue = finderInput.value.trim().toLowerCase();

    // finds the object that matches the input value
    const selectedRoom = classesData.find(item => item.code === finderInputValue);


    // changes the areas map polygons to highlighted if the selectedRooms building is !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    for (const building of buildingInfo){

        if(selectedRoom?.building === building.name){
            building.polygon.classList.add("highlighted");

            building.indecator.style.top = `${selectedRoom?.top}%`;
            building.indecator.style.left = `${selectedRoom?.left}%`;
            building.indecator.classList.remove("hidden");

        } else{
            building.polygon.classList.remove("highlighted");
            building.indecator.classList.add("hidden");
        }


        if(selectedRoom){
            if(selectedRoom.building !== building.name){
                building.backButton.style.backgroundColor = "rgb(255, 212, 3, 0.5)";
            } else{
                building.backButton.style.backgroundColor = "rgb(255, 255, 255)";
            }
        }else{
            building.backButton.style.backgroundColor = "rgb(255, 255, 255)";
        }
    }


    for (const building of buildingInfo){
        
        if (selectedRoom?.top === null || selectedRoom?.left === null){
            building.indecator.classList.add("hidden");
        }
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

finderInput.addEventListener("input", checkJsonforhighlights)



function enterPressed(event){
    if(event.code === "Enter" || event.code === "NumpadEnter"){
        // get the value of the input in lowercase with surrounding whitespace trimmed
        const finderInputValue = finderInput.value.trim().toLowerCase();

        // finds the object that matches the input value
        const selectedRoom = classesData.find(item => item.code === finderInputValue);

        for (const building of buildingInfo){
                if(selectedRoom?.building === building.name){
                    building.layoutMap.classList.remove("hidden");
                } else if(selectedRoom?.building && selectedRoom?.building !== building.name){
                    building.layoutMap.classList.add("hidden");
                }
        }

        if(selectedRoom?.building){
            map.classList.add("hidden");
        }

    }
}

finderInput.addEventListener("keyup", enterPressed)


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





// By pressing any building polygon or backbutton the map that you see will change according to what you clicked
function changeMap(layoutMap){
    if (map){
        map.classList.toggle("hidden");
    }
    if (layoutMap){
        layoutMap.classList.toggle("hidden");
    }
}

for (const building of buildingInfo){
    building.polygon.addEventListener("click", () => changeMap( building.layoutMap));
    building.backButton.addEventListener("click", () => changeMap( building.layoutMap));
}



// Hides the layout maps and shows the areas map
function showAreaMap(){
    // removes hidden from the areas map classlist
    if(map){
        map.classList.remove("hidden");
    }

    // hides all the layout maps by giveing them the hidden class
    for (const building of buildingInfo){
        building.layoutMap.classList.add("hidden");

    }       

}

navbarTextButton.addEventListener("click", showAreaMap);







// function to move the finder input

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





const innerMarkerContainers = [
    document.getElementById("sanford_inner_marker_container"),
    document.getElementById("allen_inner_marker_container"),
    document.getElementById("bolam_inner_marker_container"),
    document.getElementById("ec_inner_marker_container"),
    document.getElementById("te-kainga_inner_marker_container"),
    document.getElementById("arts_block_inner_marker_container")
].filter(Boolean);

function logClickPercent(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const percentLeft = ((offsetX / rect.width) * 100).toFixed(3);
    const percentTop = ((offsetY / rect.height) * 100).toFixed(3);
    console.log(`"top": ${percentTop}, "left": ${percentLeft}`);
}

innerMarkerContainers.forEach(container => {
    container.addEventListener("click", logClickPercent);
});
























 

 





