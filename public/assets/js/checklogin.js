window.addEventListener("load", start);
function start(){
(function (jQuery, Firebase, Path) {
    "use strict";

    // the main firebase reference
    var rootRef = new Firebase('https://vivid-fire-6481.firebaseio.com/');
    var auth=rootRef.getAuth();
    if(auth){
        $('.logtext').text("Logout").attr("href","").on('click',unauthenticate);
        $('#accountText').text(auth.password.email+"");
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
            $('#accountText').text("My Account");
        }else{
            console.log("Error when attemtping to unauthenticate user");
        }
    }

   

}(window.jQuery, window.Firebase, window.Path))
};//]]> 
