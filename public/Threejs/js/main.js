
// Set up the scene, camera, and renderer as global variables.
var scene, camera, renderer;
init();
animate();


// Sets up the scene.
function init() {

  // Create the scene and set the scene size.
  scene = new THREE.Scene();
  var WIDTH = 300;
      HEIGHT = 400;
container = document.getElementById("threeModel");

//document.body.appendChild( container );
  // Create a renderer 
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(WIDTH, HEIGHT);
  container.appendChild(renderer.domElement);
  console.log("Appended to the child!");
  renderer.domElement.id = "context"


  
  // Create a camera, zoom it out from the model a bit, and add it to the scene.
 
  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 300);
  camera.position.set(0,0,4);
  scene.add(camera);
  camera.lookAt(scene);

  // Create a light, set its position, and add it to the scene.

  var light = new THREE.PointLight(0xffffff);
  var backLight = new THREE.PointLight(0xffffff);
  light.position.set(-100,200,100);
  backLight.position.set(100,-200,-100);
  scene.add(light);
  scene.add(backLight);

  // Add a white PointLight to the scene.

  var loader = new THREE.JSONLoader();
  var numOfObjects = 0;
  //These are hardcoded examples that need to be changed for the next iteration ()
  load_body("sample",0xffffff);

/*
Method that loads the body onto the canvas (while applying the appropiate meshes ect.)
Third parameter will be handled by outside js file that calculates scaling for clothing
and body position.
*/
function load_body(file,color2) {
    loader.load( 'Threejs/bodies/'+file+'.js', function(geometry){
    var material = new THREE.MeshLambertMaterial({color: color2});
    var mesh = new THREE.Mesh( geometry, material);
    scene.add(mesh);
    mesh.position.set(0, -1, 0);

  });
}

function load_clothing(file,color2,gender) {
    if (scene.getObjectByName(file) === undefined) {
      loader.load( 'Threejs/clothing/'+file+'.js', function(geometry){
      var material = new THREE.MeshLambertMaterial({color: color2});
      clothing = new THREE.Mesh( geometry, material);
      clothing.name = file;
      scene.add(clothing);
      clothing.position.set(0.05, -0.05, -0.02);
      clothing.scale.set(1.3,1,1.5);
      clothing.translateY(0.01);
      
    });
  }
  else {
    scene.remove(scene.getObjectByName(file));
    
  }
}

$(document).ready(function(){
  var state = $("#appendClothing").text();
  $("#appendClothing").click(function(){
    load_clothing('basic-shirt',0x00ffcc,state);
    if (state === "Put it on."){
    state = "Take it off.";
    }
    else {
      state = "Put it on.";
    }
    $("#appendClothing").text(state);
  });

});
  
  

  // Add OrbitControls so that we can pan around with the mouse.
  controls = new THREE.OrbitControls(camera, renderer.domElement);
}

// Renders the scene and updates the render as needed.
function animate() {

  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  controls.update();
}

