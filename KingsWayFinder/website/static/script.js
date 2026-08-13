// const needed to make the sidebar open and close
const leftSideBarCloseButton = document.getElementById("left_sidebar_close_button");
const leftSideBarOpenButton = document.getElementById("left_sidebar_open_button");
const leftSidebar = document.getElementById("left_sidebar");


// const needed to highlight the differant buildings 
// the polygons make the shape of the building on the map
const sanfordPolygon = document.getElementById("sanford_polygon");
const allenPolygon = document.getElementById("allen_polygon");
const bolamPolygon = document.getElementById("bolam_polygon");
const ecPolygon = document.getElementById("ec_polygon");
const teKaingaPolygon = document.getElementById("te-kainga_polygon");
const artsPolygon = document.getElementById("arts_polygon");

// const needed to highlight the places that aren't buildings.
// the polygons make the shape of the palces on the map
const fieldPolygon = document.getElementById("field_polygon");
const colaPolygon = document.getElementById("cola_polygon");
const astroPolygon = document.getElementById("astro_polygon");

// The finder input is the place where the user seraches for the differant classrooms
const finderInput = document.getElementById("finder_input");



// const needed to change between differant map
// the layout maps show the floor plans of the buildings
const sanfordLayoutMap = document.getElementById("sanford_layout_map");
const allenLayoutMap = document.getElementById("allen_layout_map");
const bolamLayoutMap = document.getElementById("bolam_layout_map");
const ecLayoutMap = document.getElementById("ec_layout_map");
const teKaingaLayoutMap = document.getElementById("te-kainga_layout_map");
const artsBlockLayoutMap = document.getElementById("arts_block_layout_map");
const areasMap = document.getElementById("areas_map");

// These const are back buttons to return the user to the areas map
const sanfordLayoutMapBackButton = document.getElementById("sanford_layout_map_back_button");
const allenLayoutMapBackButton = document.getElementById("allen_layout_map_back_button");
const bolamLayoutMapBackButton = document.getElementById("bolam_layout_map_back_button");
const ecLayoutMapBackButton = document.getElementById("ec_layout_map_back_button");
const teKaingaLayoutMapBackButton = document.getElementById("te-kainga_layout_map_back_button");
const artsBlockLayoutMapBackButton = document.getElementById("arts_block_layout_map_back_button");


// constants for changing the position of the finder input
const mediaQuery1024px = window.matchMedia("(max-width: 1024px)");
const contentDiv = document.querySelector(".content");

// captures the position of the finder input then the page loads so finder input can be put back to where it started if moved.
const finderOriginalParent = finderInput?.parentElement;
const finderOriginalNextSibling = finderInput?.nextElementSibling;



// Text in the nav bar that returns the user to the areas map
const navbarTextButton = document.getElementById("navbar_text_button");


// const needed to move the Indicator around the map
// The indecator shows where the seleced classroom is
const sanfordIndicator = document.getElementById("indicator_sanford");
const allenIndicator = document.getElementById("indicator_allen");
const bolamIndicator = document.getElementById("indicator_bolam");
const ecIndicator = document.getElementById("indicator_ec");
const teKaingaIndicator = document.getElementById("indicator_te-kainga");
const artsBlockIndicator = document.getElementById("indicator_arts_block");


// the array allows the code to use for loops so that i don't have to repeat large section of code for however many buildings or places there are.
const buildingInfo = [
    {name: "sanford", layoutMap: sanfordLayoutMap, backButton: sanfordLayoutMapBackButton, polygon: sanfordPolygon, indicator: sanfordIndicator},
    {name: "allen", layoutMap: allenLayoutMap, backButton: allenLayoutMapBackButton, polygon: allenPolygon, indicator:allenIndicator},
    {name: "bolam", layoutMap: bolamLayoutMap, backButton: bolamLayoutMapBackButton, polygon: bolamPolygon, indicator:bolamIndicator},
    {name: "event centre", layoutMap: ecLayoutMap, backButton: ecLayoutMapBackButton, polygon: ecPolygon, indicator: ecIndicator},
    {name: "te kainga", layoutMap: teKaingaLayoutMap, backButton: teKaingaLayoutMapBackButton, polygon: teKaingaPolygon, indicator:teKaingaIndicator},
    {name: "arts block", layoutMap: artsBlockLayoutMap, backButton: artsBlockLayoutMapBackButton, polygon: artsPolygon, indicator: artsBlockIndicator}
]

const otherPlacesInfo = [
    {name: "field", polygon: fieldPolygon, },
    {name: "astro", polygon: astroPolygon, },
    {name: "cola", polygon: colaPolygon, }
]


// set the variable before getting filled
// this will hold the information in the classes.json file
let classesData = [];


// code from async function loadJSON(file)  catch(err) {myDisplayer(err.message)} is from https://www.w3schools.com/js/js_json_server.asp
// load the JSON file and saves it as classesData
async function loadJSON(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {9
            throw new Error("HTTP error " + response.status);
        }
        classesData = await response.json();

        // checkJsonforhighlights runs as soon as the JSON file has loaded to update the map. 
        checkJsonforhighlights();
    } catch (err) {
        console.error(err.message);
    }
}
loadJSON("/static/classes.json");


// the checkJsonforhighlights funtion changes what is highlighed and indecated based on what is typed in the finder input
// It changes the backgrounds of the building polygons, places polygons, and back buttons; moves the indecator and hides it if necessary.

function checkJsonforhighlights(){
    const finderInputValue = finderInput?.value?.trim().toLowerCase() || ""; 
    const selectedRoom = classesData.find(item => item.code === finderInputValue);
    
    // runs for every building
    for (const building of buildingInfo){

        // changes the areas map polygons to highlighted if the selectedRooms building equals is the same as the buildings name
        // changes the position of the indicator. Hides the indicator if there is no selected room.
        if(selectedRoom?.building === building.name){
            building.polygon?.classList.add("highlighted");

            if (building.indicator){
                building.indicator.style.top = `${selectedRoom?.top}%`;
                building.indicator.style.left = `${selectedRoom?.left}%`;
                building.indicator.classList.remove("hidden");
            }

        } else{
            building.polygon?.classList.remove("highlighted");
            building.indicator?.classList.add("hidden");
        }

        // If the selected room isn't in the layout map the back button is highlighted yellow
        if(selectedRoom){
            if(selectedRoom.building !== building.name){
                building.backButton?.classList.add("highlighted_background");
            } else{
                building.backButton?.classList.remove("highlighted_background");
            }
        } else{
            building.backButton?.classList.remove("highlighted_background");
        }
        
        // if the selectedRoom does not have a indicator postion the indicator is hidden
        if (selectedRoom?.top == null || selectedRoom?.left == null){
            building.indicator?.classList.add("hidden");
        }
    }

    // These place are not in the JSON file so they need there own highlighting code
    for(const place of otherPlacesInfo){
        if(finderInputValue === place.name){
            place.polygon?.classList.add("highlighted");
        } else{
            place.polygon?.classList.remove("highlighted");
        }
    }
} 

// add an event listener that runs checkJsonforhighlights every times the finder inputs text is changed
finderInput?.addEventListener("input", checkJsonforhighlights)



// function that changes which map is displaed when the user clicks enter
function enterPressed(event){
    // Only runs when the use presses enter
    if(event.code === "Enter" || event.code === "NumpadEnter"){
        const finderInputValue = finderInput?.value?.trim().toLowerCase() || "";
        const selectedRoom = classesData.find(item => item.code === finderInputValue);

        // If there is a selected room the map it is located in will display and all the other will be hidden
        if(selectedRoom?.building){
            for (const building of buildingInfo){
                if(selectedRoom.building === building.name){
                    building.layoutMap?.classList.remove("hidden");
                } else if(selectedRoom.building && selectedRoom.building !== building.name){
                    building.layoutMap?.classList.add("hidden");
                }
            }

            // hides the areas map if another room is displayed
            if(selectedRoom.building){
                areasMap?.classList.add("hidden");
            }
        }
    }
}

// Runs enterPressed when the use presses down on there keyboard
finderInput?.addEventListener("keydown", enterPressed)





// when activated it will close the left sidebar but adding classes to the sidebars elements to make the sidebar do an animation that moves it off the screen.
function closeLeftSidebar() {
    leftSideBarOpenButton?.classList.remove("hidden");
    leftSideBarOpenButton?.classList.add("appear_animation");
    
    leftSidebar?.classList.remove("opening");
    leftSidebar?.classList.add("closing");
}

// closeLeftSidebar will run went the left Sidebar Close Button is clicked
leftSideBarCloseButton?.addEventListener("click", closeLeftSidebar);


// when activated it will open the left sidebar by adding classes to the sidebars elements to make the sidebar move it onto the screen.
function openLeftSidebar(){
    
    leftSideBarOpenButton?.classList.remove("appear_animation");
    leftSideBarOpenButton?.classList.add("hidden");

    leftSidebar?.classList.remove("closing");
    leftSidebar?.classList.add("opening");    
}


// closeLeftSidebar will run when the left Sidebar open Button is clicked
leftSideBarOpenButton?.addEventListener("click", openLeftSidebar);



// By pressing any building polygon the map will change to the building the user clicked
function changeMap(layoutMap){
    areasMap?.classList.toggle("hidden");
    layoutMap?.classList.toggle("hidden");
}

// sets event listener to all the building.polygon and building.backButt
for (const building of buildingInfo){
    // the building.polygon open the layout maps and closes the areas map
    building.polygon?.addEventListener("click", () => changeMap( building.layoutMap));
    // the building.backButton open the aresa map and closes the layout maps
    building.backButton?.addEventListener("click", () => changeMap( building.layoutMap));
}



// Hides the layout maps and shows the areas map
function showAreaMap(){
    // unhides the areas map
    areasMap?.classList.remove("hidden");

    // hides all the layout maps
    for (const building of buildingInfo){
        building.layoutMap?.classList.add("hidden");
    }       
}

// the showAreaMap will run then the navbarTextButton is clickeed
navbarTextButton?.addEventListener("click", showAreaMap);



// function to move the finder input to resize the page properly
function changeInputPosition(screenwidth) {

    if (!finderInput) return;
    
    // if the screen is 1024 pc or less tis runs
    if (screenwidth.matches) {
        
        // move the finder input to the top of the page
        contentDiv?.prepend(finderInput);

    } else { // if the screen is larger than 1024px then the input goes back to its original position
        if (finderOriginalNextSibling && finderOriginalParent){

            finderOriginalParent.insertBefore( finderInput, finderOriginalNextSibling );
        } else{
            // fail safe in case there isn't in element behind the finder input
            finderOriginalParent?.append(finderInput);
        }
    }
}


// if the screen changegs size the changeInputPosition function is run
mediaQuery1024px.addEventListener("change", changeInputPosition);

// runs it at the start so that if the screen is less then 1024px to begin with the finder is in the right place.
changeInputPosition(mediaQuery1024px);




// this code is not to be marked and should be removed before handing in because it was made by ai as a tool to help find the postion of things on the map.
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