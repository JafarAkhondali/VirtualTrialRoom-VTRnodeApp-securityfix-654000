window.addEventListener("load", start);
function start(){
(function (jQuery, Firebase, Path) {
    "use strict";
    // the main firebase reference
    var rootRef = new Firebase('https://vivid-fire-6481.firebaseio.com/');
    console.log("my butt");
    var auth=rootRef.getAuth();
    if(auth === null){
        window.location="login.html";
    }


   

}(window.jQuery, window.Firebase, window.Path))
};//]]> 
