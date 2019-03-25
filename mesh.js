import { scene } from "./scene.js";

var sphere = BABYLON.Mesh.CreateSphere('sphere',12,3,scene);
	sphere.position.y = 2;

export { sphere };

var grid = new BABYLON.GridMaterial("grid", scene);	
	grid.gridRatio = 0.1;
	grid.majorUnitFrequency = 10;
	grid.minorUnitVisibility = 0.4;
	grid.mainColor = BABYLON.Color3.White();
    
export { grid };