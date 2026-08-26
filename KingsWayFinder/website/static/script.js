// Constants needed to make the sidebar open and close
const leftSideBarCloseButton = document.getElementById("left_sidebar_close_button");
const leftSideBarOpenButton = document.getElementById("left_sidebar_open_button");
const leftSidebar = document.getElementById("left_sidebar");

// Constants needed to highlight the different buildings.
// The polygons make the shape of the building on the map.
const sanfordPolygon = document.getElementById("sanford_polygon");
const allenPolygon = document.getElementById("allen_polygon");
const bolamPolygon = document.getElementById("bolam_polygon");
const ecPolygon = document.getElementById("ec_polygon");
const teKaingaPolygon = document.getElementById("te-kainga_polygon");
const artsPolygon = document.getElementById("arts_polygon");

// Constants needed to highlight the places that aren't buildings.
// The polygons make the shape of the places on the map.
const fieldPolygon = document.getElementById("field_polygon");
const colaPolygon = document.getElementById("cola_polygon");
const astroPolygon = document.getElementById("astro_polygon");

// The finder input is where the user searches for the different classrooms
const finderInput = document.getElementById("finder_input");

// Constants needed to change between different maps.
// The layout maps show the floor plans of the buildings.
const sanfordLayoutMap = document.getElementById("sanford_layout_map");
const allenLayoutMap = document.getElementById("allen_layout_map");
const bolamLayoutMap = document.getElementById("bolam_layout_map");
const ecLayoutMap = document.getElementById("ec_layout_map");
const teKaingaLayoutMap = document.getElementById("te-kainga_layout_map");
const artsBlockLayoutMap = document.getElementById("arts_block_layout_map");
const areasMap = document.getElementById("areas_map");

// These constants are back buttons to return the user to the areas map
const sanfordLayoutMapBackButton = document.getElementById("sanford_layout_map_back_button");
const allenLayoutMapBackButton = document.getElementById("allen_layout_map_back_button");
const bolamLayoutMapBackButton = document.getElementById("bolam_layout_map_back_button");
const ecLayoutMapBackButton = document.getElementById("ec_layout_map_back_button");
const teKaingaLayoutMapBackButton = document.getElementById("te-kainga_layout_map_back_button");
const artsBlockLayoutMapBackButton = document.getElementById("arts_block_layout_map_back_button");

// Constants for changing the position of the finder input
const mediaQuery1024px = window.matchMedia("(max-width: 1024px)");
const contentDiv = document.querySelector(".content");

// Captures the position of the finder input when the page loads so the finder input can be put back to where it started if moved.
const finderOriginalParent = finderInput?.parentElement;
const finderOriginalNextSibling = finderInput?.nextElementSibling;

// Text in the nav bar that returns the user to the areas map
const navbarTextButton = document.getElementById("navbar_text_button");
const navbarlogoButton = document.getElementById("nav_logo");

// Constants needed to move the indicator around the map.
// The indicator shows where the selected classroom is.
const sanfordIndicator = document.getElementById("indicator_sanford");
const allenIndicator = document.getElementById("indicator_allen");
const bolamIndicator = document.getElementById("indicator_bolam");
const ecIndicator = document.getElementById("indicator_ec");
const teKaingaIndicator = document.getElementById("indicator_te-kainga");
const artsBlockIndicator = document.getElementById("indicator_arts_block");

// This array holds the position information about the elements on the areas map.
// Values are percentages relative to their container height used in absolute positioning.
// Rotation is how many degrees the element will rotate clockwise

const positionsAreasMap = [
{id: "sanford_polygon_container",                    top_pos: 3.86,   left_pos: -1.65},
{id: "allen_polygon_container",                      top_pos: 48.78,  left_pos: 12.50},
{id: "bolam_polygon_container",                      top_pos: 51.76,  left_pos: 30.05}, 
{id: "ec_polygon_container",                         top_pos: 22.35,  left_pos: 52.70},
{id: "te-kainga_polygon_container",                  top_pos: 47.57,  left_pos: 57.43},
{id: "arts_polygon_container",                       top_pos: 1.34,   left_pos: 73.98},
{id: "field_polygon_container",                      top_pos: 0.00,   left_pos: 13.50},
{id: "cola_polygon_container",                       top_pos: 0.00,   left_pos: 51.00},
{id: "astro_polygon_container",                      top_pos: 48.00,  left_pos: 46.50},
{id: "sanford_label",                                top_pos: 23.36,  left_pos: 25.82},
{id: "allen_label",                                  top_pos: 62.71,  left_pos: 16.13},
{id: "bolam_label",                                  top_pos: 72.39,  left_pos: 35.11},
{id: "ec_label",                                     top_pos: 32.44,  left_pos: 60.92},
{id: "te-kainga_label",                              top_pos: 66.34,  left_pos: 59.71},
{id: "arts_label",                                   top_pos: 1.00,   left_pos: 80.29},
{id: "field_label",                                  top_pos: 5.00,   left_pos: 32.00},
{id: "cola_label",                                   top_pos: 8.23,   left_pos: 60.50},
{id: "astro_label",                                  top_pos: 62.71,  left_pos: 49.42},
{id: "allen_quad_label",                             top_pos: 42.13,  left_pos: 25.21},
{id: "office_label",                                 top_pos: 81.49,  left_pos: 28.84},
{id: "main_entrance_label",                          top_pos: 85.38,  left_pos: 86.16},
{id: "back_gate_label",                              top_pos: 48.00,  left_pos: 1.00},
{id: "uniform_shop_label",                           top_pos: 67.013, left_pos: 83.0},
{id: "sanford_back_gate_staircase",                  top_pos: 42.138, left_pos: 0.683},
{id: "sanford_east_staircase_facing_the_allen_quad", top_pos: 40.288, left_pos: 36.800},
{id: "sanford_west_staircase_facing_allen_quad",     top_pos: 28.517, left_pos: 21.433},
{id: "sanford_staircase_facing_the_field",           top_pos: 20.1,   left_pos: 38.43},
{id: "sanford_staircase_facing_the_astro",           top_pos: 41.50,  left_pos: 46.90},
{id: "bolam_staircase_facing_the_astro",             top_pos: 47.5,   left_pos: 42.184},
{id: "arts_block_east_staircase",                    top_pos: 23.178, left_pos: 89.500},
{id: "event_centre_staircase_facing_astro",          top_pos: 42,     left_pos: 53.106},
{id: "event_centre_staircase_facing_the_field",      top_pos: 21.542, left_pos: 54.485}, 
{id: "event_centre_staircase_facing_arts_block",     top_pos: 22.057, left_pos: 79.32},
{id: "te-Kainga_staircase_facing_the_uniform_shop",  top_pos: 61.859, left_pos: 81.3},
{id: "sanford_elevator",                             top_pos: 28.30,  left_pos: 19.454},
{id: "allen_elevator",                               top_pos: 65.650, left_pos: 25.100},
{id: "arts_block_elevator",                          top_pos: 15.169, left_pos: 74.881},
{id: "areas_compass",                                top_pos: 80.698, left_pos: 1.502, rotation: 15},
{id: "sanford_compass",                              top_pos: 90.698, left_pos: 1.502, rotation: 90},
{id: "allen_compass",                                top_pos: 90.698, left_pos: 1.502, rotation: 115},
{id: "bolam_compass",                                top_pos: 90.698, left_pos: 1.502, rotation: 290},
{id: "ec_compass",                                   top_pos: 90.698, left_pos: 1.502, rotation: 110},
{id: "te-kainga_compass",                            top_pos: 90.698, left_pos: 1.502, rotation: 290},
{id: "arts_block_compass",                           top_pos: 90.698, left_pos: 1.502, rotation: 340}
];

// This array allows the code to use for loops so that I don't have to repeat a large section of code for however many buildings or places there are.
const buildingInfo = [
  {name: "sanford", layoutMap: sanfordLayoutMap, backButton: sanfordLayoutMapBackButton, polygon: sanfordPolygon, indicator: sanfordIndicator},
  {name: "allen", layoutMap: allenLayoutMap, backButton: allenLayoutMapBackButton, polygon: allenPolygon, indicator:allenIndicator},
  {name: "bolam", layoutMap: bolamLayoutMap, backButton: bolamLayoutMapBackButton, polygon: bolamPolygon, indicator:bolamIndicator},
  {name: "event centre", layoutMap: ecLayoutMap, backButton: ecLayoutMapBackButton, polygon: ecPolygon, indicator: ecIndicator},
  {name: "te kainga", layoutMap: teKaingaLayoutMap, backButton: teKaingaLayoutMapBackButton, polygon: teKaingaPolygon, indicator:teKaingaIndicator},
  {name: "arts block", layoutMap: artsBlockLayoutMap, backButton: artsBlockLayoutMapBackButton, polygon: artsPolygon, indicator: artsBlockIndicator}
];

const otherPlacesInfo = [
  {name: "field", polygon: fieldPolygon, },
  {name: "astro", polygon: astroPolygon, },
  {name: "cola", polygon: colaPolygon, }
];

// Set the variable before getting filled.
// This will hold the information in the classes.json file.
let classesData = [];

// This function gives all elements in the areas map their top and left positions and rotates them if necessary.
function positionAreasMap() {
  for (const location of positionsAreasMap) {
    const locationElement = document.getElementById(`${location.id}`);
    if (locationElement) {
      locationElement.style.top = `${location.top_pos}%`;
      locationElement.style.left = `${location.left_pos}%`;
      locationElement.classList.remove("hidden");
      if (location.rotation !== undefined) {
        locationElement.style.rotate = `${location.rotation}deg`;
      }
    }
  }
}
positionAreasMap();

// Code from async function loadJSON(file) to console.error(err.message) is from https://www.w3schools.com/js/js_json_server.asp
// Loads the JSON file and saves it as classesData.
async function loadJSON(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
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

// The checkJsonforhighlights function changes what is highlighted and indicated based on what is typed in the finder input.
// It changes the backgrounds of the building polygons, places polygons, and back buttons; moves the indicator and hides it if necessary.

function checkJsonforhighlights() {
  const finderInputValue = finderInput?.value?.trim().toLowerCase() || "";
  const selectedRoom = classesData.find(
    (item) => item.code === finderInputValue,
  );

  const selectedOtherPolygon = otherPlacesInfo.some(place => place.name === finderInputValue);

  // Runs for every building
  for (const building of buildingInfo) {
    // Changes the areas map polygons to highlighted if the selectedRoom's building is the same as the building's name.
    // Changes the position of the indicator. Hides the indicator if there is no selected room.
    if (selectedRoom?.building === building.name) {
      building.polygon.classList.add("highlighted");

      if (building.indicator) {
        building.indicator.style.top = `${selectedRoom?.top}%`;
        building.indicator.style.left = `${selectedRoom?.left}%`;
        building.indicator.classList.remove("hidden");
      }
    } else {
      building.polygon.classList.remove("highlighted");
      building.indicator.classList.add("hidden");
    }

    // If the selected room isn't in the layout map, the back button is highlighted yellow
    if (selectedRoom) {

      if (selectedRoom.building !== building.name){
        building.backButton.classList.add("highlighted_background");
      } else {
        building.backButton.classList.remove("highlighted_background");
      } 
    }else if(selectedOtherPolygon){
      building.backButton.classList.add("highlighted_background");
    } else {
      building.backButton.classList.remove("highlighted_background");
    }

    // If the selectedRoom does not have an indicator position, the indicator is hidden
    if (selectedRoom?.top == null || selectedRoom?.left == null) {
      building.indicator.classList.add("hidden");
    }
  }

  // These places are not in the JSON file so they need their own highlighting code
  for (const place of otherPlacesInfo) {
    if (finderInputValue === place.name) {
      place.polygon.classList.add("highlighted");
    } else {
      place.polygon.classList.remove("highlighted");
    }
  }
}

// Add an event listener that runs checkJsonforhighlights every time the finder input's text is changed
finderInput?.addEventListener("input", checkJsonforhighlights);

// Function that changes which map is displayed when the user presses Enter
function enterPressed(event) {
  // Only runs when the user presses Enter
  if (event.code === "Enter" || event.code === "NumpadEnter") {
    const finderInputValue = finderInput?.value?.trim().toLowerCase() || "";
    const selectedRoom = classesData.find(
      (item) => item.code === finderInputValue,
    );

    const selectedOtherPolygon = otherPlacesInfo.some(place => place.name === finderInputValue);

    // If there is a selected room, the map it is located in will display and all others will be hidden
    if (selectedRoom?.building) {
      for (const building of buildingInfo) {
        if (selectedRoom.building === building.name) {
          building.layoutMap.classList.remove("hidden");
        } else if (
          selectedRoom.building &&
          selectedRoom.building !== building.name
        ) {
          building.layoutMap.classList.add("hidden");
        }
      }
      areasMap?.classList.add("hidden");
    }
    // If the user selected a place that was on the areas map then the areas map would show and all the layout maps will hide.
    if(selectedOtherPolygon){
      areasMap?.classList.remove("hidden");
      for(const building of buildingInfo){
        building.layoutMap.classList.add("hidden");
      }
    }
  }
}

// Runs enterPressed when the user presses down on their keyboard
finderInput?.addEventListener("keydown", enterPressed);

// When activated, it will close the left sidebar by adding classes to the sidebar's elements to make the sidebar do an animation that moves it off the screen.
function closeLeftSidebar() {
  leftSideBarOpenButton?.classList.remove("hidden");
  leftSideBarOpenButton?.classList.add("appear_animation");

  leftSidebar?.classList.remove("opening");
  leftSidebar?.classList.add("closing");
}

// closeLeftSidebar will run when the left Sidebar Close Button is clicked
leftSideBarCloseButton?.addEventListener("click", closeLeftSidebar);

// When activated, it will open the left sidebar by adding classes to the sidebar's elements to make the sidebar move onto the screen.
function openLeftSidebar() {
  leftSideBarOpenButton?.classList.remove("appear_animation");
  leftSideBarOpenButton?.classList.add("hidden");

  leftSidebar?.classList.remove("closing");
  leftSidebar?.classList.add("opening");
}

// openLeftSidebar will run when the left Sidebar Open Button is clicked
leftSideBarOpenButton?.addEventListener("click", openLeftSidebar);

// By clicking any building polygon, the map will change to the building the user clicked
function changeMap(layoutMap) {
  areasMap?.classList.toggle("hidden");
  layoutMap?.classList.toggle("hidden");
}

// Sets event listeners to all building.polygon and building.backButton elements
for (const building of buildingInfo) {
  // building.polygon opens the layout maps and closes the areas map
  building.polygon.addEventListener("click", () =>
    changeMap(building.layoutMap),
  );
  // building.backButton opens the areas map and closes the layout maps
  building.backButton.addEventListener("click", () =>
    changeMap(building.layoutMap),
  );
}

// Hides the layout maps and shows the areas map
function showAreaMap() {
  // Unhides the areas map
  areasMap?.classList.remove("hidden");

  // Hides all the layout maps
  for (const building of buildingInfo) {
    building.layoutMap.classList.add("hidden");
  }
}

// showAreaMap will run when the navbarTextButton or navbarlogoButton is clicked
navbarTextButton?.addEventListener("click", showAreaMap);
navbarlogoButton?.addEventListener("click", showAreaMap);

// Function to move the finder input to resize the page properly
function changeInputPosition(screenWidth) {
  if (!finderInput) return;

  // If the screen is 1024px or less, this runs
  if (screenWidth.matches) {
    // Move the finder input to the top of the page
    contentDiv?.prepend(finderInput);
  } else {
    // If the screen is larger than 1024px, the input goes back to its original position
    if (finderOriginalNextSibling && finderOriginalParent) {
      finderOriginalParent.insertBefore(finderInput, finderOriginalNextSibling);
    } else {
      // Failsafe in case there isn't an element behind the finder input
      finderOriginalParent?.append(finderInput);
    }
  }
}

// If the screen changes size, the changeInputPosition function is run
mediaQuery1024px.addEventListener("change", changeInputPosition);

// Runs it at the start so that if the screen is less than 1024px to begin with, the finder is in the right place.
changeInputPosition(mediaQuery1024px);

// This code is not to be marked and should be removed before handing in because it was made by AI as a tool to help find the position of things on the map.
const innerMarkerContainers = [
  document.getElementById("sanford_inner_marker_container"),
  document.getElementById("allen_inner_marker_container"),
  document.getElementById("bolam_inner_marker_container"),
  document.getElementById("ec_inner_marker_container"),
  document.getElementById("te-kainga_inner_marker_container"),
  document.getElementById("arts_block_inner_marker_container"),
].filter(Boolean);

function logClickPercent(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const percentLeft = ((offsetX / rect.width) * 100).toFixed(3);
  const percentTop = ((offsetY / rect.height) * 100).toFixed(3);
  console.log(`"top": ${percentTop}, "left": ${percentLeft}`);
}

innerMarkerContainers.forEach((container) => {
  container.addEventListener("click", logClickPercent);
});

// This code is not to be marked and should be removed before handing in — dev tool to help find the position of things on the areas map.
function logAreasMapClickPercent(event) {
  const rect = areasMap.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const percentLeft = ((offsetX / rect.width) * 100).toFixed(3);
  const percentTop = ((offsetY / rect.height) * 100).toFixed(3);
  console.log(`top_pos: ${percentTop}, left_pos: ${percentLeft}`);
}

areasMap?.addEventListener("click", logAreasMapClickPercent);