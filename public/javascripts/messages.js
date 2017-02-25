function uiMakeToMessage(text){
    return "<p class='msg msg-to'><span class='label label-primary'>"+text+"</span></p>";
}

function uiSendMessage(){
    var message = $("#message-text").val();
    var msg_to = uiMakeToMessage(message);
    $("#messages-container").append(msg_to);
    $("#message-text").val("");
}

var MessageSession = {
    session: function(){
        let chatClient = new Twilio.Chat.Client(token);
        chatClient.initialize()
        .then(() => {
            // Now you can do anything!
        });
        this.channel = messagingClient.createChannel({
            uniqueName: 'international-student-faq-chat',
            friendlyName: 'International Student FAQ Chat'
        });
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

$(document).ready(function(){
    console.log("Document ready");
    $("#send-button").on("click", function(){
        console.log("Trigger Send button");
        uiSendMessage();
    });
});