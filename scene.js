import { sphere, grid } from "./mesh.js";

// get the canvas DOM element
var canvas = document.getElementById('renderCanvas');

// load the 3D engine
var engine = new BABYLON.Engine(canvas, true);

// create a basic BJS Scene object
var scene = new BABYLON.Scene(engine);

var createScene = function(){
    
    // create a FreeCamera, and set its position to (x:0, y:5, z:-10)
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);
    
    // target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // attach the camera to the canvas
    camera.attachControl(canvas, false);

    // create a basic light, aiming 0,1,0 - meaning, to the sky
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

    // create a built-in "ground" shape;
    var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);
    ground.material = grid;

    // return the created scene
    return scene;
}


export { createScene, scene, engine, canvas };