
btnTarget.onclick=function(){
  ChangeForm(target)
}

btnWally.onclick=function(){
  ChangeForm(walmart)
}

btnWohlners.onclick=function(){
  ChangeForm(wohlners)
}

btnHomebound.onclick=function(){
  ChangeForm(afterLogin)
}

// Create two div elements named panel and map
let panelDiv = document.createElement('div')
panelDiv.setAttribute('id', 'panel')

let mapDiv = document.createElement('div')
mapDiv.setAttribute('id', 'map')

// Add the panel and map divs to the <body>
document.body.appendChild(panelDiv)
document.body.appendChild(mapDiv)

// Create script element for main JS map functionality
let mapScript = document.createElement("script");
// Add script content
//mapScript.type = "module"
//mapScript.src = "main.js"
// Append
document.body.appendChild(mapScript);



// Import main JS module - only for Node.js
//let main = require("./main");
// main.main()




// Create script element for API connection
let apiScript = document.createElement("script");
// Add script content
apiScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAUYQCfTMugPMx1OT2BiGQnppgwKIWsI9g&libraries=places&callback=initMap">
// apiScript.async = true
// Append
document.body.appendChild(apiScript);