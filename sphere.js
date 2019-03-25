import { scene } from "./scene.js";
var sphere = BABYLON.Mesh.CreateSphere('sphere',12,3,scene);
sphere.position.y = 2;

export { sphere };