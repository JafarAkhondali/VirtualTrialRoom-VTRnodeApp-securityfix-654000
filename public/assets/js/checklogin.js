window.addEventListener("load", start);
function start(){
(function (jQuery, Firebase, Path) {
    "use strict";

    // the main firebase reference
    var rootRef = new Firebase('https://vivid-fire-6481.firebaseio.com/');
    var auth=rootRef.getAuth();
    if(auth){
        $('.logtext').text("Logout").attr("href","logout.html");
    }else{
        $('.loginout').attr("href","login.html");
    }


   

}(window.jQuery, window.Firebase, window.Path))
};//]]> 
