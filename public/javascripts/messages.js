// Avoid Jquery
function uiSendMessage(messsage){
    var div = document.createElement("DIV");
    div.className = "msg-from bn bg-blue";
    var p = document.createElement("P");
    p.className = "msg-from bn bg-blue";
    var text = document.createTextNode(message);
    p.appendChild(text); div.appendChild(p);
    document.getElementById("messages-container").appendChild(div); //Hits the DOM
}

function uiShowTypingIndicator(){
    document.getElementById("typing-indicator").style.dislay = "inline";
}

function uiHideTypingIndicator(){
    document.getElementById("typing-indicator").style.dislay = "none";
}

function uiToggleTypingIndicator(){
    if(document.getElementById("typing-indicator").style.dislay == "none"){
        document.getElementById("typing-indicator").style.dislay = "inline";
    }else{
        document.getElementById("typing-indicator").style.dislay = "none";
    }
}

var MessageSession = {
    session: function(){
        try{
            let chatClient = new Twilio.Chat.Client(token);
            chatClient.initialize()
            .then(() => {
                // Now you can do anything!
            });
            this.channel = messagingClient.createChannel({
                uniqueName: 'international-student-faq-chat',
                friendlyName: 'International Student FAQ Chat'
            });
        }catch(){

        }
        
    },
    send: function(message){
        // 'messsage' parameter is a string that can come in the form of Markdown
        // Finf markdown processor pugin to convert to view-friendly html
        var msg = document.getElementById("message-input").value();
        myChannel.sendMessage(msg);
        uiSendMessage(msg); // Display sent message
        document.getElementById("message-input").value() = "";
    },
    update: function(){

    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    
});