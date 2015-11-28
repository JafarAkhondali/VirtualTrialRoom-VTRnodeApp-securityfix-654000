window.addEventListener("load", start);
function start(){
(function (jQuery, Firebase, Path) {
    "use strict";

    // the main firebase reference
    var rootRef = new Firebase('https://vivid-fire-6481.firebaseio.com/');
    var auth=rootRef.getAuth();
    if(auth){
        $('.logtext').text("Logout").attr("href","").on('click',unauthenticate);
    }else{
        $('.loginout').attr("href","login.html");
        $('.logtext').text("Login").on('click',function(){});
    }
    function unauthenticate(){
        rootRef.unauth();
        var loggedOut=(boolean)(rootRef.getAuth());
        if(loggedOut){
            $('.logtext').text("Login").on('click',function(){});
            $('.loginout').attr("href","login.html");
        }else{
            alert("didn't work");
        }
    }

   

}(window.jQuery, window.Firebase, window.Path))
};//]]> 
