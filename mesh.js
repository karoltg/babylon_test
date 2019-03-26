import { scene } from "./scene.js";

var sphere 
// = BABYLON.Mesh.CreateSphere('sphere',12,3,scene);
	// sphere.position.y = 2;

export { sphere };



var grid = new BABYLON.GridMaterial("grid", scene);	
	grid.gridRatio = 0.1;
	grid.majorUnitFrequency = 10;
	grid.minorUnitVisibility = 0.4;
	grid.mainColor = BABYLON.Color3.White();
	grid.lineColor = BABYLON.Color3.Black();
    
export { grid };

// add gui buttons and elements
// var oldgui = document.getElementById("datGUI");
// if (oldgui != null){
// 	oldgui.remove();
// }

// var gui = new dat.GUI();	
// 	gui.domElement.style.marginTop = "100px";
// 	gui.domElement.id = "datGUI";
//     var options = {
// 	    diameter: 0.1,
//     }

// gui.add()
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

var button = BABYLON.GUI.Button.CreateImageWithCenterTextButton("but","Click Me");
button.width = "100px";
button.height = "40px";
button.color = "white";
button.background = "green";
button.top = "50px";
button.fontOffset = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
advancedTexture.addControl(button);

button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT; 
button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

export { button };




//later add drawings of walls here
scene.onPointerDown = function(evt, pickResult)
{

};


scene.registerBeforeRender(function(){

});