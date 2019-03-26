import { sphere, grid, button } from "./mesh.js";
import { createScene, engine } from "./scene.js";

window.addEventListener('DOMContentLoaded', function(){

            // call the createScene function
            var scene = createScene();
            
            // run the render loop
            engine.runRenderLoop(function(){
                scene.render();
            });

            // the canvas/window resize event handler
            window.addEventListener('resize', function(){
                engine.resize();
            });
                     
        });

