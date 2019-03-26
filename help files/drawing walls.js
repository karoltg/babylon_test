var createScene = function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(-15, 15, -15), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;
	
	// Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 50, 50, 1, scene);

	var firstClick = true; 
	var firstClickPos = null;
	var myWall = null;

	scene.onPointerDown = function (evt, pickResult) {
    	if (pickResult.hit) {
			
		   if(firstClick) {
			   firstClick = false;
			   
	   			firstClickPos = new BABYLON.Vector2(
					pickResult.pickedPoint.x,
					pickResult.pickedPoint.z
				);
			   
			   myWall = BABYLON.Mesh.CreateBox("wall", 1, scene);
			   myWall.isPickable = false;
			   var materialBlack = new BABYLON.StandardMaterial("texture1", scene);
			   //materialBlack.diffuseColor = BABYLON.Color3.Black();
			   myWall.material = materialBlack;
			   myWall.position.x = firstClickPos.x;
			   myWall.position.y = 0.5;
			   myWall.position.z = firstClickPos.y;
			   myWall.scaling.x = 0.1;
			   myWall.scaling.y = 1;
			   myWall.scaling.z = 0.1;
		   }
		   else {
			   firstClick = true;
		   }
    	}
    };
	
	var that = this;
	scene.registerBeforeRender(function() {
		
		if(!firstClick) {
			var pickResult = scene.pick(scene.pointerX, scene.pointerY);
				
			var secondClickPos = new BABYLON.Vector2(
				pickResult.pickedPoint.x,
				pickResult.pickedPoint.z
			);
			
			var middlePos = new BABYLON.Vector2(
				(secondClickPos.x - firstClickPos.x) /2 + firstClickPos.x,
				(secondClickPos.y - firstClickPos.y) /2 + firstClickPos.y
			);
			
			myWall.position.x = middlePos.x;
			myWall.position.z = middlePos.y;
			
			var distance = Math.sqrt(
				Math.pow(secondClickPos.x - firstClickPos.x, 2) +
				Math.pow(secondClickPos.y - firstClickPos.y, 2)
			);
			myWall.scaling.x = distance;
			
			myWall.rotation.y = Math.atan2(
				secondClickPos.x - firstClickPos.x,
				secondClickPos.y - firstClickPos.y
			) - Math.PI/2;
		}
	});

    return scene;

};