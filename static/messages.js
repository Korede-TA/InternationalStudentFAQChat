function uiMakeToMessage(text){
    return "<p class='msg msg-to'><span class='label label-primary'>"+text+"</span></p>";
}

function uiMakeFromMessage(text){
    return "<p class='msg msg-from'><span class='label label-primary'>"+text+"</span></p>";
}

function uiSendMessage(){
    var message = $("#message-text").val();
    var msg_to = uiMakeToMessage(message);
    $("#messages-container").append(msg_to);
    $("#message-text").val("");
}   

$(document).ready(function(){
    console.log("Document ready");
    $("#send-button").on("click", function(){
        console.log("Trigger Send button");
        uiSendMessage();
    });

    $("#message-text").on("focus", function(){
        $("#message-text").keypress(function( event ) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if ( keycode == 13 ){
                console.log("Trigger Send button");
                uiSendMessage();
            }
        });
    });
});

function sendMessage(message){
    var URL = "localhost:5000/answer?q="+message;
    //Yigit
}